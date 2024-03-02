import React from 'react'
import s from './Header.module.scss'
import { AirplaneEngines, Search, Backpack4Fill, ArrowRight, PersonFill, Percent } from 'react-bootstrap-icons'
import { useState } from 'react';

const Header = () => {

    const [stateMenu, setStateMenu] = useState(false)

    const activateMenu = () => {
        setStateMenu(!stateMenu)
    }

    return (
        <header className={s.header}>
            <div className={s.info_header}>
                <p><Percent />30% off storewide — Limited time!</p>
                <div className={s.btn}>Shop now <ArrowRight /></div>
            </div>
            <div className={s.main_header}>
                <div className={`${s.in_main_header} container`}>
                    <h2>3legant.</h2>
                    <div onClick={activateMenu} className={`${s.header_burger} ${stateMenu ? s.active : ''}`}>
                        <span></span>
                    </div>
                    <nav className={`${s.header_menu} ${stateMenu ? s.active : ''}`}>
                        <ul className={s.header_list}>
                            <li className={s.header_link}>Home</li>
                            <li className={s.header_link}>Shop</li>
                            <li className={s.header_link}>Product</li>
                            <li className={s.header_link}>Contact Us</li>
                        </ul>
                        <div className={`${s.btns_in_menu}`}>
                            <i><Search /></i>
                            <i><PersonFill /></i>
                            <i className={s.bag}><Backpack4Fill /> <p>2</p></i>
                        </div>
                    </nav>
                    <div className={s.btns}>
                        <i><Search /></i>
                        <i><PersonFill /></i>
                        <i className={s.bag}><Backpack4Fill /> <p>2</p></i>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header