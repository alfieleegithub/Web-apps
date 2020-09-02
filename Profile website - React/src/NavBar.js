
import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
    componentDidMount() {
        document.querySelector(".btn-show").addEventListener("click", () => {
            document.querySelector("body").classList.toggle("menu-show");
            let btn = document.querySelector(".btn-show");
            if (btn.innerHTML === "Menu") {
                btn.innerHTML = "&#215;";
                let navBtns = document.querySelectorAll(".menu li");
                for (const navBtn of navBtns) {
                    navBtn.addEventListener("click", (e) => {
                        document.querySelector("body").classList.remove("menu-show");
                        btn.innerHTML = "Menu";
                    })
                }
            } else {
                btn.innerHTML = "Menu";
            }
        })
    }

    render() {
        return (
            <header className="container-fluid fixed-top">
                <div className="row justify-content-between">
                    <div className="col-8 col-md-5">
                        <h1 className="logo px-4"><Link to="/">Hung-Meng Lee</Link></h1>
                    </div>
                    <button className="btn-show px-4">Menu</button>
                    <div className="col-12 col-md-7">
                        <ul className="menu justify-content-end">
                            <li><Link to="/">About <span className="sr-only">(current)</span></Link></li>
                            <li><Link to="/project">Project</Link></li>
                            <li className="contact"><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default NavBar;