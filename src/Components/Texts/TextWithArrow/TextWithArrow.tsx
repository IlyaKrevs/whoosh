import React, { FC } from 'react'
import styles from './TextWithArrow.module.scss'

interface IProps {
    innerText: string,
}

export const TextWithArrow: FC<IProps> = ({ innerText }) => {
    return (
        <span className={styles.textContainer}>
            {innerText}
            <span className={styles.arrowContainer}></span>
        </span>
    )
}

