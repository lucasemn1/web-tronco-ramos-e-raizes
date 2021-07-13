export default interface Album<T> {
  id: number;
  title: string;
  user: string;
  images: T[];
}
