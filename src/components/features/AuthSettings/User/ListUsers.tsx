import { NavLink } from "react-router-dom";

const ListUsers = () => {

    return (
        <div>
            <div className="d-flex justify-content-between">
                <h2>Kullanıcılar</h2>
                <NavLink to={'/auth-settings/create-user'}>Yeni Kullanıcı</NavLink>
            </div>
            
            <section>
                <b>List User Page</b>
            </section>
        </div>
    );
};

export default ListUsers;
