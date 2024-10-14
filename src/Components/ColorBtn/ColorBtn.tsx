import React, { FC } from 'react'

import styles from './ColorBtn.module.scss'

type colorStyle = 'blue' | 'yellow'

interface IProps {
    text: string,
    viewStyle: colorStyle
}



export const ColorBtn: FC<IProps> = ({ text, viewStyle }) => {

    let resultStyles = [styles.mainContainer]

    if (viewStyle === 'blue') {
        resultStyles.push(styles.blueStyle)
    } else if (viewStyle === 'yellow') {
        resultStyles.push(styles.yellowStyle)
    }

    return (
        <button
            className={resultStyles.join(' ')}
            onClick={(e) => e.preventDefault()}
        >
            {text}
        </button>
    )
}


