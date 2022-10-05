import { NavLink } from "react-router-dom";

const ListRoles = () => {

    return (
        <div>
            <div className="d-flex justify-content-between">
                <h2>Roller</h2>
                <NavLink to={'/auth-settings/create-role'}>Yeni Role</NavLink>
            </div>
            
            <section>
                <b>List Roles Page</b>
            </section>
        </div>
    );
};

export default ListRoles;
