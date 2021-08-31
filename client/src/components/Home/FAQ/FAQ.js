import React, { useState, useRef } from 'react';
import './FAQ.css';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const FAQElement = ({ title, answer, active, setactive }) => {

    const handleClick = (e) => {
        // setActive();
    }

    return (
        <div className="home-faq-element">
            <div onClick={handleClick} className="home-faq-title">
                <h3>{title}</h3>
                <ChevronRightIcon className='home-faq-arrow' />
            </div>
            <div className={"home-faq-answer"(active === title ? "show" : "")}>
                <p>{answer}</p>
            </div>
        </div>
    )
}

export default function FAQ() {

    const [active, setActive] = useState('Czy wasza firma zapewnia pomoc techniczną na etapie wstępnego montażu i eksploatacji?');

    return (
        <>
            <div className='home-faq'>
                <FAQElement active={active} setActive={setActive} title='Czy wasza firma zapewnia pomoc techniczną na etapie wstępnego montażu i eksploatacji?' answer=' Montaż i rozruch wszystkich oferowanych maszyn i urządzeń wykonuje personel techniczny CONSTMACH. Podczas takich prac przeprowadzane jest szkolenie w zakresie obsługi, konserwacji i usuwania usterek dla personelu klienta odpowiedzialnego za obsługę i konserwację.' />
                <FAQElement active={active} setActive={setActive} title='Czy wasza firma zapewnia serwis pogwarancyjny?' answer='Wszystkie urządzenia są objęte 2 letnią gwarancją a klienci mogą w każdej chwili zakupić dowolną ilość części zamiennych. Ponadto wszystkie automatyczne węzły betonowe posiadają możliwość wykonywania przeglądów serwisowych w sposób zdalny korzystając z internetu, co umożliwia szybkie usuwanie usterek.' />
                <FAQElement active={active} setActive={setActive} title='Jakiego rodzaju urządzenia znajdują się w waszej ofercie?' answer='Naszym głównym celem jest produkcja różnych maszyn i urządzeń wyróżniających się wysoką jakością, efektywnością i spełniających potrzeby naszych klientów. W naszej ofercie znajdują się węzły betonowe, mobilne węzły betoniarskie, kruszarki i przesiewacze, kruszarki mobilne, węzły do produkcji suchego betonu, kompaktowe węzły betoniarskie, silosy na cement, maszyny do produkcji betonowych bloczków oraz wiele innych.' />
                <FAQElement active={active} setActive={setActive} title='Czy zakład produkcyjny posiada certyfikat jakości?' answer='Wysoką jakość naszych urządzeń potwierdza Certyfikat Zarządzania Jakością ISO 9001:2015, a wszystkie nasze urządzenia posiadają także certyfikat CE.' />
                <FAQElement active={active} setActive={setActive} title='Do jakich krajów eksportowane są urządzenia?' answer='Nasza firma eksportuje węzły i urządzenia do ponad trzydziestu krajów na trzech kontynentach. Wśród naszych klientów są firmy i odbiorcy z Holandii, Szwajcarii, Polski, Ukrainy, Bułgarii, Słowenii, Słowacji, Serbii, Szwecji, Węgier, Rumunii, Łotwy, Kosowa, Egiptu, Algierii, Tunezji, Maroka, Iraku, Libanu, Jordanii, Omanu, Bahrajnu, Gruzji, Kazachstanu, Kenii, Nigerii, Gwinei, Somalii i Kamerunu.' />
            </div>
        </>
    )
}
