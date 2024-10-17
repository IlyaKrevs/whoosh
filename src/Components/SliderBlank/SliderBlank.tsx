import React, { FC } from 'react'
import styles from './SliderBlank.module.scss'
import 'swiper/css';
import 'swiper/css/bundle';


import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react'
import { FreeMode, Navigation } from 'swiper/modules'

interface IProps {
    withPagination: boolean,
    items: React.ReactNode[],
    spaceBetween: number,
    perView: number,
}



export const SliderBlank: FC<IProps> = ({ withPagination, items, spaceBetween, perView }) => {

    let modulesArr = [FreeMode]
    withPagination && modulesArr.push(Navigation)

    let swiperConfig: SwiperProps = {
        modules: modulesArr,
        navigation: {
            prevEl: '.' + styles.leftArrow,
            nextEl: '.' + styles.rightArrow,
        },
        slidesPerView: perView,
        spaceBetween: spaceBetween,
    }

    let content = items.map((item, i) => (
        <SwiperSlide
            key={i + 'FIX_ID_FIX'}
        >
            <div
                className={styles.wrapper}
                key={i + 'NO_ID'}
            >
                <div className={styles.wrapperPos}>

                    {item}
                </div>
            </div>
        </SwiperSlide>
    ))



    return (
        <div className={styles.mainContainer}>
            {withPagination && <div className={[styles.arrowContainer, styles.leftArrow].join(' ')}></div>}
            {withPagination && <div className={[styles.arrowContainer, styles.rightArrow].join(' ')}></div>}


            <Swiper
                {...swiperConfig}
            >
                {content}
            </Swiper>
        </div>
    )
}
