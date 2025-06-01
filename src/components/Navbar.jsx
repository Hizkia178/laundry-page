const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-white shadow py-3" data-aos-duration="1000" data-aos="fade-down">
            <div className="container">
                <a href="#" className="navbar-brand d-flex align-items-center justify-content-center fw-bold">
                    <i className="bx bx-droplet me-1 fw-bold"></i>Laundry Kilat
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
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
                            <a className="nav-link" href="#pricing">
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
    );
};

export default Navbar;
