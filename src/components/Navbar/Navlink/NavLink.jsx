import React from 'react';
import styles from './NavLink.module.css';
import {NavLink} from "react-router-dom";

const Navlink = (props) => {
    return(
            <div className = {styles.item}>
                <NavLink to={props.link.link} activeClassName={styles.activeLink} onClick={props.onClick}>{props.link.title}</NavLink>
            </div>
    )
};

export default Navlink;