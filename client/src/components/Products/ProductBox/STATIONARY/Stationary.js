import React, { useState } from 'react';
import HomeContact from '../../../Home/HomeContact/HomeContact'
import './Stationary.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useRouteMatch
} from "react-router-dom";
import ClearIcon from '@material-ui/icons/Clear';

export default function Stationary({ title, mainImg, aboutImg1, aboutImg2, aboutImg3, aboutImg4, aboutImg5, aboutdescription1, aboutdescription2, aboutdescription3, aboutdescription4, aboutdescription5, aboutdescription6, specification, specifDescription, mainPlan, mainPlanDescription, transportImg, transportDescription, gallery1, gallery2, gallery3, gallery4, gallery5, gallery6 }) {

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

    let { path, url } = useRouteMatch();

    return (
        <div className='product-box-content'>
            <div className="product-box-title">
                <h3>{title}</h3>
            </div>
            <div className="product-box-img">
                <img src={mainImg} alt="img" />
            </div>
            {/* <Router> */}
            <div className="product-box-nav">
                <nav>
                    <ul>
                        <li>
                            <NavLink exact to={`${url}`}><div className="product-box-link">Opis Główny</div></NavLink>
                        </li>
                        <li>
                            <NavLink to={`${url}/Specification`}><div className="product-box-link">Specyfikacja</div></NavLink>
                        </li>
                        <li>
                            <NavLink to={`${url}/MainPlan`}><div className="product-box-link">Plan Ogólny</div></NavLink>
                        </li>
                        <li>
                            <NavLink to={`${url}/Transport`}><div className="product-box-link">Transport</div></NavLink>
                        </li>
                        <li>
                            <NavLink to={`${url}/Gallery`}><div className="product-box-link">Galeria</div></NavLink>
                        </li>
                        <li>
                            <NavLink to={`${url}/SendMessage`}><div className="product-box-link">Wyślij Zapytanie</div></NavLink>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path={path}>
                        <div className="product-box-nav-content">
                            <p>{aboutdescription1}</p>
                            <div className="product-box-img">
                                <img src={aboutImg1} alt="" />
                            </div>
                            <p>{aboutdescription2}</p>
                            <div className="product-box-img">
                                <img src={aboutImg2} alt="" />
                            </div>
                            <p>{aboutdescription3}</p>
                            <div className="product-box-img">
                                <img src={aboutImg3} alt="" />
                            </div>
                            <p>{aboutdescription4}</p>
                            <div className="product-box-img">
                                <img src={aboutImg4} alt="" />
                            </div>
                            <p>{aboutdescription5}</p>
                            <div className="product-box-img">
                                <img src={aboutImg5} alt="" />
                            </div>
                            <p>{aboutdescription6}</p>
                        </div>
                    </Route>
                    <Route path={`${path}/Specification`}>
                        <div className="product-box-nav-content">
                            <p>{specifDescription}</p>
                            <div className="product-box-img">
                                <img src={specification} alt="img" />
                            </div>
                        </div>
                    </Route>
                    <Route path={`${path}/MainPlan`}>
                        <div className="product-box-nav-content">
                            <p>{mainPlanDescription}</p>
                            <div className="product-box-img">
                                <img src={mainPlan} alt="img" />
                            </div>
                        </div>
                    </Route>
                    <Route path={`${path}/Transport`}>
                        <div className="product-box-nav-content">
                            <p>{transportDescription}</p>
                            <div className="product-box-img">
                                <img src={transportImg} alt="img" />
                            </div>
                        </div>
                    </Route>
                    <Route path={`${path}/Gallery`}>
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
                                        <img src={image.imageSrc} alt="" />
                                    </div>
                                )}
                            </div>
                            {openLightbox && <div className="image-lightbox">
                                <div onClick={() => setOpenLightBox(false)} className="image-lightbox-opacity"></div>
                                <img src={galleryImages[lightbox - 1].imageSrc} alt="img" />
                                <ClearIcon onClick={() => setOpenLightBox(false)} className='image-lightbox-close-icon' />
                            </div>}
                        </div>
                    </Route>
                    <Route path={`${path}/SendMessage`}>
                        <div className="product-box-nav-content">
                            <h3>Spytaj o wycenę lub dodatkowe informacje na temat produktu <b>{title}</b></h3>
                            <HomeContact />
                        </div>
                    </Route>
                </Switch>
            </div>
            {/* </Router> */}
        </div>
    )
}
