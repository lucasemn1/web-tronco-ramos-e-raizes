import Tag from "./Tag";

export default interface Document {
  id: number;
  user: number;
  title: string;
  is_public: string;
  created_at: Date;
  updated_at: Date;
  file: string;
  tags: Tag[];
}
