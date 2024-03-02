import React from 'react'
import s from './Card.module.scss'
import { StarFill } from 'react-bootstrap-icons'

const Card = ({ img }) => {
    return (
        <div className={s.arrivals_card}>
            <div className={s.image}>
                <img src={img} alt="" />
                <div className={s.new}>NEW</div>
                <div className={s.btn}>Add to cart</div>
            </div>
            <div className={s.starts}>
                <StarFill />
                <StarFill />
                <StarFill />
                <StarFill />
                <StarFill />
            </div>
            <h3 className={s.title}>
                Skullcandy - Crusher anc 2 wireless headphones
            </h3>
            <p className={s.price}>$299.99</p>
        </div>
    );
};
export default Card