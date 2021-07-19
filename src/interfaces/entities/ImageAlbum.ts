import Image from "./Image";

export default interface ImageAlbum {
  id: number;
  title: string;
  user: string;
  images: Image[];
}
