import React from 'react';

import './ProductBox.css';
import {
    Switch,
    Route
} from "react-router-dom";
// import * as ProductsData from '../ProductsData.json';
import * as images from './ProductsImages/index.js';



import Stationary from './STATIONARY/Stationary';

export default function ProductBox() {

    return (

        <div className='product-box'>
            <Switch>
                <Route path="/STATIONARY60">
                    <Stationary
                        title='STATIONARY 60'
                        mainImg={images.Stationary60main}
                        aboutImg1={images.Stationary60about1}
                        aboutImg2={images.Stationary60about2}
                        aboutImg3={images.Stationary60about3}
                        aboutImg4={images.Stationary60about4}
                        aboutImg5={images.Stationary60about5}
                        aboutdescription1='Węzeł betoniarski STATIONARY 60 to całkowicie automatyczna linia do produkcji betonu. Rozwiązanie to świetnie nadaje się do realizacji projektów wymagających długofalowej produkcji gotowej mieszanki betonowej w miejscu prowadzenia robót. Stacjonarne węzły betoniarskie są wysoko cenione przez profesjonalistów z uwagi na możliwość produkcji każdego rodzaju betonu, stabilną i niezawodną konstrukcję, dostępność części zamiennych i serwis, wysoką jakość wykonania oraz zgodność z normami CE.'
                        aboutdescription2='Węzeł betoniarski STATIONARY 60 może być wyposażony w mieszalniki dwuwałowe,  mieszalniki jednowałowe, mieszalniki talerzowe lub mieszalniki planetarne zależnie od typu i właściwości produkowanego betonu.'
                        aboutdescription3='Stacjonarny węzeł betoniarski STATIONARY 60 może być wyposażony w różnej wielkości silosy na cement, o pojemności od 50 do 500 ton odpowiednio do potrzeb naszych klientów. W przypadku cementu dostarczanego w workach, silosy można łatwo napełnić cementem wykorzystując otwór na worki big-bag lub systemy napełniania silosu zintegrowane ze stacjonarnym węzłem betoniarskim STATIONARY 60.'
                        aboutdescription4='Dobrze wiemy, że warunki klimatyczne mają bardzo duży wpływ na jakość produkowanego betonu. Dlatego węzeł betoniarski STATIONARY 60 eksploatowany w  chłodnym klimacie na terenie Rosji, Kazachstanu,  Ukrainy, Północnej Europy itp. jest ogrzewany przez generatory pary i posiada dodatkowo izolację termiczną, natomiast w przypadku węzła betoniarskiego instalowanego w gorącym klimacie na bliskim wschodzie, GCC, czy w Afryce, woda jest chłodzona za pomocą agregatów chłodniczych.'
                        aboutdescription5='Zastosowanie przenośników transportujących kruszywo pozwala wyeliminować konieczność budowy rampy załadunkowej, wymaganej w przypadku załadunku za pomocą ładowarek, co jednocześnie pozwala obniżyć koszty wymaganej infrastruktury.'
                        aboutdescription6='Węzeł betoniarski STATIONARY 60 jest dostępny w różnych konfiguracjach i układach odpowiednio do warunków lokalnych w miejscu montażu a w przypadku ograniczonego dostępnego miejsca, kruszywo może być transportowane za pomocą wciągarki zastępującej przenośniki taśmowe.
                        STATIONARY 60 jest wyposażony w zaawansowane technicznie systemy automatyki, w tym wysokiej klasy komponenty elektroniczne i PLC marki SIEMENS i SCHNEIDER. Cały system jest sterowany za pomocą zaawansowanego oprogramowania posiadającego przydatne funkcje i interfejs przyjazny dla użytkownika.
                        Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia stacjonarnego węzła Stationary 60 lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.'
                        specification={images.Stationary60SpecificationImg}
                        mainPlan={images.Stationary60MainPlan}
                        transportImg={images.StationaryTransport}
                        gallery1={images.Stationary60Gallery1}
                        gallery2={images.Stationary60Gallery2}
                        gallery3={images.Stationary60Gallery3}
                        gallery4={images.Stationary60Gallery4}
                        gallery5={images.Stationary60Gallery5}
                        gallery6={images.Stationary60Gallery6}
                    />
                </Route>
                <Route path="/STATIONARY100">
                    <Stationary
                        title='STATIONARY 100'
                        mainImg={images.Stationary100main}
                        aboutImg1={images.Stationary100about1}
                        aboutImg2={images.Stationary60about2}
                        aboutImg3={images.Stationary60about3}
                        aboutImg4={images.Stationary60about4}
                        aboutImg5={images.Stationary60about5}
                        aboutdescription1='Węzeł betoniarski STATIONARY 100 to całkowicie automatyczna linia do produkcji betonu. Rozwiązanie to świetnie nadaje się do realizacji projektów wymagających długofalowej produkcji gotowej mieszanki betonowej w miejscu prowadzenia robót. Stacjonarne węzły betoniarskie są wysoko cenione przez profesjonalistów z uwagi na możliwość produkcji każdego rodzaju betonu, stabilną i niezawodną konstrukcję, dostępność części zamiennych i serwis, wysoką jakość wykonania oraz zgodność z normami CE.'
                        aboutdescription2='Węzeł betoniarski STATIONARY 100 może być wyposażony w mieszalniki dwuwałowe,  mieszalniki jednowałowe, mieszalniki talerzowe lub mieszalniki planetarne zależnie od typu i właściwości produkowanego betonu.'
                        aboutdescription3='Stacjonarny węzeł betoniarski STATIONARY 100 może być wyposażony w różnej wielkości silosy na cement, o pojemności od 75 do 500 ton odpowiednio do potrzeb naszych klientów. W przypadku cementu dostarczanego w workach, silosy można łatwo napełnić cementem wykorzystując otwór na worki big-bag lub systemy napełniania silosu zintegrowane ze stacjonarnym węzłem betoniarskim STATIONARY 100.'
                        aboutdescription4='Dobrze wiemy, że warunki klimatyczne mają bardzo duży wpływ na jakość produkowanego betonu. Dlatego węzeł betoniarski STATIONARY 100 eksploatowany w  chłodnym klimacie na terenie Rosji, Kazachstanu,  Ukrainy, Północnej Europy itp. jest ogrzewany przez generatory pary i posiada dodatkowo izolację termiczną, natomiast w przypadku węzła betoniarskiego instalowanego w gorącym klimacie na bliskim wschodzie, GCC, czy w Afryce, woda jest chłodzona za pomocą agregatów chłodniczych.'
                        aboutdescription5='Zastosowanie przenośników transportujących kruszywo pozwala wyeliminować konieczność budowy rampy załadunkowej, wymaganej w przypadku załadunku za pomocą ładowarek, co jednocześnie pozwala obniżyć koszty wymaganej infrastruktury.'
                        aboutdescription6='Węzeł betoniarski STATIONARY 100 jest dostępny w różnych konfiguracjach i układach odpowiednio do warunków lokalnych w miejscu montażu a w przypadku ograniczonego dostępnego miejsca, kruszywo może być transportowane za pomocą wciągarki zastępującej przenośniki taśmowe.
                        STATIONARY 100 jest wyposażony w zaawansowane technicznie systemy automatyki, w tym wysokiej klasy komponenty elektroniczne i PLC marki SIEMENS i SCHNEIDER. Cały system jest sterowany za pomocą zaawansowanego oprogramowania posiadającego przydatne funkcje i interfejs przyjazny dla użytkownika.
                        Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia stacjonarnego węzła Stationary 60 lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.'
                        specification={images.Stationary100SpecificationImg}
                        mainPlan={images.Stationary100MainPlan}
                        transportImg={images.StationaryTransport}
                        gallery1={images.Stationary100Gallery1}
                        gallery2={images.Stationary100Gallery2}
                        gallery3={images.Stationary100Gallery3}
                        gallery4={images.Stationary100Gallery4}
                        gallery5={images.Stationary100Gallery5}
                        gallery6={images.Stationary100Gallery6}
                    />
                </Route>
                <Route path="/STATIONARY120">
                    <Stationary
                        title='STATIONARY 120'
                        mainImg={images.Stationary120main}
                        aboutImg1={images.Stationary120about1}
                        aboutImg2={images.Stationary120about2}
                        aboutImg3={images.Stationary60about3}
                        aboutImg4={images.Stationary60about4}
                        aboutImg5={images.Stationary60about5}
                        aboutdescription1='Węzeł betoniarski STATIONARY 120 to całkowicie automatyczna linia do produkcji betonu. Rozwiązanie to świetnie nadaje się do realizacji projektów wymagających długofalowej produkcji gotowej mieszanki betonowej w miejscu prowadzenia robót. Stacjonarne węzły betoniarskie są wysoko cenione przez profesjonalistów z uwagi na możliwość produkcji każdego rodzaju betonu, stabilną i niezawodną konstrukcję, dostępność części zamiennych i serwis, wysoką jakość wykonania oraz zgodność z normami CE.'
                        aboutdescription2='Węzeł betoniarski STATIONARY 160 wyposażony jest w mieszalniki dwuwałowe o pojemności 3 m3 mokrego betonu.'
                        aboutdescription3='Stacjonarny węzeł betoniarski STATIONARY 120 może być wyposażony w różnej wielkości silosy na cement, o pojemności od 100 do 500 ton odpowiednio do potrzeb naszych klientów. W przypadku cementu dostarczanego w workach, silosy można łatwo napełnić cementem wykorzystując otwór na worki big-bag lub systemy napełniania silosu zintegrowane ze stacjonarnym węzłem betoniarskim STATIONARY 120.'
                        aboutdescription4='Dobrze wiemy, że warunki klimatyczne mają bardzo duży wpływ na jakość produkowanego betonu. Dlatego węzeł betoniarski STATIONARY 120 eksploatowany w  chłodnym klimacie na terenie Rosji, Kazachstanu,  Ukrainy, Północnej Europy itp. jest ogrzewany przez generatory pary i posiada dodatkowo izolację termiczną, natomiast w przypadku węzła betoniarskiego instalowanego w gorącym klimacie na bliskim wschodzie, GCC, czy w Afryce, woda jest chłodzona za pomocą agregatów chłodniczych.'
                        aboutdescription5='Zastosowanie przenośników transportujących kruszywo pozwala wyeliminować konieczność budowy rampy załadunkowej, wymaganej w przypadku załadunku za pomocą ładowarek, co jednocześnie pozwala obniżyć koszty wymaganej infrastruktury.'
                        aboutdescription6='Węzeł betoniarski STATIONARY 120 jest dostępny w różnych konfiguracjach i układach odpowiednio do warunków lokalnych w miejscu montażu a w przypadku ograniczonego dostępnego miejsca, kruszywo może być transportowane za pomocą wciągarki zastępującej przenośniki taśmowe.
                        STATIONARY 120 jest wyposażony w zaawansowane technicznie systemy automatyki, w tym wysokiej klasy komponenty elektroniczne i PLC marki SIEMENS i SCHNEIDER. Cały system jest sterowany za pomocą zaawansowanego oprogramowania posiadającego przydatne funkcje i interfejs przyjazny dla użytkownika.
                        Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia stacjonarnego węzła Stationary 60 lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.'
                        specification={images.Stationary120SpecificationImg}
                        mainPlan={images.Stationary120MainPlan}
                        transportImg={images.StationaryTransport}
                        gallery1={images.Stationary120Gallery1}
                        gallery2={images.Stationary120Gallery2}
                        gallery3={images.Stationary120Gallery3}
                        gallery4={images.Stationary120Gallery4}
                        gallery5={images.Stationary120Gallery5}
                        gallery6={images.Stationary120Gallery6}
                    />
                </Route>
                <Route path="/STATIONARY160">
                    <Stationary
                        title='STATIONARY 160'
                        mainImg={images.Stationary160main}
                        aboutImg1={images.Stationary160about1}
                        aboutImg2={images.Stationary120about2}
                        aboutImg3={images.Stationary60about3}
                        aboutImg4={images.Stationary60about4}
                        aboutImg5={images.Stationary60about5}
                        aboutdescription1='Węzeł betoniarski STATIONARY 160 to całkowicie automatyczna linia do produkcji betonu. Rozwiązanie to świetnie nadaje się do realizacji projektów wymagających długofalowej produkcji gotowej mieszanki betonowej w miejscu prowadzenia robót. Stacjonarne węzły betoniarskie są wysoko cenione przez profesjonalistów z uwagi na możliwość produkcji każdego rodzaju betonu, stabilną i niezawodną konstrukcję, dostępność części zamiennych i serwis, wysoką jakość wykonania oraz zgodność z normami CE.'
                        aboutdescription2='Węzeł betoniarski STATIONARY 160 wyposażony jest w mieszalniki dwuwałowe o pojemności 4 m3 mokrego betonu.'
                        aboutdescription3='Stacjonarny węzeł betoniarski STATIONARY 160 może być wyposażony w różnej wielkości silosy na cement, o pojemności od 100 do 500 ton odpowiednio do potrzeb naszych klientów. W przypadku cementu dostarczanego w workach, silosy można łatwo napełnić cementem wykorzystując otwór na worki big-bag lub systemy napełniania silosu zintegrowane ze stacjonarnym węzłem betoniarskim STATIONARY 160.'
                        aboutdescription4='Dobrze wiemy, że warunki klimatyczne mają bardzo duży wpływ na jakość produkowanego betonu. Dlatego węzeł betoniarski STATIONARY 160 eksploatowany w  chłodnym klimacie na terenie Rosji, Kazachstanu,  Ukrainy, Północnej Europy itp. jest ogrzewany przez generatory pary i posiada dodatkowo izolację termiczną, natomiast w przypadku węzła betoniarskiego instalowanego w gorącym klimacie na bliskim wschodzie, GCC, czy w Afryce, woda jest chłodzona za pomocą agregatów chłodniczych.'
                        aboutdescription5='Zastosowanie przenośników transportujących kruszywo pozwala wyeliminować konieczność budowy rampy załadunkowej, wymaganej w przypadku załadunku za pomocą ładowarek, co jednocześnie pozwala obniżyć koszty wymaganej infrastruktury.'
                        aboutdescription6='Węzeł betoniarski STATIONARY 160 jest dostępny w różnych konfiguracjach i układach odpowiednio do warunków lokalnych w miejscu montażu a w przypadku ograniczonego dostępnego miejsca, kruszywo może być transportowane za pomocą wciągarki zastępującej przenośniki taśmowe.
                        STATIONARY 160 jest wyposażony w zaawansowane technicznie systemy automatyki, w tym wysokiej klasy komponenty elektroniczne i PLC marki SIEMENS i SCHNEIDER. Cały system jest sterowany za pomocą zaawansowanego oprogramowania posiadającego przydatne funkcje i interfejs przyjazny dla użytkownika.
                        Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia stacjonarnego węzła Stationary 60 lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.'
                        specification={images.Stationary160SpecificationImg}
                        mainPlan={images.Stationary160MainPlan}
                        transportImg={images.StationaryTransport}
                        gallery1={images.Stationary160Gallery1}
                        gallery2={images.Stationary160Gallery2}
                        gallery3={images.Stationary160Gallery3}
                        gallery4={images.Stationary160Gallery4}
                        gallery5={images.Stationary160Gallery5}
                        gallery6={images.Stationary160Gallery6}
                    />
                </Route>
                <Route path="/STATIONARY240">
                    <Stationary
                        title='STATIONARY 240'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutImg2={images.Stationary120about2}
                        aboutImg3={images.Stationary60about3}
                        aboutImg4={images.Stationary60about4}
                        aboutImg5={images.Stationary60about5}
                        aboutdescription1='Węzeł betoniarski STATIONARY 240 składa się z dwóch różnych zamontowanych obok siebie pracujących niezależnie węzłów betoniarskich 120m. Węzeł ten posiada dwa pracujące niezależnie mieszalniki o pojemności 3 m3 a wyładunek do dwóch betoniarek samochodowych wykonują dwa inne kubełki. Największą zaletą tej linii jest wykonywany jednocześnie załadunek dwóch betoniarek samochodowych, co znacznie skraca czas załadunku pojazdów. Gdy uruchomiona bedzie jedna mieszarka w celu produkcji gotowej mieszanki betonowej, druga mieszarka może być wykorzystywana do produkcji innego betonu np.betonu na bloczki lub betonu prefabrykowanego.'
                        aboutdescription2='Węzeł betoniarski STATIONARY 240 jest często wybierany przez firmy realizujące duże projekty, gdzie wymagana jest bardzo duża ilość mieszanki betonowej'
                        aboutdescription3='Węzeł betoniarski STATIONARY 240 wyposażony jest w 2 mieszalniki dwuwałowe o pojemności 3 m3 mokrego betonu.'
                        aboutdescription4='Stacjonarny węzeł betoniarski STATIONARY 240 może być wyposażony w różnej wielkości silosy na cement, o pojemności od 100 do 500 ton odpowiednio do potrzeb naszych klientów. W przypadku cementu dostarczanego w workach, silosy można łatwo napełnić cementem wykorzystując otwór na worki big-bag lub systemy napełniania silosu zintegrowane ze stacjonarnym węzłem betoniarskim STATIONARY 240.'
                        aboutdescription5='Zastosowanie przenośników transportujących kruszywo pozwala wyeliminować konieczność budowy rampy załadunkowej, wymaganej w przypadku załadunku za pomocą ładowarek, co jednocześnie pozwala obniżyć koszty wymaganej infrastruktury.'
                        aboutdescription6='Węzeł betoniarski STATIONARY 240 jest dostępny w różnych konfiguracjach i układach odpowiednio do warunków lokalnych w miejscu montażu a w przypadku ograniczonego dostępnego miejsca, kruszywo może być transportowane za pomocą wciągarki zastępującej przenośniki taśmowe.
                        STATIONARY 160 jest wyposażony w zaawansowane technicznie systemy automatyki, w tym wysokiej klasy komponenty elektroniczne i PLC marki SIEMENS i SCHNEIDER. Cały system jest sterowany za pomocą zaawansowanego oprogramowania posiadającego przydatne funkcje i interfejs przyjazny dla użytkownika.
                        Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia stacjonarnego węzła Stationary 60 lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.'
                        specification={images.Stationary240SpecificationImg}
                        mainPlan={images.Stationary240MainPlan}
                        transportImg={images.StationaryTransport}
                        gallery1={images.Stationary240Gallery1}
                        gallery2={images.Stationary240Gallery2}
                        gallery3={images.Stationary240Gallery3}
                        gallery4={images.Stationary240Gallery4}
                        gallery5={images.Stationary240Gallery5}
                        gallery6={images.Stationary240Gallery6}
                    />
                </Route>
                <Route path="/DOUBLEMIX60">
                    <Stationary
                        title='DOUBLE MIX 60'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutImg2={images.Stationary120about2}
                        aboutImg3={images.Stationary60about3}
                        aboutImg4={images.Stationary60about4}
                        aboutImg5={images.Stationary60about5}
                        aboutdescription1='CONSTMACH DOUBLEMIX 60 (60+60 m3/h) to specjalistyczny system wyposażony w dwa różne i niezależne węzły betorniarskie z mieszarkami zainstalowanymi na tej platformie. Linia ta posiada dwa podwójne niezależne mieszarki, a wyładunek do dwóch betoniarek samochodowych lub urządzeń transportujących beton wykonują dwa różne koryta. Największą zaletą tej linii jest wykonywany jednocześnie załadunek dwóch betoniarek samochodowych, co znacznie skraca czas załadunku pojazdów. Gdy uruchomiona bedzie jedna mieszarka w celu produkcji gotowej mieszanki betonowej, druga mieszarka może być wykorzystywana do produkcji innego betonu np. betonu na bloczki lub betonu prefabrykowanego.'
                        aboutdescription2='W DOUBLEMIX 60 można zamontować mieszalniki talerzowe, mieszalniki jednowałowe, mieszalniki dwuwałowe lub mieszalniki planetarne zależne od typu i właściwości produkowanego betonu.'
                        aboutdescription3='Węzeł betoniarski DOUBLEMIX 60 może być wyposażony w różnej wielkości silosy na cement, o pojemności od 100 do 500 ton odpowiednio do potrzeb naszych klientów. W przypadku cementu dostarczanego w workach, silosy można łatwo napełnić cementem wykorzystując otwór na worki big-bag lub systemy napełniania silosu zintegrowane ze stacjonarnym węzłem betoniarskim DOUBLEMIX 60.'
                        aboutdescription4='Dobrze wiemy, że warunki klimatyczne mają bardzo duży wpływ na jakość produkowanego betonu. Dlatego węzeł betoniarski DOUBLEMIX 60 eksploatowany w  chłodnym klimacie na terenie Rosji, Kazachstanu,  Ukrainy, Północnej Europy itp. jest ogrzewany przez generatory pary i posiada dodatkowo izolację termiczną, natomiast w przypadku węzła betoniarskiego instalowanego w gorącym klimacie na bliskim wschodzie, GCC, czy w Afryce, woda jest chłodzona za pomocą agregatów chłodniczych.'
                        aboutdescription5='Alternatywą dla ramp załadowczych wymaganych do załadunku zasobników są systemy podawania kruszywa. Takie rozwiązanie pozwala wyeliminować konieczność użycia systemu podawania kruszywa.'
                        aboutdescription6='Rozmieszczenie podzespołów węzła betoniarskiego DOUBLEMIX 60 jest dostosowane do lokalnych warunków a w przypadku ograniczonej ilości miejsca, kruszywo może być transportowane za pomocą specjalnego wyciągu zastępującego przenośniki taśmowe. DOUBLEMIX 60 jest wyposażona w zaawansowane technicznie systemy automatyki, w tym wysokiej klasy komponenty elektroniczne i PLC marki SIMENS i SCHNEIDER. Cały system jest sterowany za pomocą zaawansowanego oprogramowania posiadającego przydatne funkcje i interfejs przyjazny dla użytkownika. Kliknij w odpowiednią zakłądkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia węzłów betoniarskich lub kliknij w zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.'
                        specification={images.Stationary240SpecificationImg}
                        mainPlan={images.Stationary240MainPlan}
                        transportImg={images.StationaryTransport}
                        gallery1={images.Stationary240Gallery1}
                        gallery2={images.Stationary240Gallery2}
                        gallery3={images.Stationary240Gallery3}
                        gallery4={images.Stationary240Gallery4}
                        gallery5={images.Stationary240Gallery5}
                        gallery6={images.Stationary240Gallery6}
                    />
                </Route>
                <Route path="/DOUBLEMIX100">
                    <Stationary
                        title='DOUBLE MIX 100'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutImg2={images.Stationary120about2}
                        aboutImg3={images.Stationary60about3}
                        aboutImg4={images.Stationary60about4}
                        aboutImg5={images.Stationary60about5}
                        aboutdescription1='CONSTMACH DOUBLEMIX 100 (100+100 m3/h) to specjalistyczny system wyposażony w dwa różne i niezależne węzły betorniarskie z mieszarkami zainstalowanymi na tej platformie. Linia ta posiada dwa podwójne niezależne mieszarki, a wyładunek do dwóch betoniarek samochodowych lub urządzeń transportujących beton wykonują dwa różne koryta. Największą zaletą tej linii jest wykonywany jednocześnie załadunek dwóch betoniarek samochodowych, co znacznie skraca czas załadunku pojazdów. Gdy uruchomiona bedzie jedna mieszarka w celu produkcji gotowej mieszanki betonowej, druga mieszarka może być wykorzystywana do produkcji innego betonu np. betonu na bloczki lub betonu prefabrykowanego.'
                        aboutdescription2='W DOUBLEMIX 100 można zamontować mieszalniki talerzowe, mieszalniki jednowałowe, mieszalniki dwuwałowe lub mieszalniki planetarne zależne od typu i właściwości produkowanego betonu.'
                        aboutdescription3='Węzeł betoniarski DOUBLEMIX 100 może być wyposażony w różnej wielkości silosy na cement, o pojemności od 100 do 500 ton odpowiednio do potrzeb naszych klientów. W przypadku cementu dostarczanego w workach, silosy można łatwo napełnić cementem wykorzystując otwór na worki big-bag lub systemy napełniania silosu zintegrowane ze stacjonarnym węzłem betoniarskim DOUBLEMIX 100.'
                        aboutdescription4='Dobrze wiemy, że warunki klimatyczne mają bardzo duży wpływ na jakość produkowanego betonu. Dlatego węzeł betoniarski DOUBLEMIX 100 eksploatowany w  chłodnym klimacie na terenie Rosji, Kazachstanu,  Ukrainy, Północnej Europy itp. jest ogrzewany przez generatory pary i posiada dodatkowo izolację termiczną, natomiast w przypadku węzła betoniarskiego instalowanego w gorącym klimacie na bliskim wschodzie, GCC, czy w Afryce, woda jest chłodzona za pomocą agregatów chłodniczych.'
                        aboutdescription5='Alternatywą dla ramp załadowczych wymaganych do załadunku zasobników są systemy podawania kruszywa. Takie rozwiązanie pozwala wyeliminować konieczność użycia systemu podawania kruszywa.'
                        aboutdescription6='Rozmieszczenie podzespołów węzła betoniarskiego DOUBLEMIX 100 jest dostosowane do lokalnych warunków a w przypadku ograniczonej ilości miejsca, kruszywo może być transportowane za pomocą specjalnego wyciągu zastępującego przenośniki taśmowe. DOUBLEMIX 100 jest wyposażona w zaawansowane technicznie systemy automatyki, w tym wysokiej klasy komponenty elektroniczne i PLC marki SIMENS i SCHNEIDER. Cały system jest sterowany za pomocą zaawansowanego oprogramowania posiadającego przydatne funkcje i interfejs przyjazny dla użytkownika. Kliknij w odpowiednią zakłądkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia węzłów betoniarskich lub kliknij w zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.'
                        specification={images.Stationary240SpecificationImg}
                        mainPlan={images.Stationary240MainPlan}
                        transportImg={images.StationaryTransport}
                        gallery1={images.Stationary240Gallery1}
                        gallery2={images.Stationary240Gallery2}
                        gallery3={images.Stationary240Gallery3}
                        gallery4={images.Stationary240Gallery4}
                        gallery5={images.Stationary240Gallery5}
                        gallery6={images.Stationary240Gallery6}
                    />
                </Route>
                <Route path="/DRYMIX60">
                    <Stationary
                        title='BRYMIX 60'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutImg2={images.Stationary120about2}
                        aboutImg3={images.Stationary60about3}
                        aboutImg4={images.Stationary60about4}
                        aboutImg5={images.Stationary60about5}
                        aboutdescription1='CONSTMACH DRYMIX 60 to automatyczny stacjonarny węzeł betoniarski umożliwiający także produkcję betonu suchego bez mieszalnika. Składniki betonu są transportowane bezpośrednio do betoniarki samochodowej po zakończeniu ważenia pomijając mieszanie. DRYMIX 60 to rozwiązanie rekomendowane w przypadku inwestycji wymagających transport betonu na duże odległości.'
                        aboutdescription2='DRYMIX 60 może być wyposażony w różnej wielkości silosy na cement, o pojemności od 100 do 500 ton odpowiednio do potrzeb naszych klientów. W przypadku cementu dostarczanego w workach, silosy można łatwo napełnić cementem wykorzystując otwór na worki big-bag lub systemy napełniania silosu zintegrowane ze stacjonarnym węzłem betoniarskim DRYMIX 60.'
                        aboutdescription3='Dobrze wiemy, że warunki klimatyczne mają bardzo duży wpływ na jakość produkowanego betonu. Dlatego węzeł betoniarski DRYMIX 60 eksploatowany w  chłodnym klimacie na terenie Rosji, Kazachstanu,  Ukrainy, Północnej Europy itp. jest ogrzewany przez generatory pary i posiada dodatkowo izolację termiczną, natomiast w przypadku węzła betoniarskiego instalowanego w gorącym klimacie na bliskim wschodzie, GCC, czy w Afryce, woda jest chłodzona za pomocą agregatów chłodniczych.'
                        aboutdescription4='Alternatywą dla ramp załadowczych wymaganych do załadunku zasobników są systemy podawania kruszywa. Takie rozwiązanie pozwala wyeliminować konieczność użycia systemu podawania kruszywa.'
                        aboutdescription5='Rozmieszczenie podzespołów węzła betoniarskiego DRYMIX 60 jest dostosowane do lokalnych warunków a w przypadku ograniczonej ilości miejsca, kruszywo może być transportowane za pomocą specjalnego wyciągu zastępującego przenośniki taśmowe. DRYMIX 60 jest wyposażona w zaawansowane technicznie systemy automatyki, w tym wysokiej klasy komponenty elektroniczne i PLC marki SIMENS i SCHNEIDER. Cały system jest sterowany za pomocą zaawansowanego oprogramowania posiadającego przydatne funkcje i interfejs przyjazny dla użytkownika. Kliknij w odpowiednią zakłądkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia węzłów betoniarskich lub kliknij w zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.'
                        specification={images.Stationary240SpecificationImg}
                        mainPlan={images.Stationary240MainPlan}
                        transportImg={images.StationaryTransport}
                        gallery1={images.Stationary240Gallery1}
                        gallery2={images.Stationary240Gallery2}
                        gallery3={images.Stationary240Gallery3}
                        gallery4={images.Stationary240Gallery4}
                        gallery5={images.Stationary240Gallery5}
                        gallery6={images.Stationary240Gallery6}
                    />
                </Route>
                <Route path="/DRYMIX100">
                    <Stationary
                        title='BRYMIX 100'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutImg2={images.Stationary120about2}
                        aboutImg3={images.Stationary60about3}
                        aboutImg4={images.Stationary60about4}
                        aboutImg5={images.Stationary60about5}
                        aboutdescription1='CONSTMACH DRYMIX 100 to automatyczny stacjonarny węzeł betoniarski umożliwiający także produkcję betonu suchego bez mieszalnika. Składniki betonu są transportowane bezpośrednio do betoniarki samochodowej po zakończeniu ważenia pomijając mieszanie. DRYMIX 100 to rozwiązanie rekomendowane w przypadku inwestycji wymagających transport betonu na duże odległości.'
                        aboutdescription2='DRYMIX 100 może być wyposażony w różnej wielkości silosy na cement, o pojemności od 100 do 500 ton odpowiednio do potrzeb naszych klientów. W przypadku cementu dostarczanego w workach, silosy można łatwo napełnić cementem wykorzystując otwór na worki big-bag lub systemy napełniania silosu zintegrowane ze stacjonarnym węzłem betoniarskim DRYMIX 100.'
                        aboutdescription3='Dobrze wiemy, że warunki klimatyczne mają bardzo duży wpływ na jakość produkowanego betonu. Dlatego węzeł betoniarski DRYMIX 100 eksploatowany w  chłodnym klimacie na terenie Rosji, Kazachstanu,  Ukrainy, Północnej Europy itp. jest ogrzewany przez generatory pary i posiada dodatkowo izolację termiczną, natomiast w przypadku węzła betoniarskiego instalowanego w gorącym klimacie na bliskim wschodzie, GCC, czy w Afryce, woda jest chłodzona za pomocą agregatów chłodniczych.'
                        aboutdescription4='Alternatywą dla ramp załadowczych wymaganych do załadunku zasobników są systemy podawania kruszywa. Takie rozwiązanie pozwala wyeliminować konieczność użycia systemu podawania kruszywa.'
                        aboutdescription5='Rozmieszczenie podzespołów węzła betoniarskiego DRYMIX 100 jest dostosowane do lokalnych warunków a w przypadku ograniczonej ilości miejsca, kruszywo może być transportowane za pomocą specjalnego wyciągu zastępującego przenośniki taśmowe. DRYMIX 100 jest wyposażona w zaawansowane technicznie systemy automatyki, w tym wysokiej klasy komponenty elektroniczne i PLC marki SIMENS i SCHNEIDER. Cały system jest sterowany za pomocą zaawansowanego oprogramowania posiadającego przydatne funkcje i interfejs przyjazny dla użytkownika. Kliknij w odpowiednią zakłądkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia węzłów betoniarskich lub kliknij w zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.'
                        specification={images.Stationary240SpecificationImg}
                        mainPlan={images.Stationary240MainPlan}
                        transportImg={images.StationaryTransport}
                        gallery1={images.Stationary240Gallery1}
                        gallery2={images.Stationary240Gallery2}
                        gallery3={images.Stationary240Gallery3}
                        gallery4={images.Stationary240Gallery4}
                        gallery5={images.Stationary240Gallery5}
                        gallery6={images.Stationary240Gallery6}
                    />
                </Route>
                <Route path="/MOBILE30">
                    <Stationary
                        title='MOBILE 30'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutImg2={images.Stationary120about2}
                        aboutImg3={images.Stationary60about3}
                        aboutImg4={images.Stationary60about4}
                        aboutImg5={images.Stationary60about5}
                        aboutdescription1='Automatyczny mobilny węzeł betoniarski CONSTMACH MOBILE 30 to idealne rozwiązanie tymczasowych potrzeb, które cechuje szybki montaż, możliwośc rozpoczęcia produkcji w krótkim czasie oraz minimalne wymogi pod kątem infrastruktury. MOBILE 30 posiada wyposażenie konieczne do produkcji betonu, wraz z silosem na cement zamontowanym na mobilnym podwoziu na kołach, co zapewnia łatwy transport oraz możliwość szybkiego montażu.'
                        aboutdescription2='Automatyczny mobilny węzeł betoniarski MOBILE 30 charakteryzuje się minimalnymi wymogami pod kątem przygotowana miejsca do montażu. Wystarczy płaski teren o odpowiedniej wytrzymałości w stosunku do ciężaru węzła. Silosy na cement montowane do ramy węzła mają pojemność 30 ton. Zależnie od potrzeb, możliwy jest także montaż zewnętrznych silosów na cement o pojemności od 50 do 500 ton. Silosy zewnętrzne posiadają stalowe nogi, które eliminują konieczność budowy betonowych podpór.'
                        aboutdescription3='MOBILE 30 może być wyposażony w mieszalniki jednowałowe, talerzowe lub mieszalniki planetarne zależnie od typu produkowanego betonu np. gotowej mieszanki betonowej, betonu suchego, betonu prefabrykowanego etc..'
                        aboutdescription4='Zastosowanie przenośników transportujących kruszywo pozwala wyeliminować konieczność budowy rampy załadunkowej, co jednocześnie pozwala obniżyć koszty wymaganej infrastruktury.'
                        aboutdescription5='MOBILE 30 jest wyposażony w zaawansowane technicznie systemy automatyki, w tym wysokiej klasy komponenty elektroniczne i PLC marki SIMENS i SCHNEIDER. Cały system jest sterowany za pomocą zaawansowanego oprogramowania posiadającego przydatne funkcje i interfejs przyjazny dla użytkownika. Wymiary MOBILE 30 są zgodne z międzynarodowymi przepisami o transporcie drogowym, co zapenia łatwy transport z jednego na drugie miejsce. Kliknij w odpowiednią zakłądkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia węzłów betoniarskich lub kliknij w zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.'
                        specification={images.Stationary240SpecificationImg}
                        mainPlan={images.Stationary240MainPlan}
                        transportImg={images.StationaryTransport}
                        gallery1={images.Stationary240Gallery1}
                        gallery2={images.Stationary240Gallery2}
                        gallery3={images.Stationary240Gallery3}
                        gallery4={images.Stationary240Gallery4}
                        gallery5={images.Stationary240Gallery5}
                        gallery6={images.Stationary240Gallery6}
                    />
                </Route>
                <Route path="/MOBILE60">
                    <Stationary
                        title='MOBILE 60'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutImg2={images.Stationary120about2}
                        aboutImg3={images.Stationary60about3}
                        aboutImg4={images.Stationary60about4}
                        aboutImg5={images.Stationary60about5}
                        aboutdescription1='Automatyczny mobilny węzeł betoniarski CONSTMACH MOBILE 60 to idealne rozwiązanie tymczasowych potrzeb, które cechuje szybki montaż, możliwośc rozpoczęcia produkcji w krótkim czasie oraz minimalne wymogi pod kątem infrastruktury. MOBILE 30 posiada wyposażenie konieczne do produkcji betonu, wraz z silosem na cement zamontowanym na mobilnym podwoziu na kołach, co zapewnia łatwy transport oraz możliwość szybkiego montażu.'
                        aboutdescription2='Automatyczny mobilny węzeł betoniarski MOBILE 60 charakteryzuje się minimalnymi wymogami pod kątem przygotowana miejsca do montażu. Wystarczy płaski teren o odpowiedniej wytrzymałości w stosunku do ciężaru węzła. Silosy na cement montowane do ramy węzła mają pojemność 30 ton. Zależnie od potrzeb, możliwy jest także montaż zewnętrznych silosów na cement o pojemności od 50 do 500 ton. Silosy zewnętrzne posiadają stalowe nogi, które eliminują konieczność budowy betonowych podpór.'
                        aboutdescription3='MOBILE 60 może być wyposażony w mieszalniki jednowałowe, talerzowe lub mieszalniki planetarne zależnie od typu produkowanego betonu np. gotowej mieszanki betonowej, betonu suchego, betonu prefabrykowanego etc..'
                        aboutdescription4='Zastosowanie przenośników transportujących kruszywo pozwala wyeliminować konieczność budowy rampy załadunkowej, co jednocześnie pozwala obniżyć koszty wymaganej infrastruktury.'
                        aboutdescription5='MOBILE 60 jest wyposażony w zaawansowane technicznie systemy automatyki, w tym wysokiej klasy komponenty elektroniczne i PLC marki SIMENS i SCHNEIDER. Cały system jest sterowany za pomocą zaawansowanego oprogramowania posiadającego przydatne funkcje i interfejs przyjazny dla użytkownika. Wymiary MOBILE 60 są zgodne z międzynarodowymi przepisami o transporcie drogowym, co zapenia łatwy transport z jednego na drugie miejsce. Kliknij w odpowiednią zakłądkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia węzłów betoniarskich lub kliknij w zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.'
                        specification={images.Stationary240SpecificationImg}
                        mainPlan={images.Stationary240MainPlan}
                        transportImg={images.StationaryTransport}
                        gallery1={images.Stationary240Gallery1}
                        gallery2={images.Stationary240Gallery2}
                        gallery3={images.Stationary240Gallery3}
                        gallery4={images.Stationary240Gallery4}
                        gallery5={images.Stationary240Gallery5}
                        gallery6={images.Stationary240Gallery6}
                    />
                </Route>
                <Route path="/MOBILE100">
                    <Stationary
                        title='MOBILE 100'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutImg2={images.Stationary120about2}
                        aboutImg3={images.Stationary60about3}
                        aboutImg4={images.Stationary60about4}
                        aboutImg5={images.Stationary60about5}
                        aboutdescription1='Automatyczny mobilny węzeł betoniarski CONSTMACH MOBILE 100 to idealne rozwiązanie tymczasowych potrzeb, które cechuje szybki montaż, możliwośc rozpoczęcia produkcji w krótkim czasie oraz minimalne wymogi pod kątem infrastruktury. MOBILE 30 posiada wyposażenie konieczne do produkcji betonu, wraz z silosem na cement zamontowanym na mobilnym podwoziu na kołach, co zapewnia łatwy transport oraz możliwość szybkiego montażu.'
                        aboutdescription2='Automatyczny mobilny węzeł betoniarski MOBILE 100 charakteryzuje się minimalnymi wymogami pod kątem przygotowana miejsca do montażu. Wystarczy płaski teren o odpowiedniej wytrzymałości w stosunku do ciężaru węzła. Silosy na cement montowane do ramy węzła mają pojemność 30 ton. Zależnie od potrzeb, możliwy jest także montaż zewnętrznych silosów na cement o pojemności od 50 do 500 ton. Silosy zewnętrzne posiadają stalowe nogi, które eliminują konieczność budowy betonowych podpór.'
                        aboutdescription3='MOBILE 100 może być wyposażony w mieszalniki jednowałowe, talerzowe lub mieszalniki planetarne zależnie od typu produkowanego betonu np. gotowej mieszanki betonowej, betonu suchego, betonu prefabrykowanego etc..'
                        aboutdescription4='Zastosowanie przenośników transportujących kruszywo pozwala wyeliminować konieczność budowy rampy załadunkowej, co jednocześnie pozwala obniżyć koszty wymaganej infrastruktury.'
                        aboutdescription5='MOBILE 100 jest wyposażony w zaawansowane technicznie systemy automatyki, w tym wysokiej klasy komponenty elektroniczne i PLC marki SIMENS i SCHNEIDER. Cały system jest sterowany za pomocą zaawansowanego oprogramowania posiadającego przydatne funkcje i interfejs przyjazny dla użytkownika. Wymiary MOBILE 100 są zgodne z międzynarodowymi przepisami o transporcie drogowym, co zapenia łatwy transport z jednego na drugie miejsce. Kliknij w odpowiednią zakłądkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia węzłów betoniarskich lub kliknij w zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.'
                        specification={images.Stationary240SpecificationImg}
                        mainPlan={images.Stationary240MainPlan}
                        transportImg={images.StationaryTransport}
                        gallery1={images.Stationary240Gallery1}
                        gallery2={images.Stationary240Gallery2}
                        gallery3={images.Stationary240Gallery3}
                        gallery4={images.Stationary240Gallery4}
                        gallery5={images.Stationary240Gallery5}
                        gallery6={images.Stationary240Gallery6}
                    />
                </Route>
                <Route path="/MOBILE120">
                    <Stationary
                        title='MOBILE 120'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutImg2={images.Stationary120about2}
                        aboutImg3={images.Stationary60about3}
                        aboutImg4={images.Stationary60about4}
                        aboutImg5={images.Stationary60about5}
                        aboutdescription1='Mobilny węzeł betoniarski MOBILE 120 jest transportowany na dwóch podwoziach. Na jednym znajduje się zasobnik na kruszywo wraz z wagą, a na drugim przenośnik oraz zespół mieszania.'
                        aboutdescription2='Mobilny węzeł betoniarski MOBILE 120 charakteryzuję się minimalnymi wymogami pod kątem przygotowania miejsca do montażu. Wystarczy płaski teren o odpowiedniej wytrzymałości w stosunku do ciężaru węzła. '
                        aboutdescription3='MOBILE 120 jest wyposażony w mieszalniki dwuwałowe o pojemności 3 m3 mokrego betonu.'
                        aboutdescription4='W przeciwieństwie do innych mobilnych węzłów betoniarskich. MOBILE 120 nie jest wyposażony w silos na cement. Z modelem tym można użyć zewnętrzne silosy na cement o pojemności od 75 do 500 ton. W przypadku cementu dostarczanego w workach, silosy można łatwo napełnić cementem wykorzystując otwór na worki big-bag lub systemu napełniania sulosu zintegrowane z MOBILE 30.'
                        aboutdescription5='Alternatywą dla ramp załądunkowych służących do załadunku zasobników za pomocą ładowarek są systemy transportowe kruszywa. Zastosowanie przenośników transportujących kruszywo pozwala wyeliminować konieczność budowy rampy załadunkowej, co jednocześnie pozwala obniżyć koszty wymaganej infrastruktury.'
                        aboutdescription6='MOBILE 120 jest wyposażony w zaawansowane technicznie systemy automatyki, w tym wysokiej klasy komponenty elektroniczne i PLC marki SIMENS i SCHNEIDER. Cały system jest sterowany za pomocą zaawansowanego oprogramowania posiadającego przydatne funkcje i interfejs przyjazny dla użytkownika. Wymiary MOBILE 120 są zgodne z międzynarodowymi przepisami o transporcie drogowym, co zapenia łatwy transport z jednego na drugie miejsce. Kliknij w odpowiednią zakłądkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia węzłów betoniarskich lub kliknij w zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.'
                        specification={images.Stationary240SpecificationImg}
                        mainPlan={images.Stationary240MainPlan}
                        transportImg={images.StationaryTransport}
                        gallery1={images.Stationary240Gallery1}
                        gallery2={images.Stationary240Gallery2}
                        gallery3={images.Stationary240Gallery3}
                        gallery4={images.Stationary240Gallery4}
                        gallery5={images.Stationary240Gallery5}
                        gallery6={images.Stationary240Gallery6}
                    />
                </Route>



            </Switch>
        </div>

    )
}
