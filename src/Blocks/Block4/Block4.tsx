import React from 'react'
import styles from './Block4.module.scss'

import { TitleAndDescription } from '../../Containers/TitleAndDescription/TitleAndDescription'
import { data4 } from './data4'
import { SquareCard } from '../../Components/SquareCard/SquareCard'
import { ColorBtn } from '../../Components/ColorBtn/ColorBtn'

export const Block4 = () => {

    const content = data4.map(item => <SquareCard key={item.id} {...item} isSpecialStyle={true} />)

    return (
        <div className={styles.mainContainer}>
            <div className={styles.bgcRectangle}></div>
            <div className={styles.cityBg}></div>
            <TitleAndDescription
                title='What we do'
                desc='Express courier service in the city. We are a reliable logistics partner for delivery services for online stores and restaurants!'
            />

            <div className={styles.cardContainer}>
                {content}
            </div>

            <div className={styles.btnContainer}>

                <ColorBtn viewStyle='yellow' text='Get started!' />
            </div>
        </div>
    )
}

