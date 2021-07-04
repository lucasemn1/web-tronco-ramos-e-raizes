import axios, { AxiosInstance } from "axios";
import ServiceResponse from "../../interfaces/ServiceResponse";

class BaseService<T> {
  protected connection: AxiosInstance;
  protected enpoint: string;

  constructor(endpoint: string) {
    this.connection = axios.create({
      baseURL: "https://localhost:8000",
    });

    this.enpoint = endpoint;
  }

  public async getOne(id: number): Promise<ServiceResponse<T>> {
    try {
      const response = await this.connection.get<T>(`/${this.enpoint}/${id}/`);

      return {
        response,
        data: response.data,
        status: true,
      };
    } catch (err) {
      return {
        response: err.response,
        data: err.response.data,
        status: false,
      };
    }
  }

  public async getAll(): Promise<ServiceResponse<T>> {
    try {
      const response = await this.connection.get<T>(`/${this.enpoint}/`);

      return {
        response,
        data: response.data,
        status: true,
      };
    } catch (err) {
      return {
        response: err.response,
        data: err.response.data,
        status: false,
      };
    }
  }
}

export default BaseService;
