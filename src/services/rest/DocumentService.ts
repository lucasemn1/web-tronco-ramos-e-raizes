import BaseService from "./BaseService";
import Document from "../../interfaces/entities/Document";

class DocumentService extends BaseService<Document> {
  constructor() {
    super("documents");
  }
}

export default DocumentService;
