import { AxiosResponse } from "axios";

export default interface ServiceResponse<T> {
  response: AxiosResponse;
  data: T;
  status: boolean;
}
