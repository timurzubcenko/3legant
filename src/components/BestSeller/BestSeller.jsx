import React from 'react'
import s from './BestSeller.module.scss'
import Card from '../Card/Card';
import img from '../../assets/3.jpg'

const BestSeller = () => {
    return (
        <section className={s.section}>
            <div className={`${s.in_section} container`}>
                <h2 className={s.title}>Best Seller</h2>
                <div className={s.cards}>
                    <Card img={img} />
                    <Card img={img} />
                    <Card img={img} />
                    <Card img={img} />
                    <Card img={img} />
                    <Card img={img} />
                    <Card img={img} />
                    <Card img={img} />
                </div>
            </div>
        </section>
    );
};
export default BestSeller