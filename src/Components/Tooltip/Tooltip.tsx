import React, { FC } from 'react'
import styles from './Tooltip.module.scss'

interface IProps {

}


export const Tooltip: FC<IProps> = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.btnContainer}>
                <span className={styles.point}></span>
                <span className={styles.line}></span>
            </div>

            <div className={styles.tooltipContainer}>
                A commission is a piece of work that someone is asked to do and is paid for.
            </div>
        </div>
    )
}


