import React, {useState, useEffect} from 'react';
import '../Header/Header.css';


function Header(props) {
    console.log(props.currensy[26])
    return(
        <header id="header" className='header'>
            <span className='header__date'>Дата обміну <strong>{ props.currensy[26].exchangedate }</strong></span>
            <div className='header__block-usd header-block'>
                <span>{ props.currensy[26].cc } - <strong>{ props.currensy[26].rate.toFixed(2) }</strong></span>
            </div>
            <div className='header__block-usd header-block'>
                <span>{ props.currensy[32].cc } - <strong>{ props.currensy[32].rate.toFixed(2) }</strong></span>
            </div>
            
        </header>
    );
}

export default Header;