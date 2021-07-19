import Tag from "./Tag";

export default interface Image {
  id: number;
  album: number;
  user: string;
  title: string;
  author: string;
  image: string;
  tags: Tag[];
}
