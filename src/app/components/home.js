import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            changeLink: props.initialLinkName
        };

        setTimeout(() => {
            this.setState({
                status: 1
            });
        }, 3000);

        console.log('constructor');
    }

    componentWillMount() {
        console.log('Component will mount');
    }

    componentDidMount() {
         console.log('Component did mount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('Component will receive props', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should component update', nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component will update', nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component did update', prevProps, prevState);
    }

    componentWillUnmount() {
        console.log('Component will unmount');
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
    }

    onChangeLink() {
        this.props.changeLink(this.state.changeLink);
    }

    onHandleChange(event) {
        this.setState({
            changeLink: event.target.value
        });
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
                <input type="text" value={this.state.changeLink} onChange={(event) => this.onHandleChange(event)} />
                <button className="btn btn-primary" onClick={this.onChangeLink.bind(this)}>Change Header Link</button>
            </div>
        );
    };
}

Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
    greet: PropTypes.func,
    initialLinkName: PropTypes.string
}