import { NavLink } from "react-router-dom";

export default function Menu() {
    return (
    <div className="deznav">
        <div className="deznav-scroll">
            <ul className="metismenu" id="menu">
                <li>
                    <a className="has-arrow ai-icon" href="#" aria-expanded="false">
                        <i className="flaticon-381-networking"></i>
                        <span className="nav-text">Başlangıç</span>
                    </a>
                    <ul aria-expanded="false">
                        <li><NavLink to={'/'}>Genel Özet</NavLink></li>
                        <li><NavLink to={'/order'}>Siparişler</NavLink></li>
                    </ul>
                </li>  

                <li>
                    <a className="has-arrow ai-icon" href="#" aria-expanded="false">
                        <i className="flaticon-381-settings-6"></i>
                        <span className="nav-text">Ayarlar</span>
                    </a>
                    <ul aria-expanded="false">
                        <li><NavLink to="/settings/website">Web Site Ayarları</NavLink></li>
                        <li><NavLink to={'/settings/posapp'}>Posapp Ayarları</NavLink></li>
                        <li>
                            <a className="has-arrow" href="#" aria-expanded="false">Email</a>
                            <ul aria-expanded="false">
                                <li><a href="./email-compose.html">Compose</a></li>
                                <li><a href="./email-inbox.html">Inbox</a></li>
                                <li><a href="./email-read.html">Read</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li>
                    <a className="has-arrow ai-icon" href="#" aria-expanded="false">
                        <i className="flaticon-381-price-tag"></i>
                        <span className="nav-text">Ürünler</span>
                    </a>
                    <ul aria-expanded="false">
                        <li><a href="./app-profile.html">Ürün Yönetimi</a></li>
                        <li><a href="./post-details.html">Kategoriler</a></li>
                        <li>
                            <a className="has-arrow" href="#" aria-expanded="false">Email</a>
                            <ul aria-expanded="false">
                                <li><a href="./email-compose.html">Compose</a></li>
                                <li><a href="./email-inbox.html">Inbox</a></li>
                                <li><a href="./email-read.html">Read</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li>
                    <a className="has-arrow ai-icon" href="#" aria-expanded="false">
                        <i className="flaticon-381-user-9"></i>
                        <span className="nav-text">Oturum Yönetimi</span>
                    </a>
                    <ul aria-expanded="false">
                        <li><NavLink to={'/auth-settings/users'}>Kullanıcılar</NavLink></li>
                        <li><NavLink to={'/auth-settings/roles'}>Roller</NavLink></li>
                        <li><NavLink to={'/auth-settings/permissions'}>İzinler</NavLink></li>
                    </ul>
                </li>
        
            </ul>
            
            <div className="copyright">
                <p><strong>TEdisyon Restoran Yazılımı</strong> © 2021 Tüm Hakları Saklıdır</p>
                <p>Yazılım <span className="heart"></span> TE Bilişim</p>
            </div>

        </div>
    </div> 
    )
}