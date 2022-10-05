import { NavLink, Outlet } from "react-router-dom";
import Header from '../design/systems/Header'
import Footer from '../design/systems/Footer'

const AdminLayout = () => {

    return (
        <div id="main-wrapper">
    
            <Header />

                <div className="container">
           
                    <Outlet />   

                </div>
   
            <Footer />       
    
        </div>
    );
};

export default AdminLayout;
