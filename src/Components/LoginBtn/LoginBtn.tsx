import React, { FC } from 'react'
import styles from './LoginBtn.module.scss'

import lockImg from '../../assets/lock.svg'

interface IProps {
    svgIcon: React.ReactNode;
}


export const LoginBtn: FC<IProps> = ({ svgIcon }) => {
    return (
        <div className={styles.mainContinaer}>
            {svgIcon}
        </div>
    )
}

