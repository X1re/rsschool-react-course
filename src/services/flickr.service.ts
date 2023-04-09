import http from './http.service';

export type Photos = {
  photo: Array<Photo>;
};

export type Photo = {
  farm: number;
  id: string;
  isfamily: number;
  isfriend: number;
  ispublic: number;
  owner: string;
  secret: string;
  server: string;
  title: string;
  onShowModal: () => void;
  onCardClick: (id: string) => void;
  type: string;
};

const interestingEndpoint = `?method=flickr.interestingness.getList&api_key=${
  import.meta.env.VITE_FLICKR_KEY
}&per_page=12&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1`;

const photoSearchEndpoint = `?method=flickr.photos.search&api_key=${
  import.meta.env.VITE_FLICKR_KEY
}&per_page=12&format=json&nojsoncallback=1&text=`;

const interestingPhotos = {
  get: async (): Promise<Photos> => {
    const req = await http.get(interestingEndpoint);
    return req.data.photos;
  },
};
const photoSearch = {
  get: async (query: string): Promise<Photos> => {
    const req = await http.get(photoSearchEndpoint + `${query}`);
    return req.data.photos;
  },
};

const flickr = {
  interesting: interestingPhotos,
  search: photoSearch,
};

export default flickr;
