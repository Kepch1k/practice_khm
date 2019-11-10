import React from 'react';
import style from './StartPage.module.scss';
import Header from '../../components/commonToAll/Header/Header';
import HeaderBottom from '../../components/commonToAll/HeaderBottom/HeaderBottom';
import Banner from '../../components/StartPageComponents/Banner/Banner';
import Footer from '../../components/commonToAll/Footer/footer';
import WhySquadhelp from '../../components/StartPageComponents/WhySquadhelp/WhySquadhelp';
import Socket from '../../api/socket';


function StartPage() {

    return (
        <div className={style.body}>
            <Socket/>
            <Header/>
            <HeaderBottom/>
            <Banner/>
            <WhySquadhelp/>
                {"aasda"}
            {/*<GrowBusiness/>*/}
            {/*<HowItWorksHome/>*/}
            <Footer/>
        </div>
    );
}

export default StartPage;
