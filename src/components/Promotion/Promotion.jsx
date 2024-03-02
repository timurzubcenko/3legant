import React from 'react'
import s from './Promotion.module.scss'
import img from '../../assets/9.jpg'

const Promotion = () => {
    return (
        <section className={s.section}>
            <div className={s.img}>
                <img src={img} alt="" />
            </div>
            <div className={s.info}>
                <h4>PROMOTION</h4>
                <h2 className={s.title}>Hurry up! 40% OFF</h2>
                <p className={s.text}>Thousands of high tech are waiting for you</p>
                <h5>Offer expires in:</h5>
                <div className={s.dates}>
                    <div className={`${s.data} ${s.day}`}>
                        <div className={s.div}>02</div>
                        <p>Days</p>
                    </div>
                    <div className={`${s.data} ${s.hours}`}>
                        <div className={s.div}>12</div>
                        <p>Hours</p>
                    </div>
                    <div className={`${s.data} ${s.minutes}`}>
                        <div className={s.div}>45</div>
                        <p>Minutes</p>
                    </div>
                    <div className={`${s.data} ${s.second}`}>
                        <div className={s.div}>05</div>
                        <p>Second</p>
                    </div>
                </div>
                <div className={s.btn}>Shop now</div>
            </div>
        </section>
    );
};
export default Promotion