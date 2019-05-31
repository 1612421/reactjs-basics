import React from "react";
import { render } from "react-dom";

import { Header } from './components/header';
import { Home } from './components/home';

class App extends React.Component {
    render() {
        const user = {
            name: 'Nguyễn Ngọc Nghĩa',
            hobbies: ['Game', 'film', 'coding']
        };

        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1">
                        <Header/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-10 offset-1">
                        <Home name={"Nghĩa"} age={21} user={user}>
                            <p>This is paragraph!</p>
                        </Home>
                    </div>
                </div>
            </div>
        );
    };
}

render(<App/>, window.document.getElementById('app'));