import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

export default function Navbar({id}) {
    function addZero(id) {
        return id.toString().padStart(3, "0");
    }

    return (
        <nav className={styles.navbar}>
                <ul>
                    <li><NavLink to={`/pokemon/${parseInt(id) - 1}`}>#{id && addZero(parseInt(id - 1))}</NavLink></li>
                    <li><NavLink to={`/pokemon/${parseInt(id) + 1}`}>#{id && addZero(parseInt(id + 1))}</NavLink></li>
                </ul>
        </nav>
    );
}