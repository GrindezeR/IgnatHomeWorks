import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from './Header.module.css';
import arrow from './pages/images/arrow.png';

function Header() {
    return (
        <div className={s.wrapper}>
            <div className={s.navWrapper}>
                {/*add NavLinks*/}
                <NavLink activeClassName={s.active} className={s.link} to={PATH.PRE_JUNIOR}>PRE-JUNIOR</NavLink>
                <NavLink activeClassName={s.active} className={s.link} to={PATH.JUNIOR}>JUNIOR</NavLink>
                <NavLink activeClassName={s.active} className={s.link} to={PATH.JUNIOR_PLUS}>JUNIOR+</NavLink>
                <img src={arrow} className={s.icon} width={'30px'} alt={'NavBar'}/>
            </div>
        </div>
    )
}

export default Header
