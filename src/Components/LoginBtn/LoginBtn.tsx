import React, { FC } from 'react'
import styles from './LoginBtn.module.scss'

import lockImg from '../../assets/Lock.png'

interface IProps {

}


export const LoginBtn: FC<IProps> = () => {
    return (
        <div className={styles.mainContinaer}>
            <img src={lockImg} alt="lockImg" />
        </div>
    )
}
