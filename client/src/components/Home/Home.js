import React from 'react';
import './Home.css';
import HomeContact from './HomeContact/HomeContact'

export default function Home() {
    return (
        <>
            <div className="home-container">
                <div className="home-about-us home-box">
                    <div className="home-title-box"><p>O nas</p></div>
                    <p>
                        CONSTMACH jest czołowym producentem węzłów betoniarskich, kruszarek i maszyn do produkcji bloczków betonowych w Turcji, który rozpoczął produkcję w 2002 r.. W ofercie CONSTMACH znajdują się także silosy na cement, przesiewacze i płuczki, mobilne kruszarki oraz inne urządzenia.
                        <br />
                        <br />
                        Zakład produkcyjny CONSTMACH o powierzchni 5.000 m2 usytuowany jest ANKARZE, która jest stolicą TURCJI.
                        <br />
                        <br />
                        Nasza firma eksportuje węzły i urządzenia do ponad trzydziestu krajów na czterech kontynentach. Wśród naszych klientów są firmy i odbiorcy z Holandii, Szwajcarii, Ukrainy, Bułgarii, Słowenii, Słowacji, Serbii, Szwecji, Węgier, Rumunii, Łotwy, Egiptu, Algierii, Tunezji, Maroka, Iraku, Libanu, Jordanii, Omanu, Gruzji, Kazachstanu, Kamerunu, Kenii, Nigerii, Gwinei i Somalii i wielu innych.</p>
                </div>
                <div className="home-contact home-box">
                    <div className="home-title-box"><p>Kontakt</p></div>
                    <HomeContact />
                </div>
                <div className="home-asked-questions home-box">
                    <div className="home-title-box"><p>Najczęściej zadawane pytania</p></div>
                </div>
                <div className="home-latest-news home-box">
                    <div className="home-title-box"><p>Ostatnie zrealizowane projekty</p></div>
                </div>
            </div>
        </>
    )
}
