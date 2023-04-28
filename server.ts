import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express, { Response, Request } from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 3001;
const requestHandler = express.static(path.resolve('/public'));

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });
  app.use(vite.middlewares);
  app.use('*', async (req: Request, res: Response, next) => {
    const url = req.originalUrl;
    app.use(requestHandler);
    app.use('/assets', requestHandler);

    try {
      let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      const parts = template.split(`<!-- ssr-outlet -->`);
      res.write(parts[0]);
      const { render } = await vite.ssrLoadModule('/src/serverApp.tsx');
      const { stream, injectPreload } = await render(url, {
        onShellReady() {
          stream.pipe(res);
        },
        onAllReady() {
          const withPreload = parts[1].replace('<!--preload-->', injectPreload());
          res.write(withPreload);
          res.end();
        },
        onError(err: Error) {
          console.error(err);
        },
      });
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
  return { app };
}

createServer().then(({ app }) => {
  app.listen(PORT, () => {
    console.log(`Server start on port http://localhost:${PORT}`);
  });
});
