import type {AxiosInstance} from "axios";
import axios from "axios";
import type {HomeResponseModel} from "@/api/data/response/HomeResponseModel";


abstract class BaseService {
    api: AxiosInstance

    constructor() {
        this.api = axios.create(
            {
                baseURL: 'https://borislove.ru:8000',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
                transformRequest: [
                    (data) => {
                        return JSON.stringify(data)
                    }
                ],
                transformResponse: [
                    (data) => {
                        return JSON.parse(data)
                    }
                ]
            }
        );
    }

    async request<Type>(path: string): Promise<Type>{
        return await this.api.get(path).then(data => data.data);
    }

}

export default BaseService;