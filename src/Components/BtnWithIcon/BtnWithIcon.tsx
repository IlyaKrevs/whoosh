import React, { FC } from 'react'
import styles from './BtnWithIcon.module.scss'


interface IProps {
    iconSVG: React.ReactNode,
    innerText: string,
}

export const BtnWithIcon: FC<IProps> = ({ innerText, iconSVG }) => {
    return (
        <div className={styles.mainContainer}>
            {iconSVG}
            <span className={styles.text}>
                {innerText}
            </span>
        </div>
    )
}

