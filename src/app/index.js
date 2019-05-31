import React from "react";
import { render } from "react-dom";

import { Header } from './components/header';
import { Home } from './components/home';

class App extends React.Component {
    onGreet() {
        alert('Hello!');
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1">
                        <Header homeLink={'Home'}/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-10 offset-1">
                        <Home name={"Nghĩa"} initialAge={21} greet={this.onGreet}/>
                    </div>
                </div>
            </div>
        );
    };
}

render(<App/>, window.document.getElementById('app'));