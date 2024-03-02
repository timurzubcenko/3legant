import React from 'react'
import s from './ShopCollection.module.scss'
import img1 from '../../assets/1_1.jpg'

const ShopCollection = () => {
    return (
        <section className={s.section}>
            <div className={`${s.in_section} container`}>
                <h2 className={s.title}>Shop Collection</h2>
                <div className={s.cards}>
                    <div className={`${s.card} ${s.card_tall}`}>
                        <div className={s.text}>
                            <h2>Headband</h2>
                            <p>Collection</p>
                        </div>
                    </div>
                    <div className={`${s.card} ${s.card_2}`}>
                        <div className={s.text}>
                            <h2>Earbuds</h2>
                            <p>Collection</p>
                        </div>
                    </div>
                    <div className={`${s.card} ${s.card_3}`}>
                        <div className={s.text}>
                            <h2>Accessories</h2>
                            <p>Collection</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ShopCollection