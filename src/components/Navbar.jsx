import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [isScrolled, setIsScrolled] = useState(false);

    // Navigation items
    const navItems = [
        { id: 'hero', label: 'Home', icon: 'bx-home' },
        { id: 'services', label: 'Layanan', icon: 'bx-list-check' },
        { id: 'harga', label: 'Harga', icon: 'bx-money' },
        { id: 'gallery', label: 'Galeri', icon: 'bx-photo-album' },
        { id: 'testimonials', label: 'Testimoni', icon: 'bx-message-dots' },
        { id: 'location', label: 'Lokasi', icon: 'bx-map' },
        { id: 'faq', label: 'FAQ', icon: 'bx-help-circle' },
        { id: 'contact', label: 'Hubungi Kami', icon: 'bx-phone' }
    ];

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle active section detection
    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleOffcanvas = () => {
        setIsOffcanvasOpen(!isOffcanvasOpen);
    };

    const closeOffcanvas = () => {
        setIsOffcanvasOpen(false);
    };

    const handleNavClick = (sectionId) => {
        setActiveSection(sectionId);
        closeOffcanvas();

        // Smooth scroll to section
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Navbar */}
            <nav
                className={`navbar navbar-expand-lg fixed-top shadow py-3 transition-all overflow-hidden ${isScrolled ? 'bg-white shadow' : 'bg-white'
                    }`}
                data-aos-duration="1000"
                data-aos="fade-down"
                style={{
                    transition: 'all 0.3s ease',
                    backdropFilter: isScrolled ? 'blur(10px)' : 'none'
                }}
            >
                <div className="container">
                    {/* Brand */}
                    <a
                        href="#hero"
                        className="navbar-brand d-flex align-items-center fw-bold text-primary"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick('hero');
                        }}
                        style={{
                            transition: 'all 0.3s ease',
                            transform: isScrolled ? 'scale(0.95)' : 'scale(1)'
                        }}
                    >
                        <div className="me-2 bg-primary bg-opacity-10 rounded-circle p-2">
                            <i className="bx bx-droplet text-primary"></i>
                        </div>
                        <span className="fs-4">Laundry Kilat</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="d-none d-lg-block">
                        <ul className="navbar-nav ms-auto align-items-center">
                            {navItems.map((item) => (
                                <li key={item.id} className="nav-item mx-1">
                                    <a
                                        className={`nav-link rounded-pill px-3 py-2 d-flex align-items-center transition-all ${activeSection === item.id
                                                ? 'active bg-primary text-white shadow'
                                                : 'text-dark hover-primary'
                                            }`}
                                        href={`#${item.id}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(item.id);
                                        }}
                                        style={{
                                            transition: 'all 0.3s ease',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        <i className={`bx ${item.icon} me-1`}></i>
                                        {item.label}
                                    </a>
                                </li>
                            ))}

                            {/* CTA Button */}
                            <li className="nav-item ms-3">
                                <a
                                    href="#contact"
                                    className="btn btn-primary btn-sm rounded-pill shadow px-4"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick('contact');
                                    }}
                                >
                                    <i className="bx bx-phone me-1"></i>
                                    Pesan Sekarang
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="btn btn-outline-primary d-lg-none rounded"
                        type="button"
                        onClick={toggleOffcanvas}
                        style={{ width: '45px', height: '45px' }}
                    >
                        <i className={`bx ${isOffcanvasOpen ? 'bx-x' : 'bx-menu'} fs-5`}></i>
                    </button>
                </div>
            </nav>

            {/* Offcanvas Overlay */}
            {isOffcanvasOpen && (
                <div
                    className="position-fixed w-100 h-100 bg-dark bg-opacity-50 d-lg-none"
                    style={{
                        top: 0,
                        left: 0,
                        zIndex: 1040,
                        transition: 'opacity 0.3s ease'
                    }}
                    onClick={closeOffcanvas}
                ></div>
            )}

            {/* Offcanvas Menu */}
            <div
                className={`offcanvas offcanvas-end d-lg-none ${isOffcanvasOpen ? 'show' : ''}`}
                style={{
                    visibility: isOffcanvasOpen ? 'visible' : 'hidden',
                    transform: isOffcanvasOpen ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'all 0.3s ease',
                    zIndex: 1050,
                    width: '300px'
                }}
            >
                {/* Offcanvas Header */}
                <div className="offcanvas-header bg-primary text-white">
                    <div className="d-flex align-items-center">
                        <div className="me-2 bg-white bg-opacity-20 rounded p-2">
                            <i className="bx bx-droplet text-primary"></i>
                        </div>
                        <h5 className="offcanvas-title fw-bold mb-0">Laundry Kilat</h5>
                    </div>
                    <button
                        type="button"
                        className="btn-close btn-close-white"
                        onClick={closeOffcanvas}
                    ></button>
                </div>

                {/* Offcanvas Body */}
                <div className="offcanvas-body p-0">
                    {/* User Info Section */}
                    <div className="bg-light p-4 border-bottom">
                        <div className="d-flex align-items-center mb-3 shadow p-2 rounded">
                            <div className="bg-primary bg-opacity-10 rounded-circle p-3 me-3">
                                <i className="bx bx-user text-primary fs-4"></i>
                            </div>
                            <div>
                                <h6 className="fw-bold mb-1">Selamat Datang!</h6>
                                <small className="text-muted">Pilih layanan laundry terbaik</small>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="row g-2">
                            <div className="col-4">
                                <div className="text-center p-2 bg-white rounded shadow">
                                    <div className="fw-bold text-primry small">5★</div>
                                    <div className="text-muted" style={{ fontSize: '0.7rem' }}>Rating</div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="text-center p-2 bg-white rounded shadow">
                                    <div className="fw-bold text-primary small">24/7</div>
                                    <div className="text-muted" style={{ fontSize: '0.7rem' }}>Service</div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="text-center p-2 bg-white rounded shadow">
                                    <div className="fw-bold text-warning small">1000+</div>
                                    <div className="text-muted" style={{ fontSize: '0.7rem' }}>Customer</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Menu */}
                    <div className="p-3">
                        <h6 className="text-muted text-uppercase small fw-bold mb-3">
                            <i className="bx bx-menu me-2"></i>Menu Navigasi
                        </h6>

                        <ul className="list-unstyled">
                            {navItems.map((item, index) => (
                                <li key={item.id} className="mb-1">
                                    <a
                                        href={`#${item.id}`}
                                        className={`d-flex align-items-center text-decoration-none p-3 rounded transition-all ${activeSection === item.id
                                                ? 'bg-primary text-white shadow'
                                                : 'text-dark hover-bg-light'
                                            }`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(item.id);
                                        }}
                                        style={{
                                            transition: 'all 0.3s ease',
                                            animationDelay: `${index * 0.1}s`
                                        }}
                                    >
                                        <div className={`me-3 rounded-circle p-2 ${activeSection === item.id
                                                ? 'bg-white bg-opacity-20'
                                                : 'bg-primary bg-opacity-10'
                                            }`}>
                                            <i className={`bx ${item.icon} ${activeSection === item.id ? 'text-dark' : 'text-primary'
                                                }`}></i>
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="fw-semibold">{item.label}</div>
                                            {item.id === 'services' && (
                                                <small className="opacity-75">6 layanan tersedia</small>
                                            )}
                                            {item.id === 'testimonials' && (
                                                <small className="opacity-75">1000+ review positif</small>
                                            )}
                                        </div>
                                        <i className="bx bx-chevron-right opacity-50"></i>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA Section */}
                    <div className="p-4 bg-light border-top mt-auto">
                        <div className="text-center mb-3">
                            <h6 className="fw-bold text-primary mb-2">Butuh Bantuan?</h6>
                            <p className="text-muted small mb-3">
                                Hubungi customer service kami sekarang juga
                            </p>
                        </div>

                        <div className="d-grid gap-2">
                            <a
                                href="#contact"
                                className="btn btn-primary shadow"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick('contact');
                                }}
                            >
                                <i className="bx bx-phone me-2"></i>
                                Hubungi Sekarang
                            </a>
                            <a
                                href="https://wa.me/628123456789"
                                className="btn btn-success"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bx bxl-whatsapp me-2"></i>
                                Chat WhatsApp
                            </a>
                        </div>

                        {/* Social Media */}
                        <div className="text-center mt-3">
                            <small className="text-muted d-block mb-2">Ikuti Kami:</small>
                            <div className="d-flex justify-content-center gap-2">
                                <a href="#" className="btn btn-sm btn-outline-primary rounded-circle" style={{ width: '35px', height: '35px' }}>
                                    <i className="bx bxl-facebook"></i>
                                </a>
                                <a href="#" className="btn btn-sm btn-outline-info rounded-circle" style={{ width: '35px', height: '35px' }}>
                                    <i className="bx bxl-instagram"></i>
                                </a>
                                <a href="#" className="btn btn-sm btn-outline-danger rounded-circle" style={{ width: '35px', height: '35px' }}>
                                    <i className="bx bxl-tiktok"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx>{`
                .hover-primary:hover {
                    background-color: rgba(13, 110, 253, 0.1) !important;
                     color: #0d6efd !important;
                }
                
                .hover-bg-light:hover {
                    background-color: rgba(0, 0, 0, 0.05) !important;
                }
                
                .transition-all {
                    transition: all 0.3s ease !important;
                }
                
                .offcanvas {
                    border: none;
                    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
                }
                
                @media (max-width: 991.98px) {
                    .navbar-brand span {
                        font-size: 1.1rem !important;
                    }
                }
            `}</style>
        </>
    );
};

export default Navbar;