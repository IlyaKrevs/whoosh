import React, { FC } from 'react'

import styles from './Logo.module.scss'
import logoImg from '../../assets/logoDefault.svg'

interface IProps {

}

export const Logo: FC<IProps> = () => {
    return (
        <div className={styles.mainContainer}>
            <img
                className={styles.logo}
                src={logoImg}
                alt="logoImg"
            />
        </div>
    )
}

