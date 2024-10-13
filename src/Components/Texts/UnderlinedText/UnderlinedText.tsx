import React, { FC } from 'react'
import styles from './UnderlinedText.module.scss'


interface IProps {
    innerText: string,
}



export const UnderlinedText: FC<IProps> = ({ innerText }) => {
    return (
        <span className={styles.mainContainer}>
            {innerText}
        </span>
    )
}



