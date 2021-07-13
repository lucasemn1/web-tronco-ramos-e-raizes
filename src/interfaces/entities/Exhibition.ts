import Album from "./Album";
import Image from "./Image";
import Tag from "./Tag";
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
  albumImage: Album<Image> | null;
  albumVideo: null;
  albumAudio: null;
  tags: Tag[];
  users: User[];
}
