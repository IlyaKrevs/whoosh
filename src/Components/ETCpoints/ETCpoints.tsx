import React, { FC } from 'react'
import styles from './ETCpoints.module.scss'

interface IProps {

}

export const ETCpoints: FC<IProps> = ({ }) => {

    let points = []

    for (let i = 0; i < 3; i++) {
        points.push(<div key={i} className={styles.point}></div>)
    }

    return (
        <div className={styles.mainContainer}>
            {points}
        </div>
    )
}

