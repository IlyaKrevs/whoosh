import React, { FC } from 'react'
import styles from './SVGcontainer.module.scss'

interface IProps {
    svgIcon: React.ReactNode,
    specialColor?: string,
    withHover?: boolean,
}

export const SVGcontainer: FC<IProps> = ({ svgIcon, specialColor, withHover = false }) => {

    let resultStyle = [styles.mainContainer, styles.iconSize]

    return (
        <svg className={resultStyle.join(' ')} xmlns="http://www.w3.org/2000/svg">
            {svgIcon}
        </svg>
    )
}



