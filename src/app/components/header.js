import React from 'react';

export class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li className="nav-item active"><a className="nav-link" href="#">Home</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    };
}