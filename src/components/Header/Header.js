import React from 'react';

import {Link} from 'react-router-dom';

import './Header.css'

const Header =() => {
    return (
        <div className = 'Header'>
           <h1>
                <Link to = '/'><img src = 'https://img.wfolio.ru/wfolio/sites/6212/assets/1544617974_1ee0b7/18640a07080118d80410641203706e67.png?auth=e11a2f08f7e2fd8bd8aedd5c6ccb0cd652b2acca71b49450dfe63d6aaabbbc80'></img></Link>
            </h1>
            <ul className ='d-flex main_nav'>
                <li>
                    <Link to ='/'>ГЛАВНАЯ</Link>
                </li>
                <li>
                    <Link to ='/portfolio'>
                        <div class="dropdown">
                            <a class="btn btn-secondary dropdown-toggle toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                ПОРТФОЛИО
                            </a>
                        <div class="dropdown-menu open_menu" aria-labelledby="dropdownMenuLink">
                        <Link to ='/portfolio/svadbu'><li class="dropdown-item">- Свадьбы</li></Link>
                        <Link to ='/portfolio/lovestory'><li class="dropdown-item">- Love Story</li></Link>
                        <Link to ='/portfolio/semeinie'><li class="dropdown-item">- Семейные</li></Link>
                        <Link to ='/portfolio/vipuskniki_9_class'><li class="dropdown-item">- Выпускники 9 класс</li></Link>
                        <Link to ='/portfolio/vipuskniki_11_class'><li class="dropdown-item">- Выпускники 11 класс</li></Link>
                        </div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to ='/uslugi'>УСЛУГИ</Link>
                </li>
                <li>
                    <Link to ='/istorii'>ИСТОРИИ</Link>
                </li>
                <li>
                    <Link to ='/contacti'>КОНТАКТЫ</Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;