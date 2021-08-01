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
                { addZero(parseInt(id - 1)) <= 0 
                    ? <li><NavLink className={styles.link} to={`/pokemon/898`}>#898</NavLink></li>
                    : <li><NavLink className={styles.link} to={`/pokemon/${parseInt(id) - 1}`}>#{id && addZero(parseInt(id - 1))}</NavLink></li> 
                }
                { addZero(parseInt(id + 1)) >= 899
                    ?  <li><NavLink className={styles.link} to={`/pokemon/1`}>#001</NavLink></li>
                    : <li><NavLink className={styles.link} to={`/pokemon/${parseInt(id) + 1}`}>#{id && addZero(parseInt(id + 1))}</NavLink></li> 
                }
            </ul>
        </nav>
    );
}