const Hero = () => {
    return (
        <section className="py-5 bg-white position-relative overflow-hidden min-vh-100 d-flex align-items-center" data-aos-duration="1200" data-aos="fade-down">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <span className="badge bg-primary mb-2 shadow px-3 py-2 fs-6">#1 Laundry Pilihan Warga</span>
                        <h1 className="display-4 fw-bold">Layanan Laundry Terpercaya</h1>
                        <p className="lead text-muted">
                            Cuci cepat, bersih, dan wangi. Antar jemput gratis!
                        </p>


                        <div className="d-flex align-items-center gap-3 mt-4">
                            <div className="d-flex align-items-center gap-2 fw-semibold text-dark">
                                <i className="bx bx-share-alt"></i>
                                <span>Ikuti Kami:</span>
                            </div>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                                className="d-flex align-items-center justify-content-center bg-white rounded-circle text-decoration-none  shadow"
                                style={{ width: '48px', height: '48px' }}>
                                <i className="bx bxl-instagram fs-4 text-dark"></i>
                            </a>


                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                                className="d-flex align-items-center justify-content-center bg-white rounded-circle text-decoration-none  shadow"
                                style={{ width: '48px', height: '48px' }}>
                                <i className="bx bxl-facebook fs-4 text-dark"></i>
                            </a>


                            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer"
                                className="d-flex align-items-center justify-content-center bg-white rounded-circle text-decoration-none  shadow"
                                style={{ width: '48px', height: '48px' }}>
                                <i className="bx bxl-whatsapp fs-4 text-dark"></i>
                            </a>


                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
                                className="d-flex align-items-center justify-content-center bg-white rounded-circle text-decoration-none shadow"
                                style={{ width: '48px', height: '48px' }}>
                                <i className="bx bxl-tiktok fs-4 text-dark"></i>
                            </a>
                        </div>

                        <div className="d-flex flex-wrap gap-3 mt-4">
                            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                <button className="btn btn-success shadow d-flex align-items-center gap-2">
                                    <i className="bx bxl-whatsapp fs-5"></i>
                                    Hubungi via WhatsApp
                                </button>
                            </a>
                            <a href="#pricing" className="text-decoration-none">
                                <button className="btn btn-outline-secondary shadow d-flex align-items-center  gap-2">
                                    <i className="bx bx-money fs-5"></i>
                                    Lihat Harga
                                </button>
                            </a>
                        </div>



                    </div>

                    <div className="col-md-6 text-center">
                        <div className="card shadow  border-2">
                            <img src="/assets/Hero.jpg"
                                className="img-fluid-container"
                                alt="Laundry Homepage" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Hero;