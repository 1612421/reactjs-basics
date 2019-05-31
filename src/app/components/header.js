import React from 'react';

export const Header = (props) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li className="nav-item active"><a className="nav-link" href="#">{props.homeLink}</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}