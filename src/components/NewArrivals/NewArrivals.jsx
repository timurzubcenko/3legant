import React from 'react'
import s from './NewArrivals.module.scss'
import img1 from '../../assets/3.jpg'
import img2 from '../../assets/4.jpg'
import img3 from '../../assets/5.jpg'
import img4 from '../../assets/6.jpg'
import img5 from '../../assets/7.jpg'
import { useState } from 'react'
import { StarFill } from 'react-bootstrap-icons'
import Card from '../Card/Card'

const NewArrivals = () => {

    const [statusDot, setStatusDot] = useState(1)

    const clickDot = (dot) => {
        setStatusDot(dot)
    }

    return (
        <section className={s.section}>
            <div className={`${s.in_section}`}>
                <div className={`${s.arrivals_row} container`}>
                    <h2>New Arrivals</h2>
                    <div className={s.dots}>
                        <div onClick={() => clickDot(1)} className={`${s.dot} ${statusDot === 1 ? s.active : ''}`}></div>
                        <div onClick={() => clickDot(2)} className={`${s.dot} ${statusDot === 2 ? s.active : ''}`}></div>
                        <div onClick={() => clickDot(3)} className={`${s.dot} ${statusDot === 3 ? s.active : ''}`}></div>
                    </div>
                </div>
                <div className={s.cards_scroll}>
                    <div className={`${s.arrivals_cards} container`}>
                        <Card img={img1} />
                        <Card img={img2} />
                        <Card img={img3} />
                        <Card img={img4} />
                        <Card img={img5} />
                        <Card img={img5} />
                        <Card img={img5} />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default NewArrivals