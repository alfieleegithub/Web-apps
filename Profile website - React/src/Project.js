import React, { Component } from "react";

class Project extends Component {

    render() {
        return (
            <main className="container-fluid">
                    <div className="row">
                        <div className="col-12 px-4 py-5">
                            <h2 className="subtitle">Online Employee Record System:</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-xl-6 text-center px-4 pb-5">
                            <a href="http://hungmenglee-angular.herokuapp.com/employees" target="_blank" rel="noopener noreferrer">
                                <img src={require("./images/ERS.png")} alt="Employee Record System" className="text-center w-75" />
                            </a>
                        </div>
                        <div className="col-12 col-xl-6 px-4 pb-5">
                            <div className="px-5">
                                <h3 className="subtitle">Features of this online employee record system: </h3>
                                <ul className="features">
                                    <li>Use Angular components.</li>
                                    <li>SPA (Single Page Application).</li>
                                    <li>Allow users to use keywords to search.</li>
                                    <li>Allow users to update data. This website works with a web API using HttpClient’s get and put requests.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </main>
        )
    }
}

export default Project;