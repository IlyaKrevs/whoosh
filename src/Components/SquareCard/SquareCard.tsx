import React, { FC } from 'react'
import styles from './SquareCard.module.scss'

import { ReactComponent as MyIcon } from '../../assets/courierIcon.svg'
import { ReactComponent as RouteIcon } from '../../assets/Route.svg'
interface IProps {
    titleText: string,
    desc: string,
    svgIcon: React.ReactNode,
    isShowRoute?: boolean,
}




export const SquareCard: FC<IProps> = ({ titleText, desc, svgIcon, isShowRoute = false }) => {
    return (
        <article className={styles.mainContainer}>
            <header className={styles.title}>
                {titleText}
            </header>

            <div className={styles.secondContainer}>
                <div className={styles.imgContainer}>
                    {svgIcon}
                </div>
                {isShowRoute && <RouteIcon />}
            </div>
            <div className={styles.descriptionText}>
                {desc}
            </div>
        </article>
    )
}
