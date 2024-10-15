import React, { FC } from 'react'
import styles from './LoginBtn.module.scss'

import lockImg from '../../assets/lock.svg'

interface IProps {

}


export const LoginBtn: FC<IProps> = () => {
    return (
        <div className={styles.mainContinaer}>
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M5 0C3.02756 0 1 1.67893 1 3.75V5H0.714286C0.319797 5 0 5.33579 0 5.75V11.25C0 11.6642 0.319797 12 0.714286 12H9.28571C9.6802 12 10 11.6642 10 11.25V5.75C10 5.33579 9.6802 5 9.28571 5H9V3.75C9 1.67893 6.97244 0 5 0ZM5 2C3.81653 2 3 3 3 3.75V5H7V3.75C7 3 6.18347 2 5 2Z" fill="white" />
            </svg>
        </div>
    )
}
