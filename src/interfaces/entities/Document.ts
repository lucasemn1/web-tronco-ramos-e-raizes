import Tag from "./Tag";

export default interface Document {
  id: number;
  user: number;
  title: string;
  is_public: string;
  createdAt: string;
  updatedAt: string;
  file: string;
  tags: Tag[];
}
