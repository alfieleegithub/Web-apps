
import React, { Component } from "react";
import NavBar from './NavBar';

class MainContainer extends Component {
    render() {
        return (
            <div>
                <NavBar />
                {this.props.children}
            </div>
        )
    }
}

export default MainContainer;