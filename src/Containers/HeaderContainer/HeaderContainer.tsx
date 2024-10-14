import React, { FC } from 'react'
import styles from './HeaderContainer.module.scss'
import { Logo } from '../../Components/Logo/Logo'
import { LoginBtn } from '../../Components/LoginBtn/LoginBtn'
import { NavBarText } from '../../Components/Texts/NavBarText/NavBarText'
import { CustomSearchInput } from '../../Components/CustomSearchInput/CustomSearchInput'
import { MenuContainer } from '../MenuContainer/MenuContainer'


interface IProps {

}

export const HeaderContainer: FC<IProps> = ({ }) => {
    return (
        <div className={styles.wrapper}>

            <header className={styles.mainContainer}>

                <div className={styles.logo}>
                    <Logo />
                </div>
                <div className={styles.menu}>
                    <MenuContainer />
                </div>
                <div className={styles.login}>
                    <LoginBtn />
                </div>

            </header>
        </div>
    )
}


