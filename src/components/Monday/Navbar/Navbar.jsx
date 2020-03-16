import React from "react";
import styles from "./Navbar.module.css";
import Navlink from "./Navlink/NavLink";

class Navbar extends React.Component {

    state = {
        activeLink: "",
    };

    activeLinkFunction = (e) => {
        this.setState({
            activeLink: e.currentTarget.textContent,
    })
    };

    render = () => {
        let NavLinks = this.props.dayOfWeek.map((link) => {
            return (<Navlink
                link={link}
                onClick={this.activeLinkFunction}
            />);
        });
        return (
            <nav className={styles.nav}>
                {NavLinks}
            </nav>);
    };
}

export default Navbar;