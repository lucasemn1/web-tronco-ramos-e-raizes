import BaseService from "./BaseService";
import Document from "../../interfaces/entities/Document";

class DocumentService extends BaseService<Document> {
  constructor(endpoint: string) {
    super(endpoint);
  }
}

export default DocumentService;
