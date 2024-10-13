import React, { FC } from 'react'
import styles from './VideoItem.module.scss'

import videoIMG from '../../assets/video.png'

import { ReactComponent as PlayIcon } from '../../assets/play.svg'

interface IProps {

}

export const VideoItem: FC<IProps> = ({ }) => {
    return (
        <div className={styles.mainContainer}>
            <img src={videoIMG} alt="videoIMG" />

            <div className={styles.btnContainer}>
                <PlayIcon />
            </div>
        </div>
    )
}
