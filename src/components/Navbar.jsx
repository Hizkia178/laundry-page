import { useState } from 'react';

const Navbar = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const toggleOffcanvas = () => {
        setShowOffcanvas(!showOffcanvas);
    };

    const closeOffcanvas = () => {
        setShowOffcanvas(false);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top bg-white shadow py-3" data-aos-duration="1000" data-aos="fade-down">
                <div className="container">
                    <a href="#" className="navbar-brand d-flex align-items-center justify-content-center fw-bold">
                        <i className="bx bx-droplet me-1 fw-bold"></i>Laundry Kilat
                    </a>
                    
                    <button
                        className="navbar-toggler border-0"
                        type="button"
                        onClick={toggleOffcanvas}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#hero">
                                    <i className="bx bx-home me-1"></i>Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#services">
                                    <i className="bx bx-list-check me-1"></i>Layanan
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#harga">
                                    <i className="bx bx-money me-1"></i>Harga
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#gallery">
                                    <i className="bx bx-photo-album me-1"></i>Galeri
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#testimonials">
                                    <i className="bx bx-message-dots me-1"></i>Testimoni
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#location">
                                    <i className="bx bx-map me-1"></i>Lokasi
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#faq">
                                    <i className="bx bx-help-circle me-1"></i>FAQ
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">
                                    <i className="bx bx-phone me-1"></i>Hubungi Kami
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Offcanvas */}
            <div className={`offcanvas offcanvas-end ${showOffcanvas ? 'show' : ''}`} 
                 style={{ visibility: showOffcanvas ? 'visible' : 'hidden', width: '70vw' }}
                 tabIndex="-1" data-aos-duration="1000">
                <div className="offcanvas-header border-bottom">
                    <h5 className="offcanvas-title fw-bold d-flex align-items-center">
                        <i className="bx bx-droplet me-2 text-primary"></i>
                        Laundry Kilat
                    </h5>
                    <button 
                        type="button" 
                        className="btn-close" 
                        onClick={closeOffcanvas}
                        aria-label="Close"
                    ></button>
                </div>
                <div className="offcanvas-body p-0">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active px-4 py-3 border-bottom" 
                               href="#hero" 
                               onClick={closeOffcanvas}>
                                <i className="bx bx-home me-3"></i>Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-4 py-3 border-bottom" 
                               href="#services" 
                               onClick={closeOffcanvas}>
                                <i className="bx bx-list-check me-3"></i>Layanan
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-4 py-3 border-bottom" 
                               href="#harga" 
                               onClick={closeOffcanvas}>
                                <i className="bx bx-money me-3"></i>Harga
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-4 py-3 border-bottom" 
                               href="#gallery" 
                               onClick={closeOffcanvas}>
                                <i className="bx bx-photo-album me-3"></i>Galeri
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-4 py-3 border-bottom" 
                               href="#testimonials" 
                               onClick={closeOffcanvas}>
                                <i className="bx bx-message-dots me-3"></i>Testimoni
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-4 py-3 border-bottom" 
                               href="#location" 
                               onClick={closeOffcanvas}>
                                <i className="bx bx-map me-3"></i>Lokasi
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-4 py-3 border-bottom" 
                               href="#faq" 
                               onClick={closeOffcanvas}>
                                <i className="bx bx-help-circle me-3"></i>FAQ
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-4 py-3" 
                               href="#contact" 
                               onClick={closeOffcanvas}>
                                <i className="bx bx-phone me-3"></i>Hubungi Kami
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Backdrop */}
            {showOffcanvas && (
                <div 
                    className="offcanvas-backdrop fade show" 
                    onClick={closeOffcanvas}
                ></div>
            )}
        </>
    );
};

export default Navbar;