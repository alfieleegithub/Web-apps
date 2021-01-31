import React, { Component } from "react";
import MainContainer from './MainContainer';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = { fields: ["Languages", "DBMSs", "Frameworks", "Platforms", "Others", "OSs"], lists: ["HTML, CSS, JavaScript, PHP, Java, C, C++, C#, Python, SQL, TypeScript", "MySQL, Oracle, Postgres, MongoDB", "jQuery, Bootstrap 4, React, Angular, Vue, Knockout, Express.js", "Node.js, AS/400, ExpressionEngine", " RWD, AWS, Heroku, Git version control, Ajax, Web/REST APIs", "MacOS, Windows, Linux"] };
    }

    render() {
        return (
            <main className="container-fluid">
                    <div className="row px-4 py-5">
                        <div className="col-12 col-md-6 text-center text-md-left">
                            <img src={require("./images/Alfie.jpg")} alt="Profile" className="profile pb-5" />
                            <h2 className="subtitle">Software/Full-Stack Devloper</h2>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="pt-5">
                                <h3 className="subtitle">Features of this website: </h3>
                                <ul className="features">
                                    <li>Use React components.</li>
                                    <li>SPA (Single Page Application) achieved by React Router.</li>
                                    <li>Responsive. This website is mobile-friendly.</li>
                                    <li>Allow users to contact me through the contact page.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {this.state.fields.map((value, index) => {
                            return (
                                <div key={index} className="col-lg-2 col-md-4 col-6 d-flex px-0">
                                    <figure className="fig">
                                        <img src={require("./images/" + value + ".jpg")} alt={value} className={this.state.fields[index] === 'Platforms' ? 'platforms fig-img img-fluid' : 'fig-img img-fluid'} />
                                        <figcaption className="fig-cap">
                                            <h3 className="h6 py-1 m-0">{value === 'Platforms' ? 'Platforms & CMS' : value}:</h3>
                                            <p className="py-1 m-0">{this.state.lists[index]}</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            )
                        })}
                    </div>
                </main>
        )
    }
}

export default About;