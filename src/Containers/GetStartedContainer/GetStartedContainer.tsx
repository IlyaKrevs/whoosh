import React, { FC } from 'react'
import styles from './GetStartedContainer.module.scss'
import { Tooltip } from '../../Components/Tooltip/Tooltip'
import { RadioGroup } from '../../Components/RadioGroup/RadioGroup'
import { FromToIcons } from '../../Components/FromToIcons/FromToIcons'
import { CustomLabelTextInput } from '../../Components/CustomLabelTextInput/CustomLabelTextInput'
import { ColorBtn } from '../../Components/ColorBtn/ColorBtn'


interface IProps {

}

export const GetStartedContainer: FC<IProps> = () => {
    return (
        <form className={styles.mainContainer}>
            <header className={styles.titleContainer}>
                <h4>
                    Send a Parcel
                </h4>

                <Tooltip />
            </header>

            <RadioGroup />

            <div className={styles.inputsWrapper}>
                <FromToIcons />

                <div className={styles.inputsContainer}>
                    <CustomLabelTextInput labelText='Pickup location' placeHolderText='location' />
                    <CustomLabelTextInput labelText='Drop location' placeHolderText='location' />

                </div>

            </div>
            <div className={styles.btnsContainer}>

                <ColorBtn viewStyle='blue' text='Order' />
                <button
                    className={styles.resetBtn}
                    type='reset'>
                    <div className={styles.xIcon}>
                        <span className={styles.firstLine}></span>
                        <span className={styles.secondLine}></span>
                    </div>

                    Clear All

                </button>
            </div>
        </form>
    )
}

