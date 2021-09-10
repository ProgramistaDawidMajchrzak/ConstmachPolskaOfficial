import React, { useState } from 'react';
import './Stationary.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import ClearIcon from '@material-ui/icons/Clear';

export default function Stationary({ title, mainImg, aboutImg1, aboutImg2, aboutImg3, aboutImg4, aboutImg5, aboutdescription1, aboutdescription2, aboutdescription3, aboutdescription4, aboutdescription5, aboutdescription6, specification, mainPlan, transportImg, gallery1, gallery2, gallery3, gallery4, gallery5, gallery6 }) {

    const galleryImages = [
        { id: 1, imageSrc: gallery1 },
        { id: 2, imageSrc: gallery2 },
        { id: 3, imageSrc: gallery3 },
        { id: 4, imageSrc: gallery4 },
        { id: 5, imageSrc: gallery5 },
        { id: 6, imageSrc: gallery6 },
    ]

    const [openLightbox, setOpenLightBox] = useState(false);
    const [lightbox, setLightBox] = useState();

    return (
        <div className='product-box-content'>
            <div className="product-box-title">
                <h3>{title}</h3>
            </div>
            <div className="product-box-img">
                <img src={mainImg} alt="img" />
            </div>
            <Router>
                <div className="product-box-nav">
                    <nav>
                        <ul>
                            <li>
                                <NavLink exact to='/'><div className="product-box-link">Opis Główny</div></NavLink>
                            </li>
                            <li>
                                <NavLink to='/Specification'><div className="product-box-link">Specyfikacja</div></NavLink>
                            </li>
                            <li>
                                <NavLink to='/MainPlan'><div className="product-box-link">Plan Ogólny</div></NavLink>
                            </li>
                            <li>
                                <NavLink to='/Transport'><div className="product-box-link">Transport</div></NavLink>
                            </li>
                            <li>
                                <NavLink to='/Gallery'><div className="product-box-link">Galeria</div></NavLink>
                            </li>
                            <li>
                                <NavLink to='/SendMessage'><div className="product-box-link">Wyślij Zapytanie</div></NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path="/">
                            <div className="product-box-nav-content">
                                <p>{aboutdescription1}</p>
                                <div className="product-box-img">
                                    <img src={aboutImg1} alt="img" />
                                </div>
                                <p>{aboutdescription2}</p>
                                <div className="product-box-img">
                                    <img src={aboutImg2} alt="img" />
                                </div>
                                <p>{aboutdescription3}</p>
                                <div className="product-box-img">
                                    <img src={aboutImg3} alt="img" />
                                </div>
                                <p>{aboutdescription4}</p>
                                <div className="product-box-img">
                                    <img src={aboutImg4} alt="img" />
                                </div>
                                <p>{aboutdescription5}</p>
                                <div className="product-box-img">
                                    <img src={aboutImg5} alt="img" />
                                </div>
                                <p>{aboutdescription6}</p>
                            </div>
                        </Route>
                        <Route path="/Specification">
                            <div className="product-box-nav-content">
                                <div className="product-box-img">
                                    <img src={specification} alt="img" />
                                </div>
                            </div>
                        </Route>
                        <Route path="/MainPlan">
                            <div className="product-box-nav-content">
                                <div className="product-box-img">
                                    <img src={mainPlan} alt="img" />
                                </div>
                            </div>
                        </Route>
                        <Route path="/Transport">
                            <div className="product-box-nav-content">
                                <p>{`Znajdujące się w naszej ofercie stacjonarne węzły betoniarskie umożliwiają ograniczenie do minimum kosztów związanych z transportem dzięki modułowej konstrukcji i możliwości transportu w naczepie o zamkniętej obudowie i kontenerach.`}</p>
                                <div className="product-box-img">
                                    <img src={transportImg} alt="img" />
                                </div>
                            </div>
                        </Route>
                        <Route path="/Gallery">
                            <div className="product-box-nav-content">
                                <div className="product-box-gallery">
                                    {galleryImages.map(image =>
                                        <div
                                            onClick={() => {
                                                setLightBox(image.id)
                                                setOpenLightBox(true)
                                            }}
                                            className='product-box-gallery-image'
                                            key={image.id} >
                                            <img src={image.imageSrc} alt="img" />
                                        </div>
                                    )}
                                </div>
                                {openLightbox && <div className="image-lightbox">
                                    <div className="image-lightbox-opacity"></div>
                                    <img src={galleryImages[lightbox - 1].imageSrc} alt="img" />
                                    <ClearIcon onClick={() => setOpenLightBox(false)} className='image-lightbox-close-icon' />
                                </div>}
                            </div>
                        </Route>
                        <Route path="/SendMessage">
                            <div className="product-box-nav-content">

                            </div>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
