import axios from "axios";
import { RoleModel } from "../models/role.model";

class Role {
    prefix: string;
    
    constructor() {
        this.prefix = "/role";
    }

    create(payload: RoleModel, options?: object) {
        console.log(payload)
        return axios.post(`${this.prefix}`, payload, options);
    }

    getAll() {
        return axios.get(this.prefix);
    }

    get(id: number | string) {
        return axios.get(`${this.prefix}/${id}`);
    }

    update(data: RoleModel, options?: object) {
        console.log(data)
        return axios.put(`${this.prefix}/${data.id}`, data, options);
    }

    delete(id: number | string) {
        return axios.delete(`${this.prefix}/${id}`);
    }
}

export default new Role();