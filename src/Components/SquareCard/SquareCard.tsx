import React, { FC } from 'react'
import styles from './SquareCard.module.scss'


import { ReactComponent as RouteIcon } from '../../assets/Route.svg'
import { SVGcontainer } from '../SVGcontainer/SVGcontainer'

export interface ISquareCard {
    id: number,
    titleText: string | React.ReactNode,
    desc: string,
    svgIcon: React.ReactNode,
    isShowRoute?: boolean,
    isSpecialStyle?: boolean,
}



export const SquareCard: FC<ISquareCard> = ({ titleText, desc, svgIcon, isShowRoute = false, isSpecialStyle = false }) => {
    return (
        <article className={[styles.mainContainer, isSpecialStyle ? styles.containerSpecial : ''].join(' ')}>
            <header className={[styles.title, isSpecialStyle ? styles.titleSpecialOrder : ''].join(' ')}>
                {titleText}
            </header>

            <div className={[styles.secondContainer, isSpecialStyle ? styles.svgSpecialOrder : ''].join(' ')}>
                <div className={styles.imgContainer}>
                    <SVGcontainer
                        svgIcon={svgIcon}
                        specialColor='red'
                    />
                </div>
                {isShowRoute && <RouteIcon />}
            </div>
            <div className={styles.descriptionText}>
                {desc}
            </div>
        </article>
    )
}

