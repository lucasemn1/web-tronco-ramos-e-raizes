import axios, { AxiosInstance } from "axios";
import PaginatedResponse from "../../interfaces/PaginatedResponse";
import ServiceResponse from "../../interfaces/ServiceResponse";

class BaseService<T> {
  protected connection: AxiosInstance;
  protected endpoint: string;

  constructor(endpoint: string) {
    this.connection = axios.create({
      baseURL: "http://localhost:8000/api/v1",
    });

    this.endpoint = endpoint;
  }

  public async getOne(id: number): Promise<ServiceResponse<T>> {
    try {
      const response = await this.connection.get<T>(`/${this.endpoint}/${id}/`);

      return {
        response,
        data: response.data,
        status: true,
      };
    } catch (err) {
      return {
        response: err.response,
        data: err.response?.data,
        status: false,
      };
    }
  }

  public async getAll(): Promise<ServiceResponse<PaginatedResponse<T>>> {
    try {
      const response = await this.connection.get<PaginatedResponse<T>>(`/${this.endpoint}/`);

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
