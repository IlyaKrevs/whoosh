import React from 'react'
import styles from './FromToIcons.module.scss'

export const FromToIcons = () => {
    return (
        <div className={styles.iconsContainer}>

            <div className={styles.circlesContainer}>
                <div className={[styles.circle, styles.first].join(' ')}>
                    <div className={[styles.circle, styles.second].join(' ')}>
                        <div className={[styles.circle, styles.third].join(' ')}>

                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.pointsContainer}>
                {new Array(7).fill(null).map(i => {
                    return <div className={styles.point}></div>
                })}
            </div>

            <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6C12 9.31371 6 16 6 16C6 16 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6Z" fill="#FFD600" />
            </svg>

        </div>
    )
}
