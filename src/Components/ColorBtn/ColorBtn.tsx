import React, { FC } from 'react'

import styles from './ColorBtn.module.scss'

type colorStyle = 'blue' | 'yellow'

interface IProps {
    text: string,
    viewStyle: colorStyle
}

let colorObj: { [key in colorStyle]: string } = {
    blue: styles.blueStyle,
    yellow: styles.yellowStyle
}

export const ColorBtn: FC<IProps> = ({ text, viewStyle }) => {

    let resultStyles = [styles.mainContainer]


    resultStyles.push(colorObj[viewStyle])

    return (
        <button
            className={resultStyles.join(' ')}
            onClick={(e) => e.preventDefault()}
        >
            {text}
        </button>
    )
}


