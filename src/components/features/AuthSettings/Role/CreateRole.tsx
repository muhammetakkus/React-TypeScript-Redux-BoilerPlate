import axios from "axios";
import { useAppDispatch } from "../../../../shared/store";
import Input from "../../../design/atoms/input";
import { createItem } from "./role.reducer";

const CreateRole = () => {

    const dispatch = useAppDispatch()

    const createRole = () => {
        const data = {
            role_name: "user",
            permissions: 'perm'
        }
        // axios.post("/role", data) - bu gönderiyor redux ile gitmiyor data
        dispatch(createItem(data))
    }

    return (
        <div>
            <Input />
            <button onClick={() => createRole()}>Rol Oluştur</button>
        </div>
    );
};

export default CreateRole;
