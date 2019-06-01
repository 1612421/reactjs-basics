import React from "react";
import { render } from "react-dom";

import { Header } from './components/header';
import { Home } from './components/home';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            homeLink: 'Home'
        };
    }

    onGreet() {
        alert('Hello!');
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-10 offset-1">
                        <Home name={"Nghĩa"} 
                            initialAge={21} 
                            greet={this.onGreet} 
                            changeLink={this.onChangeLinkName.bind(this)}
                            initialLinkName={this.state.homeLink}/>
                    </div>
                </div>
            </div>
        );
    };
}

render(<App/>, window.document.getElementById('app'));