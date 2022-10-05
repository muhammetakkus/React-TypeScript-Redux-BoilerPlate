import { NavLink, Outlet } from "react-router-dom";
import Header from '../design/systems/Header'
import Footer from '../design/systems/Footer'
import Menu from "../design/systems/Menu";

const AdminLayout = () => {

    return (
        <>
    
        <div id="main-wrapper">
        
            <Header />

            <div className="content-body">
                <div className="container-fluid">
           
                    <Outlet />   

                </div>
            </div>
            
            <Menu />
            
            <Footer />       
    
        </div>
        
        </>
    );
};

export default AdminLayout;
