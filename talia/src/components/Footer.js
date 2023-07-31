import { SocialIcon } from 'react-social-icons';
import { NavLink } from 'react-router-dom';
import { faEnvelope, faPhone, faMapPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Footer(){
    return (
        <footer className="text-center text-lg-start footer-bg text-muted main">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span className="main-text-color">Talija Frizerski Salon socijalne mreže:</span>
                </div>

                <div>
                    <a href="" className="m-4 text-reset">
                        <SocialIcon url="https://www.instagram.com/tatjanavuga/" target="_blank"/>
                    </a>
                    <a href="" className="m-4 text-reset">
                        <SocialIcon url="https://www.facebook.com/tatjana.vugamalic" target="_blank"/>
                    </a>

                </div>
            </section>

            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i>Naziv Kompanije
                            </h6>
                            <p className="main-text-color">
                                Talija Frizerski Salon
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Usluge
                            </h6>
                            <p>
                                <span className="text-reset">Muško šišanje</span>
                            </p>
                            <p>
                                <span className="text-reset">Žensko šišanje</span>
                            </p>
                            <p>
                                <span className="text-reset">Svečane frizure</span>
                            </p>
                            <p>
                                <span className="text-reset">Farbanje, Balejaž...</span>
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 footer-links">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Korisni Linkovi
                            </h6>
                            <p>
                                <NavLink  className="nav-link" to="/gallery">Galerija</NavLink >
                            </p>
                            <p>
                                <NavLink  className="nav-link" to="/pricing">Cenovnik</NavLink >
                            </p>
                            <p>
                                <NavLink  className="nav-link" to="/pricing">Usluge</NavLink >
                            </p>
                            <p>
                                <NavLink  className="nav-link" to="/contact">Kontakt</NavLink >
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Kontakt</h6>
                            <p>
                            <a className="main-text-color" target="_blank" href="https://www.google.com/maps/place/TALIA+TUNING/@44.9980673,19.5584464,18z/data=!4m6!3m5!1s0x475ba36fee2e7c41:0x5c00105c1b6a7540!8m2!3d44.9976062!4d19.5578631!16s%2Fg%2F11_y0xjs2?entry=ttu"><FontAwesomeIcon icon={faMapPin}></FontAwesomeIcon> Cerska 34, Laćarak 22221, Srbija</a>
                            </p>
                            <p>
                                <a className="main-text-color" href="tel:+381644326077"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> +381 64 432 6077</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center p-4 main-text-color" >
                © 2023 Copyright:
                <span className="text-reset fw-bold" ><b>Vuga</b></span>
            </div>
        </footer>
    );
    
}

export default Footer;