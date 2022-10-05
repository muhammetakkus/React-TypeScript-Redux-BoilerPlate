import { NavLink } from "react-router-dom";

const ListPermissions = () => {

    return (
        <div>
            <div className="d-flex justify-content-between">
                <h2>İzinler</h2>
                <NavLink to={'/auth-settings/create-permission'}>Yeni İzin</NavLink>
            </div>
            
            <section>
                <b>ListPermission Page</b>
            </section>
        </div>
    );
};

export default ListPermissions;
