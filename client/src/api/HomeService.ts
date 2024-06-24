import BaseService from "@/api/BaseService";
import type {HomeResponseModel} from "@/api/data/response/HomeResponseModel";
import type {UsersResponseModel} from "@/api/data/response/UsersResponseModel";


export class HomeService extends BaseService {


    async getHomeContent(): Promise<HomeResponseModel> {
        return this.request<HomeResponseModel>("/");
    }

    async getUsers() : Promise<UsersResponseModel[]> {
        return this.request<UsersResponseModel[]>("/users");
    }

}