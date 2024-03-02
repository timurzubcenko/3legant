import React from 'react'
import s from './Section1.module.scss'

const Section1 = () => {
    return (
        <section className={s.section}>
            <div className={`${s.in_section} container`}>
                <div className={s.dop_div}></div>
                <div className={s.text}>
                    <h1>Listen to <br /> the <span>amazing</span> music sound.</h1>
                    <p>Experience music like never before</p>
                    <div className={s.btn}>
                        Shopping Now
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Section1