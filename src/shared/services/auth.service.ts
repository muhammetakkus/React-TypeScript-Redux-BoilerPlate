import axios from "axios";
import { UserModel } from "../models/user.model";

class Auth {
    prefix: string;
    
    constructor() {
        this.prefix = "permission";
    }

    async login(payload: UserModel) {
        return await axios.post(this.prefix, payload);
    }
}

export default new Auth();