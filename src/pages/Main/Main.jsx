import React from 'react'
import s from './Main.module.scss'
import Header from '../../components/Header/Header';
import Section1 from '../../components/Section1/Section1';
import NewArrivals from '../../components/NewArrivals/NewArrivals';
import ShopCollection from '../../components/ShopCollection/ShopCollection'
import BestSeller from '../../components/BestSeller/BestSeller';
import Promotion from '../../components/Promotion/Promotion';

const Main = () => {
    return (
        <div className={s.main}>
            <Header />
            <Section1 />
            <NewArrivals />
            <ShopCollection />
            <BestSeller />
            <Promotion />
        </div>
    );
};
export default Main