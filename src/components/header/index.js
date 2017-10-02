import React from 'react';
import { Link } from 'react-router';

// import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    static path = '/';

    render() {
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">React JS  SPA</a>
                    </div>

                    <ul className="nav navbar-nav">
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/contacts">Контакты</Link></li>
                        <li><Link to="/list">Список</Link></li>
                        <li><Link to="/cont">Страница ошибки</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}
