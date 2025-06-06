import { useState } from 'react';

const Navbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [activeMenu, setActiveMenu] = useState('hero');

  const toggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);
  const closeOffcanvas = () => setShowOffcanvas(false);

  const menuItems = [
    { id: 'hero', label: 'Home', icon: 'bx-home' },
    { id: 'services', label: 'Layanan', icon: 'bx-list-check' },
    { id: 'harga', label: 'Harga', icon: 'bx-money' },
    { id: 'gallery', label: 'Galeri', icon: 'bx-photo-album' },
    { id: 'testimonials', label: 'Testimoni', icon: 'bx-message-dots' },
    { id: 'location', label: 'Lokasi', icon: 'bx-map' },
    { id: 'faq', label: 'FAQ', icon: 'bx-help-circle' },
    { id: 'contact', label: 'Hubungi Kami', icon: 'bx-phone' },
  ];

  const handleClickMenu = (id) => {
    setActiveMenu(id);
    closeOffcanvas();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top bg-white shadow py-3" data-aos-duration="1000" data-aos="fade-down">
        <div className="container">
          <a href="#" className="navbar-brand d-flex align-items-center justify-content-center fw-bold">
            <i className="bx bx-droplet me-1 fw-bold"></i>Laundry Kilat
          </a>

          <button className="navbar-toggler border-0" type="button" onClick={toggleOffcanvas} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto d-flex align-items-center gap-2">
              {menuItems.map(({ id, label, icon }) => (
                <li className="nav-item" key={id}>
                  <a
                    href={`#${id}`}
                    className={`nav-link d-flex align-items-center ${activeMenu === id ? 'bg-primary text-white  shadow rounded' : ''}`}
                    onClick={() => handleClickMenu(id)}
                    style={{ padding: '8px 12px' }}
                  >
                    <i className={`bx ${icon} me-1`}></i>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Offcanvas */}
      <div
        className={`offcanvas offcanvas-end ${showOffcanvas ? 'show' : ''}`}
        style={{ visibility: showOffcanvas ? 'visible' : 'hidden', width: '70vw' }}
        tabIndex="-1"
        data-aos-duration="1000"
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title fw-bold d-flex align-items-center">
            <i className="bx bx-droplet me-2 text-primary"></i>
            Laundry Kilat
          </h5>
          <button type="button" className="btn-close" onClick={closeOffcanvas} aria-label="Close"></button>
        </div>
        <div className="offcanvas-body p-0">
          <ul className="navbar-nav">
            {menuItems.map(({ id, label, icon }) => (
              <li className="nav-item" key={id}>
                <a
                  href={`#${id}`}
                  className={`nav-link d-flex align-items-center px-4 py-3 border-bottom ${activeMenu === id ? 'bg-primary text-white shadow rounded' : ''}`}
                  onClick={() => handleClickMenu(id)}
                >
                  <i className={`bx ${icon} me-3`}></i>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Backdrop */}
      {showOffcanvas && <div className="offcanvas-backdrop fade show" onClick={closeOffcanvas}></div>}
    </>
  );
};

export default Navbar;
