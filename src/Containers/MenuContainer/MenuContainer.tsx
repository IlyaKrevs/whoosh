import React, { FC, useEffect, useRef, useState } from 'react'
import styles from './MenuContainer.module.scss'
import { CustomSearchInput } from '../../Components/CustomSearchInput/CustomSearchInput'
import { NavBarText } from '../../Components/Texts/NavBarText/NavBarText'
import { ColorBtn } from '../../Components/ColorBtn/ColorBtn'


interface IProps {

}

export const MenuContainer: FC<IProps> = ({ }) => {

    const [isShow, setIsShow] = useState<boolean>(false)

    const menuRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {

        const clickOutHandler = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setIsShow(false)
            }
        }

        document.addEventListener('click', clickOutHandler)

        return () => {
            document.removeEventListener('click', clickOutHandler)
        }
    }, [])


    let menuStyles = [styles.menuContainer]
    isShow && menuStyles.push(styles.isOpen)


    return (
        <div ref={menuRef}>
            <div className={styles.openMenuBtn}
                onClick={() => setIsShow(true)}
            >
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 11C6 10.4477 6.44772 10 7 10H17C17.5523 10 18 10.4477 18 11C18 11.5523 17.5523 12 17 12H7C6.44772 12 6 11.5523 6 11Z" fill="#C2D2F4" />
                    <path d="M6 11C6 10.4477 6.44772 10 7 10H17C17.5523 10 18 10.4477 18 11C18 11.5523 17.5523 12 17 12H7C6.44772 12 6 11.5523 6 11Z" fill="#B7C6E7" />
                    <path d="M0 6C0 5.44772 0.447715 5 1 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7H1C0.447716 7 0 6.55228 0 6Z" fill="#C2D2F4" />
                    <path d="M0 6C0 5.44772 0.447715 5 1 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7H1C0.447716 7 0 6.55228 0 6Z" fill="#B7C6E7" />
                    <path d="M0 1C0 0.447715 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1C18 1.55228 17.5523 2 17 2H1C0.447716 2 0 1.55228 0 1Z" fill="#C2D2F4" />
                    <path d="M0 1C0 0.447715 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1C18 1.55228 17.5523 2 17 2H1C0.447716 2 0 1.55228 0 1Z" fill="#B7C6E7" />
                </svg>

            </div>
            <div

                className={menuStyles.join(' ')}>

                <div className={styles.cityText}>
                    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 6C11 6.57825 10.721 7.43892 10.1734 8.50282C9.6424 9.53439 8.92352 10.6362 8.18814 11.6588C7.45537 12.6777 6.72044 13.5984 6.1676 14.2653C6.10961 14.3353 6.05367 14.4024 6 14.4665C5.94633 14.4024 5.89039 14.3353 5.8324 14.2653C5.27956 13.5984 4.54463 12.6777 3.81186 11.6588C3.07648 10.6362 2.3576 9.53439 1.82663 8.50282C1.27902 7.43892 1 6.57825 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z" stroke="#C2D2F4" strokeWidth="2" />
                        <path d="M11 6C11 6.57825 10.721 7.43892 10.1734 8.50282C9.6424 9.53439 8.92352 10.6362 8.18814 11.6588C7.45537 12.6777 6.72044 13.5984 6.1676 14.2653C6.10961 14.3353 6.05367 14.4024 6 14.4665C5.94633 14.4024 5.89039 14.3353 5.8324 14.2653C5.27956 13.5984 4.54463 12.6777 3.81186 11.6588C3.07648 10.6362 2.3576 9.53439 1.82663 8.50282C1.27902 7.43892 1 6.57825 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z" stroke="#B7C6E7" strokeWidth="2" />
                    </svg>

                    <NavBarText innerText='NY, Manhattan' />

                    <div onClick={() => setIsShow(false)}
                        className={styles.closeBtn}>
                        <span className={styles.first}></span>
                        <span className={styles.second}></span>


                    </div>
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

                <div className={styles.btnWrapper}>
                    <ColorBtn viewStyle='blue' text='Take a complex order' />
                </div>
            </div>
        </div>
    )
}
