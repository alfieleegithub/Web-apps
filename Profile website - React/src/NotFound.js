import React, { Component } from "react";
import MainContainer from './MainContainer';

class NotFound extends Component {
    render() {
        return (
            <MainContainer>
                <main className="container-fluid">
                    <div className="row">
                        <div className="col-12 px-4 py-4">
                            <h1> Page Not Found</h1>
                        </div>
                    </div>
                </main>
            </MainContainer>
        )
    }
}

export default NotFound;