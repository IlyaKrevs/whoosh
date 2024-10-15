import React, { FC } from 'react'
import styles from './TitleAndDescription.module.scss'

interface IProps {
    title: string,
    desc: string,
}

export const TitleAndDescription: FC<IProps> = ({ title, desc }) => {
    return (
        <div className={styles.titleContainer}>
            <h2>
                {title}
            </h2>
            <p>
                {desc}
            </p>
        </div>
    )
}
