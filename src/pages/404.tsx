import travolta from '../assets/confused-john-travolta.gif';
import '../styles/pages/404.css';

const NotFound = () => {
  return (
    <div className="notFound" data-testid="404">
      <h1>404</h1>
      <img src={travolta} height="388" width="400" alt="travolta" />
      <h2>Oops something went wrong! This page does not exist.</h2>
    </div>
  );
};

export default NotFound;
