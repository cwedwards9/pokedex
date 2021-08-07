import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

interface Props {
    id: number;
}

export const Navbar: React.FC<Props> = ({id}) => {
    function addZero(id: number) {
        return id.toString().padStart(3, "0");
    }

    let lowerNum = addZero(id - 1);
    let upperNum = addZero(id + 1);

    return (
        
        <nav className={styles.navbar}>
            <ul>
                { parseInt(lowerNum) <= 0 
                    ? <li><NavLink className={styles.link} to={`/pokemon/898`}>#898</NavLink></li>
                    : <li><NavLink className={styles.link} to={`/pokemon/${id - 1}`}>#{id && addZero(id - 1)}</NavLink></li> 
                }
                { parseInt(upperNum) >= 899
                    ?  <li><NavLink className={styles.link} to={`/pokemon/1`}>#001</NavLink></li>
                    : <li><NavLink className={styles.link} to={`/pokemon/${id + 1}`}>#{id && addZero(id + 1)}</NavLink></li> 
                }
            </ul>
        </nav>
    );
}