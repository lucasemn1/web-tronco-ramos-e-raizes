import Exhibition from "../../interfaces/entities/Exhibition";
import BaseService from "./BaseService";

class ExhibitionService extends BaseService<Exhibition> {
  constructor() {
    super("exposures");
  }
}

export default ExhibitionService;
