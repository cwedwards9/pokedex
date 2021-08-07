import React, { useEffect } from "react";
import styles from "./PokemonStats.module.scss";

interface Props {
    stat: any
}

export const PokemonStats: React.FC<Props> = ({stat}) => {
    useEffect(() => {
        // grab li elements in stat list
        let pStat = document.querySelectorAll(`#${stat.stat.name} li`);

        // divide stat by 10, round to nearest whole
        let statNum = Math.round(stat.base_stat / 10);
        statNum = (statNum > 15) ?  15 : statNum;

        // set class equal to variable
        let blue = styles.blue;

        // loop through lis and style the amount equal to the stat val (starting from last li)
        for(let i = 0; i < statNum; i++) {
            pStat[14 - i].classList.add(blue);
        }
    }, [stat.stat.name, stat.base_stat]);

    // use js to create li elements
    let list = [];
    for(let i = 0; i <= 14; i++) {
        list.push(<li></li>);
    }

    return (
        <div className={styles.stat}>
            <ul id={stat.stat.name}>
                {list}
            </ul>
            <p className={styles.statName}>{stat.stat.name}</p>
            <p>{stat.base_stat}</p>
        </div>
    );
}