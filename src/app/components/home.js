import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: props.initialAge,
            status: 0,
            changeLink: 'Change Link'
        }
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
    }

    onChangeLink() {
        this.props.changeLink(this.state.changeLink);
    }

    render() {
        return (
            <div>
                <p>In a new component</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <hr/>
                <button className="btn btn-primary" onClick={this.onMakeOlder.bind(this)}>Make me older!</button>
                <hr/>
                <button className="btn btn-primary" onClick={this.props.greet}>Greet</button>
                <hr/>
                <button className="btn btn-primary" onClick={this.onChangeLink.bind(this)}>Change Header Link</button>
            </div>
        );
    };
}

Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
    greet: PropTypes.func
}