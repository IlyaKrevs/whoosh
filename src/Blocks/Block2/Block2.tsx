import React from 'react'
import styles from './Block2.module.scss'
import { SquareCard } from '../../Components/SquareCard/SquareCard'


import { data2 } from './data2'
import { TitleAndDescription } from '../../Containers/TitleAndDescription/TitleAndDescription'


export const Block2 = () => {

    let content = data2.map(item => <SquareCard key={item.id} {...item} />)

    return (
        <section className={styles.wrapper}>
            <div className={styles.mainContainer}>
                <TitleAndDescription
                    title='Express delivery market revolution'
                    desc='Express courier service in the city. We are a reliable logistics partner for delivery services for online stores and restaurants!'
                />

                <div className={styles.cardsContainer}>
                    {content}
                </div>
            </div>
        </section>
    )
}


