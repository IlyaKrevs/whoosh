import React from 'react'
import styles from './TrackCard.module.scss'
import { CustomSearchInput } from '../CustomSearchInput/CustomSearchInput'



export const TrackCard = () => {
    return (
        <div className={styles.mainContainer}>
            <h3 className={styles.title}>
                Track a package
            </h3>
            <CustomSearchInput />
        </div>
    )
}


