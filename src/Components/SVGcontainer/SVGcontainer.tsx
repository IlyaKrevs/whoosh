import React, { FC } from 'react'
import styles from './SVGcontainer.module.scss'


type Colors = 'red' | 'blue' | 'yellow'

interface IProps {
    svgIcon: React.ReactNode,
    specialColor?: Colors,
    withHover?: boolean,

}

const colorsOjb: { [key in Colors]: string } = {
    red: styles.redColor,
    blue: styles.blueColor,
    yellow: styles.yellowColor,
}

export const SVGcontainer: FC<IProps> = ({ svgIcon, specialColor, withHover = false }) => {

    let resultStyle = []

    specialColor && resultStyle.push(colorsOjb[specialColor])
    withHover && resultStyle.push(styles.grayHover)

    return (
        <div className={resultStyle.join(' ')} >
            {svgIcon}
        </div>
    )
}
