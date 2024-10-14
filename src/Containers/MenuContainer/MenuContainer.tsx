import React, { FC } from 'react'
import styles from './MenuContainer.module.scss'
import { CustomSearchInput } from '../../Components/CustomSearchInput/CustomSearchInput'
import { NavBarText } from '../../Components/Texts/NavBarText/NavBarText'


interface IProps {

}

export const MenuContainer: FC<IProps> = ({ }) => {
    return (
        <>
            <div className={''}></div>
            <div className={styles.menuContainer}>

                <div className={styles.cityText}>
                    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 6C11 6.57825 10.721 7.43892 10.1734 8.50282C9.6424 9.53439 8.92352 10.6362 8.18814 11.6588C7.45537 12.6777 6.72044 13.5984 6.1676 14.2653C6.10961 14.3353 6.05367 14.4024 6 14.4665C5.94633 14.4024 5.89039 14.3353 5.8324 14.2653C5.27956 13.5984 4.54463 12.6777 3.81186 11.6588C3.07648 10.6362 2.3576 9.53439 1.82663 8.50282C1.27902 7.43892 1 6.57825 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z" stroke="#C2D2F4" stroke-width="2" />
                        <path d="M11 6C11 6.57825 10.721 7.43892 10.1734 8.50282C9.6424 9.53439 8.92352 10.6362 8.18814 11.6588C7.45537 12.6777 6.72044 13.5984 6.1676 14.2653C6.10961 14.3353 6.05367 14.4024 6 14.4665C5.94633 14.4024 5.89039 14.3353 5.8324 14.2653C5.27956 13.5984 4.54463 12.6777 3.81186 11.6588C3.07648 10.6362 2.3576 9.53439 1.82663 8.50282C1.27902 7.43892 1 6.57825 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z" stroke="#B7C6E7" stroke-width="2" />
                    </svg>

                    <NavBarText innerText='NY, Manhattan' />
                </div>


                <CustomSearchInput />

                <nav className={styles.navbarContainer}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <NavBarText innerText='Send a Parcel' />
                        </li>
                        <li className={styles.navItem}>
                            <NavBarText innerText='Become a Courier' />
                        </li>
                        <li className={styles.navItem}>
                            <NavBarText innerText='Affiliate Program' />
                        </li>
                        <li className={styles.navItem}>
                            <NavBarText innerText='Help & Support' />
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}