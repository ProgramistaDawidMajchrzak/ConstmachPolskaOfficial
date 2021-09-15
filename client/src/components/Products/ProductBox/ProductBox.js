import React from 'react';

import './ProductBox.css';
import {
    Switch,
    Route
} from "react-router-dom";
import * as images from './ProductsImages/index.js';



import Stationary from './STATIONARY/Stationary';

export default function ProductBox() {

    return (

        <div className='product-box'>
            <Switch>
                <Route path="/STATIONARY60">
                    <Stationary
                        title='STATIONARY 60'
                        path="/STATIONARY60"
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
                        path="/STATIONARY100"
                        mainImg={images.Stationary100main}
                        aboutImg1={images.Stationary100about}
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
                        aboutImg1={images.Stationary120about}
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
                        aboutImg1={images.Stationary160about}
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
                        aboutImg1={images.Stationary240about}
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
                        mainImg={images.DoubleMix60main}
                        aboutImg1={images.DoubleMix60about}
                        specification={images.DoubleMix60SpecificationImg}
                        mainPlan={images.DoubleMix60MainPlan}
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
                        mainImg={images.DoubleMix100main}
                        aboutImg1={images.DoubleMix100about}
                        specification={images.DoubleMix100SpecificationImg}
                        mainPlan={images.DoubleMix100MainPlan}
                        transportImg={images.StationaryTransport}
                        gallery1={images.DoubleMix100Gallery1}
                        gallery2={images.DoubleMix100Gallery2}
                        gallery3={images.DoubleMix100Gallery3}
                        gallery4={images.DoubleMix100Gallery4}
                        gallery5={images.DoubleMix100Gallery5}
                        gallery6={images.DoubleMix100Gallery6}
                    />
                </Route>
                <Route path="/DRYMIX60">
                    <Stationary
                        title='DRYMIX 60'
                        mainImg={images.DryMix60main}
                        aboutImg1={images.DryMix60about}
                        specification={images.DryMix60SpecificationImg}
                        mainPlan={images.DryMix60MainPlan}
                        transportImg={images.StationaryTransport}
                        gallery1={images.DryMix60Gallery1}
                        gallery2={images.DryMix60Gallery2}
                        gallery3={images.DryMix60Gallery3}
                        gallery4={images.DryMix60Gallery4}
                        gallery5={images.DryMix60Gallery5}
                        gallery6={images.DryMix60Gallery6}
                    />
                </Route>
                <Route path="/DRYMIX100">
                    <Stationary
                        title='DRYMIX 100'
                        mainImg={images.DryMix100main}
                        aboutImg1={images.DryMix100about}
                        specification={images.DryMix100SpecificationImg}
                        mainPlan={images.DryMix100MainPlan}
                        transportImg={images.StationaryTransport}
                        gallery1={images.DryMix60Gallery1}
                        gallery2={images.DryMix60Gallery2}
                        gallery3={images.DryMix60Gallery3}
                        gallery4={images.DryMix60Gallery4}
                        gallery5={images.DryMix60Gallery5}
                        gallery6={images.DryMix60Gallery6}
                    />
                </Route>
                <Route path="/MOBILE30">
                    <Stationary
                        title='MOBILE 30'
                        mainImg={images.Mobile30main}
                        aboutImg1={images.Mobile30about}
                        specification={images.Mobile30SpecificationImg}
                        mainPlan={images.Mobile30MainPlan}
                        transportImg={images.Mobile30Transport}
                        gallery1={images.Mobile30Gallery1}
                        gallery2={images.Mobile30Gallery2}
                        gallery3={images.Mobile30Gallery3}
                        gallery4={images.Mobile30Gallery4}
                        gallery5={images.Mobile30Gallery5}
                        gallery6={images.Mobile30Gallery6}
                    />
                </Route>
                <Route path="/MOBILE60">
                    <Stationary
                        title='MOBILE 60'
                        mainImg={images.Mobile60main}
                        aboutImg1={images.Mobile60about}
                        specification={images.Mobile60SpecificationImg}
                        mainPlan={images.Mobile60MainPlan}
                        transportImg={images.Mobile60Transport}
                        gallery1={images.Mobile60Gallery1}
                        gallery2={images.Mobile60Gallery2}
                        gallery3={images.Mobile60Gallery3}
                        gallery4={images.Mobile60Gallery4}
                        gallery5={images.Mobile60Gallery5}
                        gallery6={images.Mobile60Gallery6}
                    />
                </Route>
                <Route path="/MOBILE100">
                    <Stationary
                        title='MOBILE 100'
                        mainImg={images.Mobile100main}
                        aboutImg1={images.Mobile100about}
                        specification={images.Mobile100SpecificationImg}
                        mainPlan={images.Mobile100MainPlan}
                        transportImg={images.Mobile100Transport}
                        gallery1={images.Mobile100Gallery1}
                        gallery2={images.Mobile100Gallery2}
                        gallery3={images.Mobile100Gallery3}
                        gallery4={images.Mobile100Gallery4}
                        gallery5={images.Mobile100Gallery5}
                        gallery6={images.Mobile100Gallery6}
                    />
                </Route>
                <Route path="/MOBILE120">
                    <Stationary
                        title='MOBILE 120'
                        mainImg={images.Mobile120main}
                        aboutImg1={images.Mobile120about}
                        specification={images.Mobile120SpecificationImg}
                        mainPlan={images.Mobile120MainPlan}
                        transportImg={images.Mobile120Transport}
                        gallery1={images.Mobile120Gallery1}
                        gallery2={images.Mobile120Gallery2}
                        gallery3={images.Mobile120Gallery3}
                        gallery4={images.Mobile120Gallery4}
                        gallery5={images.Mobile120Gallery5}
                        gallery6={images.Mobile120Gallery6}
                    />
                </Route>
                <Route path="/MOBICOM45">
                    <Stationary
                        title='MOBICOM 45'
                        mainImg={images.Mobicom45main}
                        aboutImg1={images.Mobicom45about}
                        specification={images.Mobicom45SpecificationImg}
                        mainPlan={images.Mobicom45MainPlan}
                        transportImg={images.Mobicom45Transport}
                        gallery1={images.Mobicom45Gallery1}
                        gallery2={images.Mobicom45Gallery2}
                        gallery3={images.Mobicom45Gallery3}
                        gallery4={images.Mobicom45Gallery4}
                        gallery5={images.Mobicom45Gallery5}
                        gallery6={images.Mobicom45Gallery6}
                    />
                </Route>
                <Route path="/PRZENOŚNIKIPODAJĄCE">
                    <Stationary
                        title='PRZENOŚNIKI PODAJĄCE'
                        mainImg={images.Przenosnikimain}
                        aboutImg1={images.Przenosnikiabout}
                        specification={images.PrzenosnikiSpecificationImg}
                        mainPlan={images.PrzenosnikiMainPlan}
                        transportImg={images.PrzenosnikiTransport}
                        gallery1={images.PrzenosnikiGallery1}
                        gallery2={images.PrzenosnikiGallery2}
                        gallery3={images.PrzenosnikiGallery3}
                        gallery4={images.PrzenosnikiGallery4}
                        gallery5={images.PrzenosnikiGallery5}
                        gallery6={images.PrzenosnikiGallery6}
                    />
                </Route>
                <Route path="/COMPACT20">
                    <Stationary
                        title='COMPACT 20'
                        mainImg={images.Compact20main}
                        aboutImg1={images.Compact20about}
                        specification={images.Compact20SpecificationImg}
                        mainPlan={images.Compact20MainPlan}
                        transportImg={images.StationaryTransport}
                        gallery1={images.Compact20Gallery1}
                        gallery2={images.Compact20Gallery2}
                        gallery3={images.Compact20Gallery3}
                        gallery4={images.Compact20Gallery4}
                        gallery5={images.Compact20Gallery5}
                        gallery6={images.Compact20Gallery6}
                    />
                </Route>
                <Route path="/COMPACT30">
                    <Stationary
                        title='COMPACT 30'
                        mainImg={images.Compact30main}
                        aboutImg1={images.Compact30about}
                        specification={images.Compact30SpecificationImg}
                        mainPlan={images.Compact30MainPlan}
                        transportImg={images.StationaryTransport}
                        gallery1={images.Compact20Gallery1}
                        gallery2={images.Compact20Gallery2}
                        gallery3={images.Compact20Gallery3}
                        gallery4={images.Compact20Gallery4}
                        gallery5={images.Compact20Gallery5}
                        gallery6={images.Compact20Gallery6}
                    />
                </Route>
                <Route path="/COMPACT60">
                    <Stationary
                        title='COMPACT 60'
                        mainImg={images.Compact60main}
                        aboutImg1={images.Compact60about}
                        specification={images.Compact60SpecificationImg}
                        mainPlan={images.Compact60MainPlan}
                        transportImg={images.StationaryTransport}
                        gallery1={images.Compact60Gallery1}
                        gallery2={images.Compact60Gallery2}
                        gallery3={images.Compact60Gallery3}
                        gallery4={images.Compact60Gallery4}
                        gallery5={images.Compact60Gallery5}
                        gallery6={images.Compact60Gallery6}
                    />
                </Route>
                <Route path="/COMPACT100">
                    <Stationary
                        title='COMPACT 100'
                        mainImg={images.Compact100main}
                        aboutImg1={images.Compact100about}
                        specification={images.Compact100SpecificationImg}
                        mainPlan={images.Compact100MainPlan}
                        transportImg={images.StationaryTransport}
                        gallery1={images.Compact60Gallery1}
                        gallery2={images.Compact60Gallery2}
                        gallery3={images.Compact60Gallery3}
                        gallery4={images.Compact60Gallery4}
                        gallery5={images.Compact60Gallery5}
                        gallery6={images.Compact60Gallery6}
                    />
                </Route>
                <Route path="/MIESZALNIKIDWUWAŁOWE">
                    <Stationary
                        title='MIESZALNIKI DWUWAŁOWE'
                        mainImg={images.TwinShaftmain}
                        aboutdescription1='Mieszalniki dwuwałowe CONSTMACH cechuje wytrzymała i kompaktowa konstrukcja zapewniająca dokładne mieszanie każdego kruszywa. Wydajność wynosząca od 1 m3 do 6 m3 oraz krótki czas mieszania sprawiają, że mieszalniki dwuwałowe CONSTMACH to idealne rozwiązanie do produkcji bloczków, nawierzchni z prefabrykowanego betonu, czy budowy zapory. Cała sztuka podczas mieszania etonu, polega na tym, ab było to wykonane dokładnie i szybko. Mieszalniki dwuwałowe cechuje wymuszane spiralne mieszanie powodujące wyrzucanie cząsteczek z każdej strony mieszalnika w kierunku środka, gdzie następuje ich połączenie. Silny strumień wody dopływający do mieszanki, jest wchłaniany umożliwiając równomierne pokrycie wszystkich cząsteczek kruszywa przez płynną masę, zapewniając wytrzymały beton.'
                        aboutdescription2='Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia mieszalnika dwuwałowego lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.'
                        specification={images.TwinShaftSpecificationImg}
                        mainPlan={images.TwinShaftMainPlan}
                        transportImg={images.TwinShaftTransport}
                        gallery1={images.TwinShaftGallery1}
                        gallery2={images.TwinShaftGallery2}
                        gallery3={images.TwinShaftGallery3}
                        gallery4={images.TwinShaftGallery4}
                        gallery5={images.TwinShaftGallery5}
                        gallery6={images.TwinShaftGallery6}
                    />
                </Route>
                <Route path="/MIESZALNIKIJEDNOWAŁOWE">
                    <Stationary
                        title='MIESZALNIKI JEDNOWAŁOWE'
                        mainImg={images.SingleShaftmain}
                        aboutImg1={images.SingleShaftabout}
                        specification={images.SingleShaftSpecificationImg}
                        mainPlan={images.SingleShaftMainPlan}
                        transportImg={images.TwinShaftTransport}
                        gallery1={images.SingleShaftGallery1}
                        gallery2={images.SingleShaftGallery2}
                        gallery3={images.SingleShaftGallery3}
                        gallery4={images.SingleShaftGallery4}
                        gallery5={images.SingleShaftGallery5}
                        gallery6={images.SingleShaftGallery6}
                    />
                </Route>
                <Route path="/MIESZALNIKIPLANETARNE">
                    <Stationary
                        title='MIESZALNIKI PLANETARNE'
                        mainImg={images.Planetarymain}
                        aboutImg1={images.Planetaryabout}
                        specification={images.PlanetarySpecificationImg}
                        mainPlan={images.PlanetaryMainPlan}
                        transportImg={images.PlanetaryTransport}
                        gallery1={images.PlanetaryGallery1}
                        gallery2={images.PlanetaryGallery2}
                        gallery3={images.PlanetaryGallery3}
                        gallery4={images.PlanetaryGallery4}
                        gallery5={images.PlanetaryGallery5}
                        gallery6={images.PlanetaryGallery6}
                    />
                </Route>
                <Route path="/MIESZALNIKITALERZOWE">
                    <Stationary
                        title='MIESZALNIKI TALERZOWE'
                        mainImg={images.Panmain}
                        aboutImg1={images.Panabout}
                        specification={images.PanSpecificationImg}
                        transportImg={images.PlanetaryTransport}
                        gallery1={images.PanGallery1}
                        gallery2={images.PanGallery2}
                        gallery3={images.PanGallery3}
                        gallery4={images.PanGallery4}
                        gallery5={images.PanGallery5}
                        gallery6={images.PanGallery6}
                    />
                </Route>
                <Route path="/LINIEDOKRUSZENIAIPRZESIEWANIA">
                    <Stationary
                        title='LINIE DO KRUSZENIA I PRZESIEWANIA'
                        mainImg={images.Crushing1main}
                        aboutdescription1='CONSTMACH projektuje i produkuje Linie do kruszenia i przesiewania z różnymi konfiguracjami i wartościami wydajności zgodnie z potrzebami klientów i pReferencje. Wartości zdolności produkcyjnych naszych linii do kruszenia i przesiewania zmieniają się od 50 do 1.000 tph. Konfiguracje i układy naszych linii do kruszenia i przesiewania są definiowane według różnych kryteriów, takich jak:

                        - wymagana zdolność produkcyjna,
                        - rodzaj, twardość i poziom ścieralności kruszonego materiału,
                        - maksymalny rozmiar materiału do karmienia,
                        - rozmiary wymaganych frakcji końcowych.
                        Nasz zespół projektowy konfiguruje różne układy, korzystając z naszych różnych typów i rozmiarów podajników, kruszarek, sit, lejek, myjni i przenośników.'
                        aboutdescription2='Głównym celem naszej firmy jest zawsze wspieranie naszych klientów w wyborze najbardziej odpowiednich projektów zgodnie z ich rzeczywistymi potrzebami i pomoc w uniknięciu błędnych inwestycji, które spowodują marnotrawstwo finansów i / lub wysokie koszty operacyjne.

                        Proszę o kontakt, aby uzyskać najbardziej odpowiednie i zoptymalizowane projekty i oferty, które zostaną przygotowane przez nasz zespół inżynierów i całkowicie spełnią Państwa wymagania.'
                        specifDescription='Specyfikacje techniczne i główne konfiguracje naszych linii do kruszenia i przesiewania zmieniają się zgodnie z zdolnością produkcyjną zakładu, ilością i wielkością końcowych frakcji i rodzaju kruszonego materiału.'
                        mainPlan={images.Crushing1MainPlan}
                        mainPlanDescription='Układy naszych linii do kruszenia i przesiewania zmieniają się zgodnie z zdolnością produkcyjną zakładu, ilością i wielkością końcowych frakcji i rodzaju kruszonego materiału. Poniżej znajdują się przykładowe układy produktów, które są często preferowane przez naszych klientów.'
                        transportImg={images.Crushing1Transport}
                        transportDescription='Znajdujące się w naszej produkty umożliwiają ograniczenie do minimum kosztów związanych z transportem dzięki modułowej konstrukcji i możliwości transportu w naczepie o zamkniętej obudowie i kontenerze 40 ft OT.'
                        gallery1={images.Crushing1Gallery1}
                        gallery2={images.Crushing1Gallery2}
                        gallery3={images.Crushing1Gallery3}
                        gallery4={images.Crushing1Gallery4}
                        gallery5={images.Crushing1Gallery5}
                        gallery6={images.Crushing1Gallery6}
                    />
                </Route>
                <Route path="/KRUSZARKISZCZĘKOWE">
                    <Stationary
                        title='KRUSZARKI SZCZĘKOWE'
                        mainImg={images.Crushing2main}
                        aboutdescription1='Kruszarki szczękowe CONSTMACH zostały zaprojektowane do wstępnego kruszenia wszelkiego rodzaju surowców od miękkiego wapienia do najtwardszego granitu. Kruszarki szczękowe CONSTMACH są stosowane, jako kruszarki I stopnia w stacjonarnych i przejezdnych kruszarkach.
                        
                        Koło zamachowe dużej prędkości, kąt szczęk, płyty bezpieczeństwa oraz tylne bloki, wysokie parametry pracy zapewniane dzięki geometrii, niezawodność, wytrzymałość oraz przyjazna dla użytkownika regulacja to zalety kruszarek szczękowych. Wszystkie kruszarki szczękowe są wyposażone w hydrauliczną regulację, która umożliwia ustawienie prześwitu szczęk zgodnie z pożądaną wielkością frakcji końcowej.'
                        aboutdescription2='Cechy KRUSZAREK SZCZĘKOWYCH CONSTMACH:
                        Przemysłowa stalowa rama, spawana łukowo i poddawana normalnemu odpuszczaniu.
                        Duże, przemysłowe sferyczne, samocentrujące łożyska wałeczkowe.
                        Kruszarki szczękowe posiadają fundament pochłaniający największe obciążenie dzięki wykonaniu z kutego odlewu ze stali chromowo-niklowej.
                        Zależnie od potrzeb, kruszarki szczękowe CONSTMACH mogą być wyposażone w automatyczny system smarowania.
                        Duże koła zamachowe zapewniające utrzymanie bezwładności podczas kruszenia twardego materiału.
                        Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o danych technicznych, transporcie, rysunek techniczny, wymiary kruszarek stożkowych lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.'
                        specification={images.Crushing2SpecificationImg}
                        mainPlan={images.Crushing2MainPlan}
                        transportImg={images.Crushing2Transport}
                        transportDescription='Znajdujące się w naszej ofercie produkty umożliwiają ograniczenie do minimum kosztów związanych z transportem dzięki modułowej konstrukcji i możliwości transportu w naczepie o zamkniętej obudowie i kontenerze 40 ft OT.'
                        gallery1={images.Crushing2Gallery1}
                        gallery2={images.Crushing2Gallery2}
                        gallery3={images.Crushing2Gallery3}
                        gallery4={images.Crushing2Gallery4}
                        gallery5={images.Crushing2Gallery5}
                        gallery6={images.Crushing2Gallery6}
                    />
                </Route>
                <Route path="/KRUSZARKIUDAROWEPIERWSZEGOSTOPNIA">
                    <Stationary
                        title='KRUSZARKI UDAROWE PIERWSZEGO STOPNIA'
                        mainImg={images.Crushing3main}
                        aboutdescription1='
                        Kruszarki udarowe I stopnia CONSTMACH to doskonałe rozwiązanie do kruszenia surowców i niskiej i średniej twardości zapewniające wysoką wydajność oraz frakcję końcową o sześciennym kształcie. Wysoki współczynnik przełożenia umożliwia spełnianie wymogów kruszenia II stopnia oraz zapewnia maksymalną wydajność. Hydrauliczna regulacja zapewnia łatwą konserwację i zmianę ustawień.
                        
                        Cechy kruszarek udarowych I stopnia:
                        Grube boczne blachy, z okładzinami z manganu w miejscach narażonych na ścieranie
                        Duże sferyczne samo-centrujące łożyska wałeczkowe
                        Wirnik spawany łukowo, i poddawany normalnemu odpuszczaniu.
                        Łopaty wirnika ze stali manganowej
                        Duży otwór wsadowy z kurtynami zabezpieczającymi przed odbiciami
                        Wysoki wsp. przełożenia
                        Niezasłonięte otwory na wyjściu maszyny
                        Regulowane długie ramię sterowania wielkością produktu.'
                        aboutdescription2='Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia linii kruszarek udarowych I stopnia lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.'
                        specification={images.Crushing3SpecificationImg}
                        mainPlan={images.Crushing3MainPlan}
                        transportImg={images.Crushing2Transport}
                        transportDescription='Znajdujące się w naszej ofercie produkty umożliwiają ograniczenie do minimum kosztów związanych z transportem dzięki modułowej konstrukcji i możliwości transportu w naczepie o zamkniętej obudowie i kontenerze 40 ft OT.'
                        gallery1={images.Crushing3Gallery1}
                        gallery2={images.Crushing3Gallery2}
                        gallery3={images.Crushing3Gallery3}
                        gallery4={images.Crushing3Gallery4}
                        gallery5={images.Crushing3Gallery5}
                        gallery6={images.Crushing3Gallery6}
                    />
                </Route>
                <Route path="/KRUSZARKIUDAROWEDRUGIEGOSTOPNIA">
                    <Stationary
                        title='KRUSZARKI UDAROWE DRUGIEGO STOPNIA'
                        mainImg={images.Crushing4main}
                        aboutdescription1='Kruszarki udarowe II stopnia oferują duża wydajność, sześcienny kształt i niskie koszty eksploatacji. Oprócz wyjątkowej trwałości, łatwość wykonywania konserwacji pozwala ograniczyć do minimum przestoje. Trzy-stopniowe wahadło sprawia, że kruszarki udarowe II stopnia CONSTMACH nadają się świetnie do kruszenia I, II i III stopnia.
                        
                        Wytrzymałe tarcze, poddane normalnemu odpuszczaniu
                        Duże sferyczne łożyska wałeczkowe
                        Elementy kruszące wykonane ze stopu o dużej zawartości chromu lub manganu
                        Tylne drzwiczki zapewniające dostęp do śrub poszycia
                        Dwa hydrauliczne cylindry otwierające korpus
                        Wysoki wsp. przełożenia
                        Duży otwór wyładowczy
                        Hydrauliczna regulacja umożliwiająca zmianę rozwarcia płyty podczas kruszenia.'
                        aboutdescription2='Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia linii kruszarek udarowych II stopnia lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.'
                        specification={images.Crushing4SpecificationImg}
                        mainPlan={images.Crushing4MainPlan}
                        transportImg={images.Crushing2Transport}
                        transportDescription='Znajdujące się w naszej ofercie produkty umożliwiają ograniczenie do minimum kosztów związanych z transportem dzięki modułowej konstrukcji i możliwości transportu w naczepie o zamkniętej obudowie i kontenerze 40 ft OT.'
                        gallery1={images.Crushing4Gallery1}
                        gallery2={images.Crushing4Gallery2}
                    />
                </Route>
                <Route path="/KRUSZARKISTOŻKOWE">
                    <Stationary
                        title='KRUSZARKI STOŻKOWE'
                        mainImg={images.Crushing5main}
                        aboutdescription1='CONSTMACH rekomenduje w mobilnych lub stacjonarnych kruszarkach montaż znanych na całym świecie z wysokiej jakości kruszarek stożkowych firmy METSO lub SANDVIK.

                        Zapewni to pełną dostępność części zamiennych oraz ułatwi eksploatację i konserwację.
                        
                        Nasza firma montuje w kruszarkach stożkowych firmy METSO lub SANDVIK obudowę o stalowej konstrukcji, platformy, stalowe nogi oraz silniki elektryczne.'
                        aboutdescription2='Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia kruszarek stożkowych lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.'
                        specification={images.Crushing5SpecificationImg}
                        mainPlan={images.Crushing5MainPlan}
                        transportImg={images.Crushing5Transport}
                        transportDescription='Znajdujące się w naszej ofercie kruszarki stożkowe umożliwiają ograniczenie do minimum kosztów związanych z transportem dzięki modułowej konstrukcji i możliwości transportu w naczepie o zamkniętej obudowie i kontenerze 40 ft OT.'
                        gallery1={images.Crushing5Gallery1}
                        gallery2={images.Crushing5Gallery2}
                        gallery3={images.Crushing5Gallery3}
                        gallery4={images.Crushing5Gallery4}
                        gallery5={images.Crushing5Gallery5}
                        gallery6={images.Crushing5Gallery6}
                    />
                </Route>
                <Route path="/KRUSZARKIUDAROWETRZECIEGOSTOPNIA">
                    <Stationary
                        title='KRUSZARKI UDAROWE TRZECIEGO STOPNIA'
                        mainImg={images.Crushing6main}
                        aboutdescription1='Kruszarki udarowe III stopnia świetnie nadają się do kruszenia surowców o średniej twardości, pozbawionych właściwości ściernych zapewniając sześcienny kształt produktu o wielkości 0 – 5 mm (60% przechodzących) podczas jednego cyklu. Zapewniona dodatkowo kontrola nad wielkością produktu i wysoki współczynnik przełożenia gwarantują wydajną pracę w układzie zamkniętym produkując frakcje o małych rozmiarach. Mechanizm hydraulicznego otwierania zapewnia łatwą konserwacją i zmianę ustawień'
                        aboutdescription2='Cechy KRUSZAREK UDAROWYCH III STOPNIA:
                        Wysoki wsp. przełożenia
                        Produkt sześcienny dobrze rozrkuszony
                        Płyta regulacji prędkości kruszenia
                        Wymienne części ulegające zużyciu
                        Hydrauliczna regulacja i mechanizm otwierający'
                        aboutdescription3='Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia kruszarek udarowych III stopnia lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.'
                        specification={images.Crushing6SpecificationImg}
                        mainPlan={images.Crushing6MainPlan}
                        transportImg={images.Crushing6Transport}
                        transportDescription='Znajdujące się w naszej ofercie kruszarki stożkowe umożliwiają ograniczenie do minimum kosztów związanych z transportem dzięki modułowej konstrukcji i możliwości transportu w naczepie o zamkniętej obudowie i kontenerze 40 ft OT.'
                        gallery1={images.Crushing6Gallery1}
                        gallery2={images.Crushing6Gallery2}
                        gallery3={images.Crushing6Gallery3}
                        gallery4={images.Crushing6Gallery4}
                        gallery5={images.Crushing6Gallery5}
                        gallery6={images.Crushing6Gallery6}
                    />
                </Route>
                <Route path="/KRUSZARKIUDAROWEZPIONOWYMWAŁEM">
                    <Stationary
                        title='KRUSZARKI UDAROWE Z PIONOWYM WAŁEM'
                        mainImg={images.Crushing7main}
                        aboutdescription1='Kruszarki udarowe z wałem pionowym CONSTMACH VSI są zwane także MASZYNAMI DO WYRABIANIA PIASKU i są stosowane, jako kruszarki III stopnia zapewniając dużą ilość rozdrobnionego surowca oraz sześcienny kształt produktu podawanego z kruszarek II stopnia. Nadają się do przerobu wszelkiego rodzaju surowców, a szczególnie twardych skał takich, jak bazalt i granit o wielkości maks. 45 mm wstępnie rozkruszonych za pomocą kruszarek II stopnia.'
                        aboutdescription2='Cechy KRUSZAREK VSI:
                        Cztery zamienne komory kruszenia umożliwiające zmianę typu surowca i specyfikacji produktu
                        Wirnik zmiennej prędkości umożliwiający zmianę typu surowca i specyfikacji produktu
                        Wysoki współczynnik przełożenia
                        Duży symetryczny zasobnik
                        Cztery zamienne komory kruszenia umożliwiające zmianę wielkości i ładowności
                        Wirnik zmiennej prędkości umożliwiający zmianę ustawień wielkości i ładowności
                        Podnośnik pokrywy z opcjonalnym systemem wymiany kowadła
                        ARS i opatentowana, wyjmowana górna wanna umożliwiając łatwą regulację ustawienia pierścienia kowadła i wymianę kowadła
                        Elementy wirnika i kowadła z wysokogatunkowej stali chromowej, wirnik zabezpieczony przed uszkodzeniem i półki na materiał
                        Wysoko-wydajne łożyska wałeczkowe
                        Automatyczny system smarowania'
                        specification={images.Crushing7SpecificationImg}
                        mainPlan={images.Crushing7MainPlan}
                        transportImg={images.Crushing7Transport}
                        gallery1={images.Crushing7Gallery1}
                        gallery2={images.Crushing7Gallery2}
                        gallery3={images.Crushing7Gallery3}
                        gallery4={images.Crushing7Gallery4}
                        gallery5={images.Crushing7Gallery5}
                        gallery6={images.Crushing7Gallery6}
                    />
                </Route>
                <Route path="/PRZENOŚNIKITAŚMOWE">
                    <Stationary
                        title='PRZENOŚNIKI TAŚMOWE'
                        mainImg={images.Crushing8main}
                        aboutdescription1='Przenośniki taśmowe CONSTMACH są stosowane w naszych węzłach betoniarskich oraz systemach do kruszenia i przesiewaczach do ważenia, podawania, transportu i składowania surowca. Przenośniki taśmowe CONSTMACH są wyposażone w wysokiej jakości wysokowydajne silniki elektryczne i przekładnie. Dodatkowo posiadają one wysokiej jakości 4 powłokową taśmę kauczukową, rolki o długiej żywotności, powlekane kauczukiem bębny, podesty, trwałą stalową ramę oraz przyciski zatrzymania awaryjnego. Opcjonalnie przenośniki mogą także posiadać zamontowane okapy, aby ograniczyć emisję pyłu do otoczenia. Oprócz przenośników stanowiących podzespoły dostarczanych przez naszą firmę systemów i węzłów betoniarskich, świadczymy także usługi w zakresie produkcji i dostawy przenośników dostosowanych do indywidualnych potrzeb naszych klientów pod kątem wielkości i konstrukcji.'
                        aboutdescription2='Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia przenośników taśmowych lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.'
                        mainPlan={images.Crushing8MainPlan}
                        transportImg={images.Crushing8Transport}
                        gallery1={images.Crushing8Gallery1}
                        gallery2={images.Crushing8Gallery2}
                        gallery3={images.Crushing8Gallery3}
                        gallery4={images.Crushing8Gallery4}
                        gallery5={images.Crushing8Gallery5}
                        gallery6={images.Crushing8Gallery6}
                    />
                </Route>
                <Route path="/PODAJNIKIWIBRACYJNE">
                    <Stationary
                        title='PODAJNIKI WIBRACYJNE'
                        mainImg={images.Crushing9main}
                        aboutdescription1='Podajniki wibracyjne z koszem CONSTMACH zapewniają podawanie surowca do kruszarek stanowiących część systemów kruszenia. Podajniki wibracyjne ustawione są przed główną kruszarką, kruszarką udarową I stopnia lub kruszarką szczękową, aby zapewnić surowiec odpowiedniej wielkości i zredukować koszty kruszarek pośrednich, zwiększając wydajność, zapewniając nieprzerwaną pracę systemu oraz jednorodną dystrybucję. Kosze takie posiadają następujące zalety: w przypadku nagłego odrzucenia i oczekiwania przy głównej kruszarce, przenośniki i przesiewacze są przeciążone na skutek nieprzerwanego załadunku.

                        Może to spowodować nieprawidłowości podczas kruszenia surowca w kruszarce udarowej, maszynach do wyrabiania piasku, kruszarkach stożkowych i kruszarkach z pionowym wałem powodując uderzenie cieplne. Ponadto takie nagłe przeciążenie ma wpływ na szybsze zużywanie się młota i innych części maszyny a także sam transport materiałów. Dlatego części narażone na zużycie odpowiadają za spadek wydajności nawet o 60% i wyższe koszty konserwacji. Ale to nie wszystko. Części narażone na zużycie to nie tylko części znajdujące się wewnątrz maszyny. Wiele nieprawidłowości jest spowodowanych stosowaną techniką kruszenia a także obsługą taśmy przenośnika i wyposażenia, powodując rozerwanie taśmy, jednostronne wytarcie rolek, zużycie łożysk, wałów bębna i innych części.
                        
                        Występowanie takich problemów uniemożliwia uzyskanie wysokiej wydajności podczas przesiewania niestandardowego. Dlatego stosowane są podajniki i pośrednie kosze, aby wyeliminować zakłócenia, zapewnić jakość, zredukować koszty utrzymania i wydłużyć żywotność maszyny i wyposażenia.
                        
                        Cechy PODAJNIKÓW WIBRACYJNYCH Z KOSZEM CONSTMACH:
                        Płynna wibracja,
                        Niezawodność
                        Długa żywotność
                        Transport surowców'
                        aboutdescription2='Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o danych technicznych, transporcie, rysunek techniczny, wymiary kruszarek stożkowych lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH'
                        specification={images.Stationary240SpecificationImg}
                        transportImg={images.Crushing7Transport}
                        gallery1={images.Crushing9Gallery1}
                        gallery2={images.Crushing9Gallery2}
                        gallery3={images.Crushing9Gallery3}
                        gallery4={images.Crushing9Gallery4}
                        gallery5={images.Crushing9Gallery5}
                        gallery6={images.Crushing9Gallery6}
                    />
                </Route>
                <Route path="/JC-1MOBILNEKRUSZARKI">
                    <Stationary
                        title='JC-1 MOBILNE KRUSZARKI'
                        mainImg={images.JC1main}
                        aboutImg1={images.JC1about}
                        specification={images.JC1SpecificationImg}
                        mainPlan={images.JC1MainPlan}
                        transportImg={images.JC1Transport}
                        gallery1={images.JC1Gallery1}
                        gallery2={images.JC1Gallery2}
                        gallery3={images.JC1Gallery3}
                        gallery4={images.JC1Gallery4}
                        gallery5={images.JC1Gallery5}
                        gallery6={images.JC1Gallery6}
                    />
                </Route>
                <Route path="/JC-2MOBILNEKRUSZARKI">
                    <Stationary
                        title='JC-2 MOBILNE KRUSZARKI'
                        mainImg={images.JC1main}
                        aboutImg1={images.JC2about}
                        specification={images.JC2SpecificationImg}
                        mainPlan={images.JC2MainPlan}
                        transportImg={images.JC2Transport}
                        gallery1={images.JC1Gallery1}
                        gallery2={images.JC1Gallery2}
                        gallery3={images.JC1Gallery3}
                        gallery4={images.JC1Gallery4}
                        gallery5={images.JC1Gallery5}
                        gallery6={images.JC1Gallery6}
                    />
                </Route>
                <Route path="/JC-3MOBILNEKRUSZARKI">
                    <Stationary
                        title='JC-3 MOBILNE KRUSZARKI'
                        mainImg={images.JC3main}
                        aboutImg1={images.JC3about}
                        specification={images.JC3SpecificationImg}
                        mainPlan={images.JC3MainPlan}
                        transportImg={images.JC3Transport}
                        gallery1={images.JC1Gallery1}
                        gallery2={images.JC1Gallery2}
                        gallery3={images.JC1Gallery3}
                        gallery4={images.JC1Gallery4}
                        gallery5={images.JC1Gallery5}
                        gallery6={images.JC1Gallery6}
                    />
                </Route>
                <Route path="/JCV-1MOBILNEKRUSZARKI">
                    <Stationary
                        title='JCV-1 MOBILNE KRUSZARKI'
                        mainImg={images.JCV1main}
                        aboutImg1={images.JCV1about}
                        specification={images.JCV1SpecificationImg}
                        mainPlan={images.JCV1MainPlan}
                        transportImg={images.JCV1Transport}
                        gallery1={images.JC1Gallery1}
                        gallery2={images.JC1Gallery2}
                        gallery3={images.JC1Gallery3}
                        gallery4={images.JC1Gallery4}
                        gallery5={images.JC1Gallery5}
                        gallery6={images.JC1Gallery6}
                    />
                </Route>
                <Route path="/JCV-2MOBILNEKRUSZARKI">
                    <Stationary
                        title='JCV-2 MOBILNE KRUSZARKI'
                        mainImg={images.JCV1main}
                        aboutImg1={images.JCV2about}
                        specification={images.JCV2SpecificationImg}
                        mainPlan={images.JCV2MainPlan}
                        transportImg={images.JCV2Transport}
                        gallery1={images.JC1Gallery1}
                        gallery2={images.JC1Gallery2}
                        gallery3={images.JC1Gallery3}
                        gallery4={images.JC1Gallery4}
                        gallery5={images.JC1Gallery5}
                        gallery6={images.JC1Gallery6}
                    />
                </Route>
                <Route path="/JCV-3MOBILNEKRUSZARKI">
                    <Stationary
                        title='JCV-3 MOBILNE KRUSZARKI'
                        mainImg={images.JCV1main}
                        aboutImg1={images.JCV3about}
                        specification={images.JCV3SpecificationImg}
                        mainPlan={images.JCV3MainPlan}
                        transportImg={images.JCV3Transport}
                        gallery1={images.JC1Gallery1}
                        gallery2={images.JC1Gallery2}
                        gallery3={images.JC1Gallery3}
                        gallery4={images.JC1Gallery4}
                        gallery5={images.JC1Gallery5}
                        gallery6={images.JC1Gallery6}
                    />
                </Route>
                <Route path="/JT-1MOBILNEKRUSZARKI">
                    <Stationary
                        title='JT-1 MOBILNE KRUSZARKI'
                        mainImg={images.JT1main}
                        aboutImg1={images.JT1about}
                        specification={images.JT1SpecificationImg}
                        mainPlan={images.JT1MainPlan}
                        transportImg={images.JT1Transport}
                        gallery1={images.JT1Gallery1}
                        gallery2={images.JT1Gallery2}
                        gallery3={images.JT1Gallery3}
                        gallery4={images.JT1Gallery4}
                        gallery5={images.JT1Gallery5}
                        gallery6={images.JT1Gallery6}
                    />
                </Route>
                <Route path="/JS-2MOBILNEKRUSZARKI">
                    <Stationary
                        title='JS-2 MOBILNE KRUSZARKI'
                        mainImg={images.JS2main}
                        aboutImg1={images.JS2about}
                        specification={images.JS2SpecificationImg}
                        mainPlan={images.JS2MainPlan}
                        transportImg={images.JS2Transport}
                        gallery1={images.JS2Gallery1}
                        gallery2={images.JS2Gallery2}
                        gallery3={images.JS2Gallery3}
                        gallery4={images.JS2Gallery4}
                        gallery5={images.JS2Gallery5}
                        gallery6={images.JS2Gallery6}
                    />
                </Route>
                <Route path="/JS-3MOBILNEKRUSZARKI">
                    <Stationary
                        title='JS-3 MOBILNE KRUSZARKI'
                        mainImg={images.JS3main}
                        aboutImg1={images.JS3about}
                        specification={images.JS3SpecificationImg}
                        mainPlan={images.JS3MainPlan}
                        transportImg={images.JS3Transport}
                        gallery1={images.JS2Gallery1}
                        gallery2={images.JS2Gallery2}
                        gallery3={images.JS2Gallery3}
                        gallery4={images.JS2Gallery4}
                        gallery5={images.JS2Gallery5}
                        gallery6={images.JS2Gallery6}
                    />
                </Route>
                {/*<Route path="/V-70MOBILNEWĘZŁYDOPRODUKCJIPIASKU">
                    <Stationary
                        title='V-70 MOBILNE WĘZŁY DO PRODUKCJI PIASKU'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutImg2={images.Stationary240about1}
                        aboutdescription1='Mobilna linia kruszenia i przesiewania V-70 zwana także MOBILNĄ LINIĄ DO PRODUKCJI PIASKU to idealne rozwiązanie do produkcji rozdrobnionego surowca takiego, jak piasek o wielkości ziarna 0-5 mm i doskonałym kształcie sześciennym. V-70 jest efektem prac projektowych i wysiłków inżynierów, i została skonstruowana z wysokiej jakości materiałów oraz komponentów charakteryzujących się długą żywotnością i doskonałym wykonaniem. Oprócz surowca przerobionego wstępnie za pomocą kruszarek I i II stopnia, można także użyć surowiec naturalny o wielkości poniżej 35 mm. V-70 zapewnia zadawalające efekty pracy niezależnie od rodzaju surowca i stopnia twardości np. granitu, bazaltu, dolomitu, kruszywa gabrowego, wapienia etc.. Mobilna linia do produkcji piasku V-70 zapewnia wydajność na poziomie od 100 do 150 t/h zależnie od twardości surowca. Oprócz ziarna piasku o wielkości 0-5 mm, jednocześnie można uzyskać nawet 3 różne frakcje.'
                        aboutdescription2='Zależnie od potrzeb, do podwozia można zamontować także generator zasilania. V-70 to urządzenie przyjazne dla użytkownika, które cechuje łatwy do wykonania montaż oraz zaledwie kilkugodzinny czas uruchamiania. Zależnie od potrzeb, istnieje możliwość wyposażenia zasobnika kosza zasypowego oraz przenośników w mechanizm hydraulicznego otwierania umożliwiający pracę węzła bez konieczności użycia dodatkowego sprzętu.'
                        aboutdescription3='V-70 jest wyposażona w nowoczesną automatykę sterującą w tym najwyższej klasy komponenty marki SIEMENS-SCHNEIDER oraz PLC. V-70 można obsługiwać za pomocą tabletu. Wymiary V-70 są zgodne z międzynarodowymi przepisami o transporcie drogowym, co zapewnia łatwy transport z jednego na drugie miejsce za pomocą ciągnika posiadającego sprzęg z blokadą sworznia. Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia T-70 lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.'
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
                <Route path="/T-75MOBILNEWĘZŁYDOPRODUKCJIPIASKU">
                    <Stationary
                        title='T-75 MOBILNE WĘZŁY DO PRODUKCJI PIASKU'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutImg2={images.Stationary240about1}
                        aboutdescription1='Mobilna linia do kruszenia i przesiewania CONSTMACH T-75 zwana także MOBILNĄ LINIĄ DO PRODUKCJI PIASKU to idealne rozwiązanie do produkcji rozdrobnionego surowca takiego, jak piasek o wielkości ziarna 0-5 mm i doskonałym kształcie sześciennym. T-75 jest efektem prac projektowych i wysiłków inżynierów, i została skonstruowana z wysokiej jakości materiałów oraz komponentów charakteryzujących się długą żywotnością i doskonałym wykonaniem. Oprócz surowca przerobionego wstępnie za pomocą kruszarek I i II stopnia, można także użyć surowiec naturalny o wielkości poniżej 150 mm. T-75 zapewnia zadawalające efekty pracy niezależnie od rodzaju surowca i stopnia twardości np. granitu, bazaltu, dolomitu, kruszywa gabrowego, wapienia etc.. T-75 zapewnia wydajność na poziomie od 60 do 80 t/h zależnie od twardości surowca. Oprócz ziarna piasku o wielkości 0-5 mm, jednocześnie można uzyskać nawet 3 różne frakcje.'
                        aboutdescription2='Zależnie od potrzeb, do podwozia można zamontować także generator zasilania. T-75 to urządzenie przyjazne dla użytkownika, które cechuje łatwy do wykonania montaż oraz zaledwie kilkugodzinny czas uruchamiania. Zależnie od potrzeb, istnieje możliwość wyposażenia zasobnika kosza zasypowego oraz przenośników w mechanizm hydraulicznego otwierania umożliwiający pracę węzła bez konieczności użycia dodatkowego sprzętu.'
                        aboutdescription3='T-75 jest wyposażona w nowoczesną automatykę sterującą w tym najwyższej klasy komponenty marki SIEMENS-SCHNEIDER oraz PLC. T-75 można obsługiwać za pomocą tabletu. Wymiary T-75 są zgodne z międzynarodowymi przepisami o transporcie drogowym, co zapewnia łatwy transport z jednego na drugie miejsce za pomocą ciągnika posiadającego sprzęg z blokadą sworznia. Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia T-75 lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.'
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
                <Route path="/V-80MOBILNEWĘZŁYDOPRODUKCJIPIASKU">
                    <Stationary
                        title='V-80 MOBILNE WĘZŁY DO PRODUKCJI PIASKU'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutImg2={images.Stationary240about1}
                        aboutdescription1='Mobilna kruszarka V-80 zwana także MOBILNĄ LINIĄ DO PRODUKCJI PIASKU to idealne rozwiązanie do produkcji rozdrobnionego surowca takiego, jak piasek o wielkości ziarna 0-5 mm i doskonałym kształcie sześciennym. V-80 jest efektem prac projektowych i wysiłków inżynierów, i została skonstruowana z wysokiej jakości materiałów oraz komponentów charakteryzujących się długą żywotnością i doskonałym wykonaniem. Oprócz surowca przerobionego wstępnie za pomocą kruszarek I i II stopnia, można także użyć surowiec naturalny o wielkości poniżej 40 mm. V-80 zapewnia zadawalające efekty pracy niezależnie od rodzaju surowca i stopnia twardości np. granitu, bazaltu, dolomitu, kruszywa gabrowego, wapienia etc.. Mobilna kruszarka V-80 zapewnia wydajność na poziomie od 150 do 200 t/h zależnie od twardości surowca. Oprócz drobnego surowca (do 5 mm) jednocześnie można uzyskać nawet 3 różne frakcje.'
                        aboutdescription2='Zależnie od potrzeb, do podwozia można zamontować także generator zasilania. V-80 to urządzenie przyjazne dla użytkownika, które cechuje łatwy do wykonania montaż oraz zaledwie kilkugodzinny czas uruchamiania. Zależnie od potrzeb, istnieje możliwość wyposażenia zasobnika kosza zasypowego oraz przenośników w mechanizm hydraulicznego otwierania umożliwiający pracę węzła bez konieczności użycia dodatkowego sprzętu takiego, jak dźwig, ładowarka etc.'
                        aboutdescription3='V-80 jest wyposażona w nowoczesną automatykę sterującą w tym najwyższej klasy komponenty marki SIEMENS-SCHNEIDER oraz PLC. V-80 można obsługiwać za pomocą tabletu. Wymiary V-80 są zgodne z międzynarodowymi przepisami o transporcie drogowym, co zapewnia łatwy transport z jednego na drugie miejsce za pomocą ciągnika. 
                        Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia T-80 lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.'
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
                <Route path="/V-90MOBILNEWĘZŁYDOPRODUKCJIPIASKU">
                    <Stationary
                        title='V-90 MOBILNE WĘZŁY DO PRODUKCJI PIASKU'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutImg2={images.Stationary240about1}
                        aboutdescription1='Mobilna linia do kruszenia i przesiewania V-90 zwana także MOBILNĄ LINIĄ DO PRODUKCJI PIASKU to idealne rozwiązanie do produkcji rozdrobnionego surowca takiego, jak piasek o wielkości ziarna 0-5 mm i doskonałym kształcie sześciennym. V-90 jest efektem prac projektowych i wysiłków inżynierów, i została skonstruowana z wysokiej jakości materiałów oraz komponentów charakteryzujących się długą żywotnością i doskonałym wykonaniem. Oprócz surowca przerobionego wstępnie za pomocą kruszarek I i II stopnia, można także użyć surowiec naturalny o wielkości poniżej 45 mm. V-90 zapewnia zadawalające efekty pracy niezależnie od rodzaju surowca i stopnia twardości np. granitu, bazaltu, dolomitu, kruszywa gabrowego, wapienia etc... V-90 zapewnia wydajność na poziomie od 200 do 250 t/h zależnie od twardości surowca. Oprócz piasku (rozdrobnionego surowca) jednocześnie można uzyskać nawet 3 różne frakcje.'
                        aboutdescription2='Zależnie od potrzeb, do podwozia można zamontować także generator zasilania. V-90 to urządzenie przyjazne dla użytkownika, które cechuje łatwy do wykonania montaż oraz zaledwie kilkugodzinny czas uruchamiania. Zależnie od potrzeb, istnieje możliwość wyposażenia zasobnika kosza zasypowego oraz przenośników w mechanizm hydraulicznego otwierania umożliwiający pracę węzła bez konieczności użycia dodatkowego „esu takiego, jak dźwig, ładowarka etc.'
                        aboutdescription3='V-90 jest wyposażona w nowoczesną automatykę sterującą w tym najwyższej klasy komponenty marki SIEM ENS-SCHNEIDER oraz PLC. V-90 można obsługiwać za pomocą tabletu. Wymiary V-90 są zgodne z międzynarodowymi przepisami o transporcie drogowym, co zapewnia łatwy transport z jednego na drugie miejsce za pomocą ciągnika. 
                        Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia T-90 lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.'
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
                <Route path="/T-100MOBILNEWĘZŁYDOPRODUKCJIPIASKU">
                    <Stationary
                        title='T-100 MOBILNE WĘZŁY DO PRODUKCJI PIASKU'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutImg2={images.Stationary240about1}
                        aboutdescription1='Mobilna linia kruszenia i przesiewania T-100 zwana także MOBILNĄ LINIĄ DO PRODUKCJI PIASKU to idealne rozwiązanie do produkcji rozdrobnionego surowca takiego, jak piasek o wielkości ziarna 0-5 mm i doskonałym kształcie sześciennym. T-100 jest efektem prac projektowych i wysiłków inżynierów, i została skonstruowana z wysokiej jakości materiałów oraz komponentów charakteryzujących się długą żywotnością i doskonałym wykonaniem. Oprócz surowca przerobionego wstępnie za pomocą kruszarek I i II stopnia, można także użyć surowiec naturalny o wielkości poniżej 150 mm. T-100 zapewnia zadawalające efekty pracy niezależnie od rodzaju surowca i stopnia twardości np. granitu, bazaltu, dolomitu, kruszywa gabrowego, wapienia etc.. Mobilna linia do produkcji piasku T-100 zapewnia wydajność na poziomie od 80 do 135 t/h zależnie od twardości surowca. Oprócz ziarna piasku o wielkości 0-5 mm, jednocześnie można uzyskać nawet 3 różne frakcje.'
                        aboutdescription2='Zależnie od potrzeb, do podwozia można zamontować także generator zasilania. T-100 to urządzenie przyjazne dla użytkownika, które cechuje łatwy do wykonania montaż oraz zaledwie kilkugodzinny czas uruchamiania. Zależnie od potrzeb, istnieje możliwość wyposażenia zasobnika kosza zasypowego oraz przenośników w mechanizm hydraulicznego otwierania umożliwiający pracę węzła bez konieczności użycia dodatkowego sprzętu. '
                        aboutdescription3='T-100 jest wyposażona w nowoczesną automatykę sterującą w tym najwyższej klasy komponenty marki SIEMENS-SCHNEIDER oraz PLC. T-100 można obsługiwać za pomocą tabletu. Wymiary T-100 są zgodne z międzynarodowymi przepisami o transporcie drogowym, co zapewnia łatwy transport z jednego na drugie miejsce za pomocą ciągnika posiadającego sprzęg z blokadą sworznia. Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia T-100 lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH. 
                        '
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
                <Route path="/T-120MOBILNEWĘZŁYDOPRODUKCJIPIASKU">
                    <Stationary
                        title='T-120 MOBILNE WĘZŁY DO PRODUKCJI PIASKU'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutImg2={images.Stationary240about1}
                        aboutdescription1='Mobilna linia kruszenia i przesiewania T-120 zwana także MOBILNĄ LINIĄ DO PRODUKCJI PIASKU to idealne rozwiązanie do produkcji rozdrobnionego surowca takiego, jak piasek o wielkości ziarna 0-5 mm i doskonałym kształcie sześciennym. T-120 jest efektem prac projektowych i wysiłków inżynierów, i została skonstruowana z wysokiej jakości materiałów oraz komponentów charakteryzujących się długą żywotnością i doskonałym wykonaniem. Oprócz surowca przerobionego wstępnie za pomocą kruszareklill stopnia, można także użyć surowiec naturalny o wielkości poniżej 150 mm. T-120 zapewnia zadawalające efekty pracy niezależnie od rodzaju surowca i stopnia twardości np. granitu, bazaltu, dolomitu, kruszywa gabrowego, wapienia etc. Mobilna linia do produkcji piasku T-120 zapewnia wydajność na poziomie od 120 do 170 t/h zależnie od twardości surowca. Oprócz ziarna piasku o wielkości 0-5 mm, jednocześnie można uzyskać nawet 3 różne frakcje.'
                        aboutdescription2='Zależnie od potrzeb, do podwozia można zamontować także generator zasilania. T-120 to urządzenie przyjazne dla użytkownika, które cechuje łatwy do wykonania montaż oraz zaledwie kilkugodzinny czas uruchamiania. Zależnie od potrzeb, istnieje możliwość wyposażenia zasobnika kosza zasypowego oraz przenośników w mechanizm hydraulicznego otwierania umożliwiający pracę węzła bez konieczności użycia dodatkowego sprzętu. '
                        aboutdescription3='T-120 jest wyposażona w nowoczesną automatykę sterującą w tym najwyższej klasy komponenty marki SIEMENS-SCHNEIDER oraz PLC. T-120 można obsługiwać za pomocą tabletu. Wymiary T-120 są zgodne z międzynarodowymi przepisami o transporcie drogowym, co zapewnia łatwy transport z jednego na drugie miejsce za pomocą ciągnika posiadającego sprzęg z blokadą sworznia. Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia T-120 lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.
                        '
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
                <Route path="/T-150MOBILNEWĘZŁYDOPRODUKCJIPIASKU">
                    <Stationary
                        title='T-150 MOBILNE WĘZŁY DO PRODUKCJI PIASKU'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutImg2={images.Stationary240about1}
                        aboutdescription1='Mobilna linia kruszenia i przesiewania T-150 zwana takie MOBILNA LINIA DO PRODUKCJI PIASKU to idealne rozwiqzanie do produkcji rozdrobnionego surowca takiego, jak piasek o wielkoki ziarna 0-5 mm i doskonatym ksztafcie szekiennym. T-150 jest efektem prac projektowych i wysilkow iniynierow, i zostala skonstruowana z wysokiej jakoki materialow oraz komponent6w charakteryzujgcych sig diug4 iywotnokig i doskonatym wykonaniem. Oprocz surowca przerobionego wstqpnie za pomoc,4 kruszareklillstopnia, moina takie uiy6 surowiec naturalny o wielkoki poniiej 200 mm. T-150 zapewnia zadawalajgce efekty pracy niezaleinie od rodzaju surowca i stopnia twardoki np. granitu, bazaltu, dolomitu, kruszywa gabrowego, wapienia etc. Mobilna linia do produkcji piasku T-150 zapewnia wydajnok na poziomie od 230 do 250 t/h zaleinie od twardoki surowca. Oprócz ziarna piasku o wielkoki 0-5 mm, jednoczeSnie można uzyskać nawet 3 różne frakcje.'
                        aboutdescription2='Zależnie od potrzeb, do podwozia można zamontować także generator zasilania. T-150 to urządzenie przyjazne dla użytkownika, które cechuje łatwy do wykonania montaż oraz zaledwie kilkugodzinny czas uruchamiania. Zależnie od potrzeb, istnieje możliwość wyposażenia zasobnika kosza zasypowego oraz przenośników w mechanizm hydraulicznego otwierania umożliwiający pracę węzła bez konieczności użycia dodatkowego sprzętu. '
                        aboutdescription3='T-150 jest wyposażona w nowoczesną automatykę sterującą w tym najwyższej klasy komponenty marki SIEMENS-SCHNEIDER oraz PLC. T-150 można obsługiwać za pomocą tabletu. Wymiary T-150 są zgodne z międzynarodowymi przepisami o transporcie drogowym, co zapewnia łatwy transport z jednego na drugie miejsce za pomocą ciągnika posiadającego sprzęg z blokadą sworznia. Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia T-150 lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.'
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
                <Route path="/PI-1MOBILNEKRUSZARKIWAPIENIA">
                    <Stationary
                        title='PI-1 MOBILNE KRUSZARKI WAPIENIA'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutImg2={images.Stationary240about1}
                        aboutdescription1='Mobilna kruszarka PI-1 to idealne rozwiązanie do kruszenia skał i surowców o niskiej twardości i ścierności. Mobilna kruszarka PI-1 jest efektem prac projektowych i wysiłków inżynierów, i została skonstruowana z wysokiej jakości materiałów oraz komponentów charakteryzujących się długą żywotnością i doskonałym wykonaniem.'
                        aboutdescription2='Mobilna kruszarka PI-1 zapewnia wydajność na poziomie od 150 do 200 t/h zależnie od stopnia twardości kruszonego surowca. Maks. wymiary surowca to 850 x 850 mm. Linia jest wyposażona w kruszarkę udarową II stopnia, która zapewnia rozdrobniony surowiec o idealnym sześciennym kształcie, pożądany szczególnie podczas produkcji betonu. Jednocześnie można otrzymać 3 lub 4 różne frakcje. Zależnie od potrzeb, do podwozia można zamontować także generator zasilania. PI-1 to urządzenie przyjazne dla użytkownika, które cechuje łatwy do wykonania montaż oraz krótki czas uruchamiania. Zależnie od potrzeb, istnieje możliwość wyposażenia zasobnika kosza zasypowego oraz przenośników w mechanizm hydraulicznego otwierania umożliwiający pracę kruszarki bez konieczności użycia dodatkowego sprzętu takiego, jak dźwig, czy ładowarka etc.'
                        aboutdescription3='Mobilna kruszarka PI-1 jest wyposażony w zaawansowane technicznie systemy automatyki, w tym wysokiej klasy komponenty elektroniczne i PLC marki SIEMENS i SCHNEIDER. Mobilna kruszarka PI-1 może być sterowana za pomocą tabletu. Wymiary mobilnej kruszarki wapienia PI-1 są zgodne z międzynarodowymi przepisami o transporcie drogowym, co zapewnia łatwy transport z jednego na drugie miejsce. Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia mobilnej kruszarki wapienia PI-1 lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.'
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
                <Route path="/PI-2MOBILNEKRUSZARKIWAPIENIA">
                    <Stationary
                        title='PI-2 MOBILNE KRUSZARKI WAPIENIA'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutImg2={images.Stationary240about1}
                        aboutdescription1='Mobilna kruszarka PI-2 to idealne rozwiązanie do kruszenia skał i surowców o niskiej twardości i ścierności. Mobilna kruszarka PI-2 jest efektem prac projektowych i wysiłków inżynierów, i została skonstruowana z wysokiej jakości materiałów oraz komponentów charakteryzujących się długą żywotnością i doskonałym wykonaniem.'
                        aboutdescription2='Mobilna kruszarka PI-2 zapewnia wydajność na poziomie od 250 do 300 t/h zależnie od stopnia twardości kruszonego surowca. Maks. wymiary surowca to 950 x 950 mm. Linia jest wyposażona w kruszarkę udarową II stopnia, która zapewnia rozdrobniony surowiec o idealnym sześciennym kształcie, pożądany szczególnie podczas produkcji betonu. Jednocześnie można otrzymać 3 lub 4 różne frakcje. Zależnie od potrzeb, do podwozia można zamontować także generator zasilania. PI-1 to urządzenie przyjazne dla użytkownika, które cechuje łatwy do wykonania montaż oraz krótki czas uruchamiania. Zależnie od potrzeb, istnieje możliwość wyposażenia zasobnika kosza zasypowego oraz przenośników w mechanizm hydraulicznego otwierania umożliwiający pracę kruszarki bez konieczności użycia dodatkowego sprzętu takiego, jak dźwig, czy ładowarka etc.'
                        aboutdescription3='Mobilna kruszarka PI-2 jest wyposażony w zaawansowane technicznie systemy automatyki, w tym wysokiej klasy komponenty elektroniczne i PLC marki SIEMENS i SCHNEIDER. Mobilna kruszarka PI-2 może być sterowana za pomocą tabletu. Wymiary mobilnej kruszarki wapienia PI-2 są zgodne z międzynarodowymi przepisami o transporcie drogowym, co zapewnia łatwy transport z jednego na drugie miejsce. Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia mobilnej kruszarki wapienia PI-1 lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.'
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
                <Route path="/STACJONARNEWĘZŁYDOPŁUKANIAIPRZESIEWANIA">
                    <Stationary
                        title='STACJONARNE WĘZŁY DO PŁUKANIA I PRZESIEWANIA'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutdescription1='CONSTMACH oferuje stacjonarne linie do przesiewania i płukania przeznaczone do przesiewania i płukania piasku oraz żwiru. Zaprojektowany układ linii uzależniony jest od pożądanej wydajności, ilości otrzymywanego surowca oraz typu płuczki.'
                        aboutdescription2='Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia linie do przesiewania i płukania kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.'
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
                <Route path="/MOBILNEWĘZŁYDOPŁUKANIAIPRZESIEWANIA">
                    <Stationary
                        title='MOBILNE WĘZŁY DO PŁUKANIA I PRZESIEWANIA'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutdescription1='Mobilna linia do płukania i przesiewania CONSTMACH serii SW umożliwia przesiewanie i płukanie piasku oraz żwiru. Największą zaletą mobilnej linii SW jest możliwość przestawienia, szybki montaż i mała ilość wymaganego miejsca. Całe wymagane wyposażenie do płukania i przesiewania znajduje się na jednym podwoziu na kołach'
                        aboutdescription2='W przeciwieństwie do systemów stacjonarnych, linia ta wymaga zastosowania płuczki śrubowej, aby zapewnić mobilność i kompaktowe rozmiary.'
                        aboutdescription3='Zależnie od potrzeb, do podwozia można zamontować także generator zasilania lub zdemontować płuczkę, jeśli linia będzie służyć wyłącznie do przesiewania. Linie do płukania i przesiewania są wyposażone w nowoczesną automatykę sterującą w tym najwyższej klasy komponenty marki SIEMENS- SCHNEIDER oraz PLC. Każdą linię można obsługiwać za pomocą tabletu. Wymiary linii do płukania i przesiewania są zgodne z międzynarodowymi przepisami o transporcie drogowym, co zapewnia łatwy transport z jednego na drugie miejsce. Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia linii do płukania i przesiewania lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH. '
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
                <Route path="/PŁUCZKIŚRUBOWE">
                    <Stationary
                        title='PŁUCZKI ŚRUBOWE'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutdescription1='Płuczki śrubowe CONSTMACH umożliwiają płukanie drobnego surowca i cechuje je wysoka wydajność, łatwa konserwacja, łatwa wymiana części zamiennych, szybki montaż oraz wysokie parametry pracy. Płuczki śrubowe CONSTMACH przeznaczone są do żwiru, piasku lub tłocznia 05 mm zanieczyszczonego gliną lub miałem.'
                        aboutdescription3='Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia płuczki śrubowej lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH. '
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
                <Route path="/PŁUCZKIKOŁOWE(KUBEŁKOWE)">
                    <Stationary
                        title='PŁUCZKI KOŁOWE (KUBEŁKOWE)'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutdescription1='Płuczki kołowe CONSTMACH zostały zaprojektowane do wypłukiwania gliny z piasku w celu podniesienia jego właściwości użytkowych. Posiadają one prostą konstrukcję, która zapewnia łatwy montaź. Główną zaletą jest mniejsze zużycie energii i wody.'
                        aboutdescription3='Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia płuczek kubełkowych lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH. '
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
                <Route path="/PRZESIEWACZEODWADNIAJĄCEIHYDROCYKLONY">
                    <Stationary
                        title='PRZESIEWACZE ODWADNIAJĄCE I HYDROCYKLONY'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutdescription1='Przesiewacze odwadniające i hydrocyklony są idealnym rozwiązaniem do mycia drobnych materiałów o wielkości do 7 mm. Największą zaletą wyboru przesiewaczy odwadniających i hydrocyklonów w zastosowaniach do mycia materiałów drobnoziarnistych jest zaoszczędzenie cząstek w piasku nawet o wielkości 50 mikronów. Pomaga to użytkownikowi w produkcji zgodnie z dowolnymi wymaganiami projektu, ponieważ utrzymanie zmikronizowanego materiału w piasku po umyciu jest tak trudnym wynikiem w przypadku klasycznych systemów myjących, takich jak śruba, koło itp.'
                        aboutdescription3='Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia przesiewaczy odwadniających lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH. '
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
                <Route path="/BS-20MASZYNYDOBLOCZKÓWBETONOWYCH">
                    <Stationary
                        title='BS-20 MASZYNY DO BLOCZKÓW BETONOWYCH'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutdescription1='BS 20 to automatyczna maszyna z systemem hydraulicznym i sterowaniem PLC, w której skład wchodzi także węzeł betoniarski, której ciśnienie robocze wynosi 100-160 bar. BS 20 zapewnia produkcję w ilości 20 połączonych bloczków na sekundę oraz 8 bloczków o wymiarach 20x40x20. Możliwe jest także pakowanie gotowych produktów za pomocą automatycznego robota odbierającego wyprodukowane bloczki.'
                        aboutdescription3='B5-20 została zaprojektowana w odpowiedzi na oczekiwania średniej wielkości firm produkujących betonowe bloczki. Dzięki niskim kosztom inwestycji oraz skalowalnej konstrukcji, BS-20 to idealne rozwiązanie dla firm zainteresowanych podniesieniem jakości wyrobów z betonu przy ograniczeniu kosztów produkcji. Program automatyki PLC, opracowany przez inżynierów działu badawczo-rozwojowego CONSTMACH dowiódł swojej jakości i niezawodności w wielu przedsiębiorstwach i zakładach produkcyjnych. Praca całej linii odbywa się automatycznie, co zapewnia utrzymanie wysokiej jakości produkcji oraz wydajności na każdej zmianie. Automatyka umożliwia pracę linii z różną prędkością. Panel sterowania sygnalizuje za pomocą grafiki status roboczych wszystkich podzespołów, dzięki czemu obsługa jest łatwa i praktyczna. Operator może w każdej chwili przełączyć linię na pracę w trybie manualnym. Dodatkowo na panelu sterowania sygnalizowane są wszystkie błędy lub usterki, co umożliwia ich szybkie usunięcie. Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia maszyny do produkcji betonowych bloczków BS-20 lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH. '
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
                <Route path="/BS-25MASZYNYDOBLOCZKÓWBETONOWYCH">
                    <Stationary
                        title='BS-25 MASZYNY DO BLOCZKÓW BETONOWYCH'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutdescription1='BS-25 to maszyna specjalnie zaprojektowana, aby zapewnić rozwiązanie najczęściej pojawiających się problemów podczas produkcji betonowej kostki. BS-25 jest zawsze krok przed konkurencją dzięki wszechstronnym możliwościom produkcyjnym. Maszyny wielopoziomowe do produkcji kostki nie nadają się do produkcji kostki różnego rodzaju (otworowej, krawężników itp.), ale dzięki swojej uniwersalnej jedno-poziomowej konstrukcji, BS-25 umożliwia produkcję kostki brukowej, krawężników, kostki otworowej itp. za pomocą instalowanych w maszynie odpowiednich form. Całkowicie skalowalna konstrukcja BS-25 pozwala zaspokoić wymogi inwestora pod kątem oszczędności i tempa pracy szczególnie, gdy pożądana jest wysoka wydajność. '
                        aboutdescription3='Opracowany przez inżynierów z działu badawczo-rozwojowego CONSTMACH program obsługujący automatykę sprawił że, do obsługi całej linii BS-25 konieczna jest tylko 1 osoba. Praca całej linii odbywa się automatycznie, co zapewnia utrzymanie wysokiej jakości produkcji oraz wydajności na każdej zmianie. Automatyka umożliwia pracę linii z różną prędkością. Specjaliści CONSTMACH zaprojektowali tradycyjny panel sterowania PLC o kompaktowych rozmiarach. Takie ostatnio opracowane rozwiązanie zapewnia wiele korzyści gwarantując PLC o najnowszej technologii wraz z ekranem dotykowym LCD oraz łatwym w obsłudze interfejsem graficznym. Automatyka zapewnia także narzędzie do archiwizacji i raportowania. Obsługa linii ma w każdym momencie dostęp do danych o produkcji. Dane takie można także wydrukować za pomocą matrycy punktowej i/lub drukarki atramentowej podłączonej do systemu. Opcjonalnie dostępne jest zdalne podłączenie do automatyki maszyny. Dzięki temu można uzyskać dostęp do system sterowania za pomocą jakiegokolwiek punktu dostępowego LAN i/lub internetu. Zdalny dostęp umożliwia diagnostykę w przypadku jakiejkolwiek awarii systemu oraz aktualizację oprogramowania. WIELKOŚĆ PALETY BS 25'
                        aboutdescription4='Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia maszyny do produkcji bloczków betonowych BS-25 lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH. '
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
                <Route path="/BS-30MASZYNYDOBLOCZKÓWBETONOWYCH">
                    <Stationary
                        title='BS-30 MASZYNY DO BLOCZKÓW BETONOWYCH'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutdescription1='BS-30 to maszyna specjalnie zaprojektowana, aby zapewnić rozwiązanie najczęściej pojawiających się problemów podczas produkcji betonowej kostki. BS-30 jest zawsze krok przed konkurencją dzięki wszechstronnym możliwościom produkcyjnym. Maszyny wielopoziomowe do produkcji kostki nie nadają się do produkcji kostki różnego rodzaju (otworowej, krawężników itp.), ale dzięki swojej uniwersalnej jedno-poziomowej konstrukcji, BS-30 umożliwia produkcję kostki brukowej, krawężników, kostki otworowej itp. za pomocą instalowanych w maszynie odpowiednich form. Całkowicie skalowalna konstrukcja BS-30 pozwala zaspokoić wymogi inwestora pod kątem oszczędności i tempa pracy, szczególnie gdy pożądana j est wysoka wydajność.'
                        aboutdescription3='Opracowany przez inżynierów z działu badawczo-rozwojowego CONSTMACH program obsługujący automatykę sprawił że, do obsługi całej linii B5-30 konieczna jest tylko 1 osoba. Praca całej linii odbywa się automatycznie, co zapewnia utrzymanie wysokiej jakości produkcji oraz wydajności na każdej zmianie. Automatyka umożliwia pracę linii z różną prędkością. Specjaliści CONSTMACH zaprojektowali tradycyjny panel sterowania PLC o kompaktowych rozmiarach. Takie ostatnio opracowane rozwiązanie zapewnia wiele korzyści gwarantując PLC o najnowszej technologii wraz z ekranem dotykowym LCD oraz łatwym w obsłudze interfejsem graficznym. Automatyka zapewnia także narzędzie do archiwizacji i raportowania. Obsługa linii ma w każdym momencie dostęp do danych o produkcji. Dane takie można także wydrukować za pomocą matrycy punktowej i/lub drukarki atramentowej podłączonej do systemu. Opcjonalnie dostępne jest zdalne podłączenie do automatyki maszyny. Dzięki temu można uzyskać dostęp do system sterowania za pomocą jakiegokolwiek punktu dostępowego LAN i/lub internetu. Zdalny dostęp umożliwia diagnostykę w przypadku jakiejkolwiek awarii systemu oraz aktualizację oprogramowania. Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia maszyny do produkcji bloczków betonowych 13S-30 lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH. '
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
                <Route path="/BS-36MASZYNYDOBLOCZKÓWBETONOWYCH">
                    <Stationary
                        title='BS-36 MASZYNY DO BLOCZKÓW BETONOWYCH'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutdescription1='BS-36 to maszyna specjalnie zaprojektowana, aby zapewnić rozwiązanie najczęściej pojawiających się problemów podczas produkcji betonowej kostki. BS-36 jest zawsze krok przed konkurencją dzięki wszechstronnym możliwościom produkcyjnym. Maszyny wielopoziomowe do produkcji kostki nie nadają się do produkcji kostki różnego rodzaju (otworowej, krawężników itp.), ale dzięki swojej uniwersalnej jedno-poziomowej konstrukcji, BS-36 umożliwia produkcję kostki brukowej, krawężników, kostki otworowej itp. za pomocą instalowanych w maszynie odpowiednich form. Całkowicie skalowalna konstrukcja BS-36 pozwala zaspokoić wymogi inwestora pod kątem oszczędności i tempa pracy, szczególnie gdy pożądana jest wysoka wydajność. '
                        aboutdescription3='Opracowany przez inżynierów z działu badawczo-rozwojowego CONSTMACH program obsługujący automatykę sprawił że, do obsługi całej linii BS-36 konieczna jest tylko 1 osoba. Praca całej linii odbywa się automatycznie, co zapewnia utrzymanie wysokiej jakości produkcji oraz wydajności na każdej zmianie. Automatyka umożliwia pracę linii z różną prędkością. Specjaliści CONSTMACH zaprojektowali tradycyjny panel sterowania PLC o kompaktowych rozmiarach. Takie ostatnio opracowane rozwiązanie zapewnia wiele korzyści gwarantując PLC o najnowszej technologii wraz z ekranem dotykowym LCD oraz łatwym w obsłudze interfejsem graficznym. Automatyka zapewnia także narzędzie do archiwizacji i raportowania. Obsługa linii ma w każdym momencie dostęp do danych o produkcji. Dane takie można także wydrukować za pomocą matrycy punktowej i/lub drukarki atramentowej podłączonej do systemu. 

                        Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia maszyny do produkcji bloczków betonowych BS-36 lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.'
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
                <Route path="/BS-42MASZYNYDOBLOCZKÓWBETONOWYCH">
                    <Stationary
                        title='BS-42 MASZYNY DO BLOCZKÓW BETONOWYCH'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutdescription1='BS 42 to automatyczna maszyna z systemem hydraulicznym i sterowaniem PLC, w której skład wchodzi także węzeł betoniarski, o ciśnieniu roboczym wynoszącym 100-160 bar. W skład linii wchodzi także automat odbierający. Z tego powodu wyprodukowane wyroby wymagają dłuższego suszenia oraz odpowiedniej ilości drewnianych palet. Linia umożliwia użycie wózka widłowego lub automatycznej maszyny do przewożenia wyrobów. Ponadto węzeł betoniarski wykorzystywany do suchej zaprawy może także służyć do zaprawy mokrej.'
                        aboutdescription3='Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia maszyny do produkcji betonowych bloczków BS-42 lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH. '
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
                <Route path="/PRZEJEZDNAMASZYNADOPRODUKCJIPUSTAKÓW">
                    <Stationary
                        title='PRZEJEZDNA MASZYNA DO PRODUKCJI PUSTAKÓW'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutdescription1='Przejezdna maszyna do produkcji pustaków, która cechuje się wysoka wydajnością przy zapewnieniu oszczędności i praktycznego użycia. System ten eliminuje konieczność zapewnienia palet podczas produkcji pustaków. Chociaż maszyna jest obsługiwana przez jedna osobę, to zapewnia ona wysoką wydajność podczas produkcji pustaków. Z uwagi na konstrukcję, łatwość obsługi i minimalne koszty inwestycji jest to idealne rozwiązanie dla przedsiębiorców i małych firm w sektorze budowlanym. Maszynę można wyposażyć w specjalny mechanizm umożliwiający produkcję ocieplanych pustaków. Jest to przejezdna, sterowana manualnie maszyna do produkcji pustaków o różnym kształcie i wymiarach, zależnie od formy zamontowanej na maszynie, a jednym ograniczeniem są wymiary ramy maszyny. Podczas produkcji wyroby betonowe są ustawiane w prostej linii na płaskim podłożu. Do produkcji nie są konieczne palety. Cała linia składa się z głównej maszyny, zestawu silosów na kruszywo 4x10 m3 oraz zespołu łączącego, jednego mieszalnika z łopatkami spiralnymi o wydajności 600 l/cykl oraz transporterów taśmowych. Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia przejezdnej maszyny do produkcji pustaków lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH. 
                        '
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
                <Route path="/CS-75SILOSYNACEMENT">
                    <Stationary
                        title='CS-75 SILOSY NA CEMENT'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutImg2={images.Stationary240about1}
                        aboutImg3={images.Stationary240about1}
                        aboutdescription1='Silosy na cement CONSTMACH CS-75 o pojemności 75 ton są szeroko stosowane w węzłach betoniarskich i maszynach do produkcji bloczków betonowych, czy też w innych zastosowaniach. Silosy CS-75 są dostępne w wersji z konstrukcją spawaną lub skręcaną. Do transportu 2 silosów CS-75 o skręcanej konstrukcji wymagana jest jedynie naczepa lub kontener 40 ft OT. Silosy CONSTMACH CS-75 są wyposażone w platformę do konserwacji znajdującą się między nogami, rurę leju zasypowego, wewnętrzne i zewnętrzne włazy, osłony zabezpieczające, kołnierz dachowy filtra powietrza i zaworu bezpieczeństwa, zasuwę dachową wewnętrznego włazu a także stożkowy kołnierz przepustnicy motylkowej. '
                        aboutdescription2='Silosy CONSTMACH CS-75 są dostarczane wraz z całym wyposażeniem takim, jak przenośnik śrubowy cementu o długości i średnicy dostosowanej do potrzeb, filtr powietrza, zawór bezpieczeństwa, wskaźnik niskiego i wysokiego poziomu, dysze napowietrzające, zawór pulsacyjny i przepustnica motylkowa do manualnego wyładunku cementu.'
                        aboutdescription3='W przypadku konstrukcji skręcanej, wszystkie elementy dostarczanych w częściach silosów są produkowane z wykorzystaniem precyzyjnego cięcia laserowego i wiercenia. Precyzyjne wykonanie sprawia, że montaż w miejscu pracy jest łatwy i szybki.'
                        aboutdescription4='Powierzchnie elementów są pokryte 1 powłoką farby antykorozyjnej oraz 2 powłokami FARBY EPOKSYDOWEJ, zapewniając powłokę o grubości całkowitej 140 mikronów. Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia silosu CS-75 lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH. '
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
                <Route path="/CS-100SILOSYNACEMENT">
                    <Stationary
                        title='CS-100 SILOSY NA CEMENT'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutImg2={images.Stationary240about1}
                        aboutImg3={images.Stationary240about1}
                        aboutdescription1='Silosy na cement CONSTMACH CS-100 o pojemności 100 ton są szeroko stosowane w węzłach betoniarskich i maszynach do produkcji bloczków betonowych, czy też w innych zastosowaniach. Silosy CS-100 są dostępne w wersji z konstrukcją spawaną lub skręcaną. Do transportu 2 silosów CS-100 o skręcanej konstrukcji wymagana jest jedynie naczepa lub kontener 40 ft OT. Silosy CONSTMACH CS-100 są wyposażone w platformę do konserwacji znajdującą się między nogami, rurę leju zasypowego, wewnętrzne i zewnętrzne włazy, osłony zabezpieczające, kołnierz dachowy filtra powietrza i zaworu bezpieczeństwa, zasuwę dachową wewnętrznego włazu a także stożkowy kołnierz przepustnicy motylkowej. '
                        aboutdescription2='Silosy CONSTMACH CS-100 są dostarczane wraz z całym wyposażeniem takim, jak przenośnik śrubowy cementu o długości i średnicy dostosowanej do potrzeb, filtr powietrza, zawór bezpieczeństwa, wskaźnik niskiego i wysokiego poziomu, dysze napowietrzające, zawór pulsacyjny i przepustnica motylkowa do manualnego wyładunku cementu. '
                        aboutdescription3='W przypadku konstrukcji skręcanej, wszystkie elementy dostarczanych w częściach silosów są produkowane z wykorzystaniem precyzyjnego cięcia laserowego i wiercenia. Precyzyjne wykonanie sprawia, że montaż na miejscu jest łatwy i szybki. '
                        aboutdescription4='W przypadku konstrukcji skręcanej, wszystkie elementy dostarczanych w częściach silosów są produkowane z wykorzystaniem precyzyjnego cięcia laserowego i wiercenia. Precyzyjne wykonanie sprawia, że montaż na miejscu jest łatwy i szybki.'
                        aboutdescription5='Powierzchnie elementów są pokryte 1 powłoką farby antykorozyjnej oraz 2 powłokami FARBY EPOKSYDOWEJ, zapewniając powłokę o grubości całkowitej 140 mikronów. Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia silosu CS-100 lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.'
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
                <Route path="/CS-200SILOSYNACEMENT">
                    <Stationary
                        title='CS-200 SILOSY NA CEMENT'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutImg2={images.Stationary240about1}
                        aboutImg3={images.Stationary240about1}
                        aboutdescription1='Silosy na cement CONSTMACH CS-200 o pojemności 200 ton to idealne rozwiązanie dla węzłów betoniarskich o wysokiej wydajności oraz wszędzie tam, gdzie kluczową rolę odgrywa przechowywanie cementu. Silosy CONSTMACH CS-200 są wyposażone w platformę do konserwacji znajdującą się między nogami, rurę leju zasypowego, wewnętrzne i zewnętrzne włazy, osłony zabezpieczające, kołnierz dachowy filtra powietrza i zaworu bezpieczeństwa, zasuwą dachową wewnętrznego włazu a także stożkowy kołnierz przepustnicy motylkowej. Silosy CONSTMACH CS-200 są dostarczane wraz z całym wyposażeniem takim, jak przenośnik śrubowy cementu o długości i średnicy dostosowanej do potrzeb, filtr powietrza, zawór bezpieczeństwa, wskaźnik niskiego i wysokiego poziomu, dysze napowietrzające, zawór pulsacyjny i przepustnica motylkowa do manualnego wyładunku cementu.'
                        aboutdescription2='Silosy CONSTMACH CS-200 są dostarczane wraz z całym wyposażeniem takim, jak przenośnik śrubowy cementu o długości i średnicy dostosowanej do potrzeb, filtr powietrza, zawór bezpieczeństwa, wskaźnik niskiego i wysokiego poziomu, dysze napowietrzające, zawór pulsacyjny i przepustnica motylkowa do manualnego wyładunku cementu.'
                        aboutdescription3='Wszystkie elementy dostarczanych w częściach silosów na cement CS-200 o skręcanej konstrukcji są produkowane z wykorzystaniem precyzyjnego cięcia laserowego i wiercenia. Precyzyjne wykonanie sprawia, że montaż na miejscu jest łatwy i szybki. '
                        aboutdescription4='Wszystkie obliczenia obciążenia statycznego i mechanicznego silosów C5-200 są wykonywane za pomocą programu ANSYS Workbench CAE a każdy silos umożliwia przechowywanie w każdych warunkach nawet 200 ton cementu lub podobnego surowca bez ryzyka deformacji'
                        aboutdescription5='Powierzchnie elementów są pokryte 1 powłoką farby antykorozyjnej oraz 2 powłokami FARBY EPOKSYDOWEJ, zapewniając powłokę o grubości całkowitej 140 mikronów. Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia silosu CS-200 lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.'
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
                <Route path="/CS-300SILOSYNACEMENT">
                    <Stationary
                        title='CS-300 SILOSY NA CEMENT'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutImg2={images.Stationary240about1}
                        aboutImg3={images.Stationary240about1}
                        aboutdescription1='Silosy na cement CONSTMACH CS-300 o pojemności 300 ton to idealne rozwiązanie dla węzłów betoniarskich o wysokiej wydajności oraz wszędzie tam, gdzie kluczową rolę odgrywa przechowywanie cementu. Silosy CONSTMACH CS-300 są wyposażone w platformę do konserwacji znajdującą się między nogami, rurę leju zasypowego, wewnętrzne i zewnętrzne włazy, osłony zabezpieczające, kołnierz dachowy filtra powietrza i zaworu bezpieczeństwa, zasuwą dachową wewnętrznego włazu a także stożkowy kołnierz przepustnicy motylkowej.'
                        aboutdescription2='Silosy CONSTMACH CS-300 są dostarczane wraz z całym wyposażeniem takim, jak przenośnik śrubowy cementu o długości i średnicy dostosowanej do potrzeb, filtr powietrza, zawór bezpieczeństwa, wskaźnik niskiego i wysokiego poziomu, dysze napowietrzające, zawór pulsacyjny i przepustnica motylkowa do manualnego wyładunku cementu.'
                        aboutdescription3='Wszystkie elementy dostarczanych w częściach silosów na cement CS-300 o skręcanej konstrukcji są produkowane z wykorzystaniem precyzyjnego cięcia laserowego i wiercenia. Precyzyjne wykonanie sprawia, że montaż na miejscu jest łatwy i szybki. '
                        aboutdescription4='Wszystkie obliczenia obciążenia statycznego i mechanicznego silosów CS-300 są wykonywane za pomocą programu ANSYS Workbench CAE a każdy silos umożliwia przechowywanie w każdych warunkach nawet 300 ton cementu lub podobnego surowca bez ryzyka deformacji.'
                        aboutdescription5='Powierzchnie elementów są pokryte 1 powłoką farby antykorozyjnej oraz 2 powłokami FARBY EPOKSYDOWEJ, zapewniając powłokę o grubości całkowitej 140 mikronów. Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia silosu CS-300 lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.'
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
                <Route path="/CS-500SILOSYNACEMENT">
                    <Stationary
                        title='CS-500 SILOSY NA CEMENT'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutImg2={images.Stationary240about1}
                        aboutImg3={images.Stationary240about1}
                        aboutdescription1='Silosy CONSTMACH CS-500 o pojemności 500 ton to idealne rozwiązanie do węzłów betoniarskich o bardzo dużej wydajności i zapotrzebowaniu na dużą ilość cementu oraz magazynów cementu, cementowni oraz przechowywania miału wapiennego. Silosy CONSTMACH CS-500 są wyposażone w platformę do konserwacji znajdującą się między nogami, rurę leju zasypowego, wewnętrzne i zewnętrzne włazy, osłony zabezpieczające, kołnierz dachowy filtra powietrza i zaworu bezpieczeństwa, zasuwą dachową wewnętrznego włazu a także stożkowy kołnierz przepustnicy motylkowej.'
                        aboutdescription2='Silosy CONSTMACH CS-500 są dostarczane wraz z całym wyposażeniem takim, jak przenośnik śrubowy cementu o długości i średnicy dostosowanej do potrzeb, filtr powietrza, zawór bezpieczeństwa, wskaźnik niskiego i wysokiego poziomu, dysze napowietrzające, zawór pulsacyjny i przepustnica motylkowa do manualnego wyładunku cementu. W przypadku silosów przeznaczonych na magazyny cementu lub do podobnych zastosowań, możliwy jest montaż przenośnika śrubowego w celu załadunku cementu na pojazdy.'
                        aboutdescription3='Wszystkie elementy dostarczanych w częściach silosów na cement CS-500 o skręcanej konstrukcji są produkowane z wykorzystaniem precyzyjnego cięcia laserowego i wiercenia. Precyzyjne wykonanie sprawia, że montaż na miejscu jest łatwy i szybki.'
                        aboutdescription4='Wszystkie obliczenia obciążenia statycznego i mechanicznego silosów C5-500 są wykonywane za pomocą programu ANSYS Workbench CAE a każdy silos umożliwia przechowywanie w każdych warunkach nawet 300 ton cementu lub podobnego surowca bez ryzyka deformacji. '
                        aboutdescription5='Powierzchnie elementów są pokryte 1 powłoką farby antykorozyjnej oraz 2 powłokami FARBY EPOKSYDOWEJ, zapewniając powłokę o grubości całkowitej 140 mikronów. Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia silosu CS-500 lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.'
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
                <Route path="/CS-1000SILOSYNACEMENT">
                    <Stationary
                        title='CS-1000 SILOSY NA CEMENT'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutImg2={images.Stationary240about1}
                        aboutImg3={images.Stationary240about1}
                        aboutdescription1='Silosy CONSTMACH CS-1000 o konstrukcji skręcanej i pojemności 1000 ton to idealne rozwiązanie do magazynowania cementu, cementowni oraz przechowywania miału wapiennego. Silosy CONSTMACH CS-1000 są wyposażone w platformę do konserwacji znajdującą się między nogami, rurę leju zasypowego, wewnętrzne i zewnętrzne włazy, osłony zabezpieczające, kołnierz dachowy filtra powietrza i zaworu bezpieczeństwa, zasuwą dachową wewnętrznego włazu a także stożkowy kołnierz przepustnicy motylkowej.'
                        aboutdescription2='Silosy CONSTMACH CS-1000 są dostarczane wraz z całym wyposażeniem takim, jak przenośnik śrubowy cementu o długości i średnicy dostosowanej do potrzeb, filtr powietrza, zawór bezpieczeństwa, wskaźnik niskiego i wysokiego poziomu, dysze napowietrzające, zawór pulsacyjny i przepustnica motylkowa do manualnego wyładunku cementu. W przypadku silosów przeznaczonych na magazyny cementu lub do podobnych zastosowań, możliwy jest montaż przenośnika śrubowego w celu załadunku cementu na pojazdy. '
                        aboutdescription3='Wszystkie elementy dostarczanych w częściach silosów na cement CS-1000 o skręcanej konstrukcji są produkowane z wykorzystaniem precyzyjnego cięcia laserowego i wiercenia. Precyzyjne wykonanie sprawia, że montaż na miejscu jest łatwy i szybki.'
                        aboutdescription4='Wszystkie obliczenia obciążenia statycznego i mechanicznego silosów CS-1000 są wykonywane za pomocą programu ANSYS Workbench CAE a każdy silos umożliwia przechowywanie w każdych warunkach nawet 1000 ton cementu lub podobnego surowca bez ryzyka deformacji. '
                        aboutdescription5='Powierzchnie elementów są pokryte 1 powłoką farby antykorozyjnej oraz 2 powłokami FARBY EPOKSYDOWEJ, zapewniając powłokę o grubości całkowitej 140 mikronów. Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia silosu CS-1000 lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH. '
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
                <Route path="/CS-2000SILOSYNACEMENT">
                    <Stationary
                        title='CS-2000 SILOSY NA CEMENT'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutImg2={images.Stationary240about1}
                        aboutImg3={images.Stationary240about1}
                        aboutdescription1='Silosy CONSTMACH CS-2000 o konstrukcji skręcanej i pojemności 2000 ton to idealne rozwiązanie do magazynowania cementu, cementowni oraz przechowywania miału wapiennego. Silosy CONSTMACH CS-2000 są wyposażone w platformę do konserwacji znajdującą się między nogami, rurę leju zasypowego, wewnętrzne i zewnętrzne włazy, osłony zabezpieczające, kołnierz dachowy filtra powietrza i zaworu bezpieczeństwa, zasuwą dachową wewnętrznego włazu a także stożkowy kołnierz przepustnicy motylkowej.'
                        aboutdescription2='Silosy CONSTMACH CS-2000 są dostarczane wraz z całym wyposażeniem takim, jak przenośnik śrubowy cementu o długości i średnicy dostosowanej do potrzeb, filtr powietrza, zawór bezpieczeństwa, wskaźnik niskiego i wysokiego poziomu, dysze napowietrzające, zawór pulsacyjny i przepustnica motylkowa do manualnego wyładunku cementu. W przypadku silosów przeznaczonych na magazyny cementu lub do podobnych zastosowań, możliwy jest montaż przenośnika śrubowego w celu załadunku cementu na pojazdy. '
                        aboutdescription3='Wszystkie elementy dostarczanych w częściach silosów na cement CS-2000 o skręcanej konstrukcji są produkowane z wykorzystaniem precyzyjnego cięcia laserowego i wiercenia. Precyzyjne wykonanie sprawia, że montaż na miejscu jest łatwy i szybki.'
                        aboutdescription4='Wszystkie obliczenia obciążenia statycznego i mechanicznego silosów CS-2000 są wykonywane za pomocą programu ANSYS Workbench CAE a każdy silos umożliwia przechowywanie w każdych warunkach nawet 1000 ton cementu lub podobnego surowca bez ryzyka deformacji.'
                        aboutdescription5='Powierzchnie elementów są pokryte 1 powłoką farby antykorozyjnej oraz 2 powłokami FARBY EPOKSYDOWEJ, zapewniając powłokę o grubości całkowitej 140 mikronów. Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia silosu CS-2000 lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.'
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
                <Route path="/CS-3000SILOSYNACEMENT">
                    <Stationary
                        title='CS-3000 SILOSY NA CEMENT'
                        mainImg={images.Stationary240main}
                        aboutImg1={images.Stationary240about1}
                        aboutImg2={images.Stationary240about1}
                        aboutImg3={images.Stationary240about1}
                        aboutdescription1='Silosy CONSTMACH CS-3000 o konstrukcji skręcanej i pojemności 3000 ton to idealne rozwiązanie do magazynowania cementu, cementowni oraz przechowywania miału wapiennego. Silosy CONSTMACH CS-3000 są wyposażone w platformę do konserwacji znajdującą się między nogami, rurę leju zasypowego, wewnętrzne i zewnętrzne włazy, osłony zabezpieczające, kołnierz dachowy filtra powietrza i zaworu bezpieczeństwa, zasuwą dachową wewnętrznego włazu a także stożkowy kołnierz przepustnicy motylkowej.'
                        aboutdescription2='Silosy CONSTMACH C5-3000 są dostarczane wraz z całym wyposażeniem takim, jak przenośnik śrubowy cementu o długości i średnicy dostosowanej do potrzeb, filtr powietrza, zawór bezpieczeństwa, wskaźnik niskiego i wysokiego poziomu, dysze napowietrzające, zawór pulsacyjny i przepustnica motylkowa do manualnego wyładunku cementu. W przypadku silosów przeznaczonych na magazyny cementu lub do podobnych zastosowań, możliwy jest montaż przenośnika śrubowego w celu załadunku cementu na pojazdy.'
                        aboutdescription3='Wszystkie elementy dostarczanych w częściach silosów na cement CS-3000 o skręcanej konstrukcji są produkowane z wykorzystaniem precyzyjnego cięcia laserowego i wiercenia. Precyzyjne wykonanie sprawia, że montaż na miejscu jest łatwy i szybki.'
                        aboutdescription4='Wszystkie obliczenia obciążenia statycznego i mechanicznego silosów CS-3000 są wykonywane za pomocą programu ANSYS Workbench CAE a każdy silos umożliwia przechowywanie w każdych warunkach nawet 3000 ton cementu lub podobnego surowca bez ryzyka deformacji.'
                        aboutdescription5='Powierzchnie elementów są pokryte 1 powłoką farby antykorozyjnej oraz 2 powłokami FARBY EPOKSYDOWEJ, zapewniając powłokę o grubości całkowitej 140 mikronów. Kliknij odpowiednią zakładkę, aby wyświetlić dodatkowe informacje o konfiguracji, transporcie oraz zdjęcia silosu CS-3000 lub kliknij zakładkę ZAPYTANIE, aby wysłać zapytanie do CONSTMACH.'
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
                </Route> */}




            </Switch>
        </div>

    )
}
