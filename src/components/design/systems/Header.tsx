import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <>
        <div className="nav-header">
            
            <NavLink to={'/'} className="brand-logo">
                {/* <img className="logo-abbr" src="/src/assets/images/logo.png" alt="" /> */}
                <img className="logo-compact" src="/src/assets/images/tedisyon_long_2.png" alt="" />
                <img className="brand-title" src="/src/assets/images/tedisyon_long_2.png" alt="" />
            </NavLink>

            <div className="nav-control">
                <div className="hamburger">
                    <span className="line"></span><span className="line"></span><span className="line"></span>
                </div>
            </div>
        </div>
        
        {/* ChatBox Kısmı Hata Veriyor */}

        <div className="header">
            <div className="header-content">
                <nav className="navbar navbar-expand">
                    <div className="collapse navbar-collapse justify-content-between">
                        <div className="header-left">
                            <div className="dashboard_bar">
                                Başlangıç
                                <span>tedisyona Hoşgeldiniz</span>
                            </div>
                        </div>
                        <ul className="navbar-nav header-right">
                            <li className="nav-item">
                                <div className="input-group search-area d-xl-inline-flex d-none">
                                    <input type="text" className="form-control" placeholder="Search here..." />
                                    <div className="input-group-append">
                                        <span className="input-group-text"><a href="#"><i className="flaticon-381-search-2"></i></a></span>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown notification_dropdown">
                                <a className="nav-link  ai-icon" href="#" role="button" data-toggle="dropdown">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.75 15.8385V13.0463C22.7471 10.8855 21.9385 8.80353 20.4821 7.20735C19.0258 5.61116 17.0264 4.61555 14.875 4.41516V2.625C14.875 2.39294 14.7828 2.17038 14.6187 2.00628C14.4546 1.84219 14.2321 1.75 14 1.75C13.7679 1.75 13.5454 1.84219 13.3813 2.00628C13.2172 2.17038 13.125 2.39294 13.125 2.625V4.41534C10.9736 4.61572 8.97429 5.61131 7.51794 7.20746C6.06159 8.80361 5.25291 10.8855 5.25 13.0463V15.8383C4.26257 16.0412 3.37529 16.5784 2.73774 17.3593C2.10019 18.1401 1.75134 19.1169 1.75 20.125C1.75076 20.821 2.02757 21.4882 2.51969 21.9803C3.01181 22.4724 3.67904 22.7492 4.375 22.75H9.71346C9.91521 23.738 10.452 24.6259 11.2331 25.2636C12.0142 25.9013 12.9916 26.2497 14 26.2497C15.0084 26.2497 15.9858 25.9013 16.7669 25.2636C17.548 24.6259 18.0848 23.738 18.2865 22.75H23.625C24.321 22.7492 24.9882 22.4724 25.4803 21.9803C25.9724 21.4882 26.2492 20.821 26.25 20.125C26.2486 19.117 25.8998 18.1402 25.2622 17.3594C24.6247 16.5786 23.7374 16.0414 22.75 15.8385ZM7 13.0463C7.00232 11.2113 7.73226 9.45223 9.02974 8.15474C10.3272 6.85726 12.0863 6.12732 13.9212 6.125H14.0788C15.9137 6.12732 17.6728 6.85726 18.9703 8.15474C20.2677 9.45223 20.9977 11.2113 21 13.0463V15.75H7V13.0463ZM14 24.5C13.4589 24.4983 12.9316 24.3292 12.4905 24.0159C12.0493 23.7026 11.716 23.2604 11.5363 22.75H16.4637C16.284 23.2604 15.9507 23.7026 15.5095 24.0159C15.0684 24.3292 14.5411 24.4983 14 24.5ZM23.625 21H4.375C4.14298 20.9999 3.9205 20.9076 3.75644 20.7436C3.59237 20.5795 3.50014 20.357 3.5 20.125C3.50076 19.429 3.77757 18.7618 4.26969 18.2697C4.76181 17.7776 5.42904 17.5008 6.125 17.5H21.875C22.571 17.5008 23.2382 17.7776 23.7303 18.2697C24.2224 18.7618 24.4992 19.429 24.5 20.125C24.4999 20.357 24.4076 20.5795 24.2436 20.7436C24.0795 20.9076 23.857 20.9999 23.625 21Z" fill="#4C8147"/>
                                    </svg>
                                    <span className="badge light text-white bg-primary rounded-circle">12</span>
                                </a>
                                <div className="dropdown-menu rounded dropdown-menu-right">
                                    <div id="DZ_W_Notification1" className="widget-media dz-scroll p-3 height380">
                                        <ul className="timeline">
                                            <li>
                                                <div className="timeline-panel">
                                                    <div className="media mr-2">
                                                        <img alt="image" width="50" src="/src/assets/images/avatar/1.jpg" />
                                                    </div>
                                                    <div className="media-body">
                                                        <h6 className="mb-1">Dr sultads Send you Photo</h6>
                                                        <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="timeline-panel">
                                                    <div className="media mr-2 media-info">
                                                        KG
                                                    </div>
                                                    <div className="media-body">
                                                        <h6 className="mb-1">Resport created successfully</h6>
                                                        <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="timeline-panel">
                                                    <div className="media mr-2 media-success">
                                                        <i className="fa fa-home"></i>
                                                    </div>
                                                    <div className="media-body">
                                                        <h6 className="mb-1">Reminder : Treatment Time!</h6>
                                                        <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="timeline-panel">
                                                    <div className="media mr-2">
                                                        <img alt="image" width="50" src="/src/assets/images/avatar/1.jpg" />
                                                    </div>
                                                    <div className="media-body">
                                                        <h6 className="mb-1">Dr sultads Send you Photo</h6>
                                                        <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="timeline-panel">
                                                    <div className="media mr-2 media-danger">
                                                        KG
                                                    </div>
                                                    <div className="media-body">
                                                        <h6 className="mb-1">Resport created successfully</h6>
                                                        <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="timeline-panel">
                                                    <div className="media mr-2 media-primary">
                                                        <i className="fa fa-home"></i>
                                                    </div>
                                                    <div className="media-body">
                                                        <h6 className="mb-1">Reminder : Treatment Time!</h6>
                                                        <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <a className="all-notification" href="#">See all notifications <i className="ti-arrow-right"></i></a>
                                </div>
                            </li>
                            <li className="nav-item dropdown notification_dropdown">
                                <a className="nav-link bell bell-link" href="#">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.4604 3.84863H5.31685C4.64745 3.84937 4.00568 4.11561 3.53234 4.58895C3.059 5.06229 2.79276 5.70406 2.79202 6.37346V18.156C2.79276 18.8254 3.059 19.4672 3.53234 19.9405C4.00568 20.4138 4.64745 20.6801 5.31685 20.6808C5.54002 20.6809 5.75401 20.7697 5.91181 20.9275C6.06961 21.0853 6.15832 21.2993 6.15846 21.5224V23.3166C6.15846 23.6212 6.24115 23.9202 6.39771 24.1815C6.55427 24.4429 6.77882 24.6569 7.04744 24.8006C7.31605 24.9444 7.61864 25.0125 7.92295 24.9978C8.22726 24.9831 8.52186 24.8861 8.77536 24.7171L14.6173 20.8222C14.7554 20.7297 14.9179 20.6805 15.0841 20.6808H19.187C19.7383 20.6798 20.2743 20.4991 20.7137 20.1662C21.1531 19.8332 21.472 19.3661 21.6222 18.8357L24.8965 7.04986C24.9999 6.67457 25.0152 6.2805 24.9413 5.89831C24.8675 5.51613 24.7064 5.15615 24.4707 4.84638C24.235 4.53662 23.9309 4.28544 23.5823 4.11238C23.2336 3.93933 22.8497 3.84907 22.4604 3.84863ZM23.2733 6.6028L20.0006 18.3845C19.95 18.5612 19.8432 18.7166 19.6964 18.8272C19.5496 18.9378 19.3708 18.9976 19.187 18.9976H15.0841C14.5856 18.997 14.0981 19.1446 13.6836 19.4217L7.84168 23.3166V21.5224C7.84094 20.853 7.5747 20.2113 7.10136 19.7379C6.62802 19.2646 5.98625 18.9983 5.31685 18.9976C5.09368 18.9975 4.87969 18.9088 4.72189 18.7509C4.56409 18.5931 4.47537 18.3792 4.47524 18.156V6.37346C4.47537 6.15029 4.56409 5.9363 4.72189 5.7785C4.87969 5.6207 5.09368 5.53198 5.31685 5.53185H22.4604C22.5905 5.53218 22.7188 5.56252 22.8352 5.62052C22.9517 5.67851 23.0532 5.76259 23.1318 5.86621C23.2105 5.96984 23.2641 6.09021 23.2887 6.21797C23.3132 6.34572 23.3079 6.47742 23.2733 6.6028Z" fill="#4C8147"/>
                                        <path d="M7.84167 11.423H12.0497C12.2729 11.423 12.487 11.3343 12.6448 11.1765C12.8027 11.0186 12.8913 10.8046 12.8913 10.5814C12.8913 10.3581 12.8027 10.1441 12.6448 9.98625C12.487 9.82842 12.2729 9.73975 12.0497 9.73975H7.84167C7.61846 9.73975 7.4044 9.82842 7.24656 9.98625C7.08873 10.1441 7.00006 10.3581 7.00006 10.5814C7.00006 10.8046 7.08873 11.0186 7.24656 11.1765C7.4044 11.3343 7.61846 11.423 7.84167 11.423Z" fill="#4C8147"/>
                                        <path d="M15.4162 13.1064H7.84167C7.61846 13.1064 7.4044 13.1951 7.24656 13.3529C7.08873 13.5108 7.00006 13.7248 7.00006 13.9481C7.00006 14.1713 7.08873 14.3853 7.24656 14.5432C7.4044 14.701 7.61846 14.7897 7.84167 14.7897H15.4162C15.6394 14.7897 15.8534 14.701 16.0113 14.5432C16.1691 14.3853 16.2578 14.1713 16.2578 13.9481C16.2578 13.7248 16.1691 13.5108 16.0113 13.3529C15.8534 13.1951 15.6394 13.1064 15.4162 13.1064Z" fill="#4C8147"/>
                                    </svg>
                                    <span className="badge light text-white bg-primary rounded-circle">5</span>
                                </a>
                            </li>
                            <li className="nav-item dropdown notification_dropdown">
                                <a className="nav-link" href="#" data-toggle="dropdown">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.625 6.12494H22.75V2.62494C22.75 2.47256 22.7102 2.32283 22.6345 2.19056C22.5589 2.05829 22.45 1.94807 22.3186 1.87081C22.1873 1.79355 22.0381 1.75193 21.8857 1.75007C21.7333 1.7482 21.5831 1.78616 21.4499 1.86019L14 5.99902L6.55007 1.86019C6.41688 1.78616 6.26667 1.7482 6.11431 1.75007C5.96194 1.75193 5.8127 1.79355 5.68136 1.87081C5.55002 1.94807 5.44113 2.05829 5.36547 2.19056C5.28981 2.32283 5.25001 2.47256 5.25 2.62494V6.12494H4.375C3.67904 6.1257 3.01181 6.40251 2.51969 6.89463C2.02757 7.38674 1.75076 8.05398 1.75 8.74994V11.3749C1.75076 12.0709 2.02757 12.7381 2.51969 13.2302C3.01181 13.7224 3.67904 13.9992 4.375 13.9999H5.25V23.6249C5.25076 24.3209 5.52757 24.9881 6.01969 25.4802C6.51181 25.9724 7.17904 26.2492 7.875 26.2499H20.125C20.821 26.2492 21.4882 25.9724 21.9803 25.4802C22.4724 24.9881 22.7492 24.3209 22.75 23.6249V13.9999H23.625C24.321 13.9992 24.9882 13.7224 25.4803 13.2302C25.9724 12.7381 26.2492 12.0709 26.25 11.3749V8.74994C26.2492 8.05398 25.9724 7.38674 25.4803 6.89463C24.9882 6.40251 24.321 6.1257 23.625 6.12494ZM21 6.12494H17.3769L21 4.11244V6.12494ZM7 4.11244L10.6231 6.12494H7V4.11244ZM7 23.6249V13.9999H13.125V24.4999H7.875C7.64303 24.4996 7.42064 24.4073 7.25661 24.2433C7.09258 24.0793 7.0003 23.8569 7 23.6249ZM21 23.6249C20.9997 23.8569 20.9074 24.0793 20.7434 24.2433C20.5794 24.4073 20.357 24.4996 20.125 24.4999H14.875V13.9999H21V23.6249ZM24.5 11.3749C24.4997 11.6069 24.4074 11.8293 24.2434 11.9933C24.0794 12.1574 23.857 12.2496 23.625 12.2499H4.375C4.14303 12.2496 3.92064 12.1574 3.75661 11.9933C3.59258 11.8293 3.5003 11.6069 3.5 11.3749V8.74994C3.5003 8.51796 3.59258 8.29558 3.75661 8.13155C3.92064 7.96752 4.14303 7.87524 4.375 7.87494H23.625C23.857 7.87524 24.0794 7.96752 24.2434 8.13155C24.4074 8.29558 24.4997 8.51796 24.5 8.74994V11.3749Z" fill="#4C8147"/>
                                    </svg>
                                    <span className="badge light text-white bg-primary rounded-circle">2</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right rounded">
                                    <div id="DZ_W_TimeLine11Home" className="widget-timeline dz-scroll style-1 p-3 height370 ps ps--active-y">
                                        <ul className="timeline">
                                            <li>
                                                <div className="timeline-badge primary"></div>
                                                <a className="timeline-panel text-muted" href="#">
                                                    <span>10 minutes ago</span>
                                                    <h6 className="mb-0">Youtube, a video-sharing website, goes live <strong className="text-primary">$500</strong>.</h6>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="timeline-badge info">
                                                </div>
                                                <a className="timeline-panel text-muted" href="#">
                                                    <span>20 minutes ago</span>
                                                    <h6 className="mb-0">New order placed <strong className="text-info">#XF-2356.</strong></h6>
                                                    <p className="mb-0">Quisque a consequat ante Sit amet magna at volutapt...</p>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="timeline-badge danger">
                                                </div>
                                                <a className="timeline-panel text-muted" href="#">
                                                    <span>30 minutes ago</span>
                                                    <h6 className="mb-0">john just buy your product <strong className="text-warning">Sell $250</strong></h6>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="timeline-badge success">
                                                </div>
                                                <a className="timeline-panel text-muted" href="#">
                                                    <span>15 minutes ago</span>
                                                    <h6 className="mb-0">StumbleUpon is acquired by eBay. </h6>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="timeline-badge warning">
                                                </div>
                                                <a className="timeline-panel text-muted" href="#">
                                                    <span>20 minutes ago</span>
                                                    <h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="timeline-badge dark">
                                                </div>
                                                <a className="timeline-panel text-muted" href="#">
                                                    <span>20 minutes ago</span>
                                                    <h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown header-profile">
                                <a className="nav-link" href="#" role="button" data-toggle="dropdown">
                                    <img src="/src/assets/images/profile/17.jpg" width="20" alt=""/>
                                    <div className="header-info">
                                    <span className="text-black"><strong>Brian Lee</strong></span>
                                    <p className="fs-12 mb-0">Admin</p>
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a href="./app-profile.html" className="dropdown-item ai-icon">
                                        <svg id="icon-user1" xmlns="http://www.w3.org/2000/svg" className="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        <span className="ml-2">Profile </span>
                                    </a>
                                    <a href="./email-inbox.html" className="dropdown-item ai-icon">
                                        <svg id="icon-inbox" xmlns="http://www.w3.org/2000/svg" className="text-success" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                        <span className="ml-2">Inbox </span>
                                    </a>
                                    <a href="./page-login.html" className="dropdown-item ai-icon">
                                        <svg id="icon-logout" xmlns="http://www.w3.org/2000/svg" className="text-danger" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                        <span className="ml-2">Logout </span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>        
        </>
    )
}

export default Header