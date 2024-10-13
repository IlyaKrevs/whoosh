import React, { FC } from 'react'
import styles from './NavBarText.module.scss'


interface IProps {
    innerText: string,
}

export const NavBarText: FC<IProps> = ({ innerText }) => {
    return (
        <span className={styles.mainContainer}>
            {innerText}
        </span>
    )
}

