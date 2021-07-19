import ImageAlbum from "../../interfaces/entities/ImageAlbum";
import BaseService from "./BaseService";

class ImageAlbumService extends BaseService<ImageAlbum> {
  constructor() {
    super("album_images");
  }
}

export default ImageAlbumService;
