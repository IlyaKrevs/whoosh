import React from 'react'
import styles from './Block1.module.scss';
import { GetStartedContainer } from '../../Containers/GetStartedContainer/GetStartedContainer';
import { TrackCard } from '../../Components/TrackCard/TrackCard';
import { TextWithArrow } from '../../Components/Texts/TextWithArrow/TextWithArrow';
import { VideoItem } from '../../Components/VideoItem/VideoItem';



export const Block1 = () => {
    return (
        <section className={styles.wrapper}>

            <div className={styles.mainContainer}>

                <div className={styles.left}>
                    <div className={styles.titleContainer}>
                        <h1>
                            Our service started
                            work in New York
                        </h1>
                        <p>
                            We make delivery exactly at the time you need - we can start to fulfill the order a few minutes after it arrives, or we can deliver on a specific day and hour.
                        </p>

                        <TextWithArrow innerText='Read more' />
                    </div>

                    <div className={styles.videoWrapper}>
                        <h3>How it works</h3>
                        <VideoItem />
                    </div>

                </div>

                <div className={styles.right}>
                    <GetStartedContainer />
                    <TrackCard />
                </div>

            </div>
        </section>
    )
}
