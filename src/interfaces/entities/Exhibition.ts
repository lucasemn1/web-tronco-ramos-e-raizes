import Tag from "./Tag";
import ImageAlbum from "./ImageAlbum";
import User from "./User";

export default interface Exhibition {
  id: number;
  title: string;
  legend: string;
  content: string;
  isPublic: string;
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
  albumImage: ImageAlbum | null;
  albumVideo: null;
  albumAudio: null;
  tags: Tag[];
  users: User[];
  views: number;
}
