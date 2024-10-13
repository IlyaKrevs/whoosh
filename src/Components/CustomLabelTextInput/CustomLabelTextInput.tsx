import React, { FC, useId } from 'react'
import styles from './CustomLabelTextInput.module.scss'

interface IProps {
    labelText: string,
    placeHolderText: string,
}

export const CustomLabelTextInput: FC<IProps> = ({ labelText, placeHolderText }) => {

    let id = useId()

    return (
        <div className={styles.mainContainer}>

            <label
                htmlFor={id}
                className={styles.labelText}
            >
                {labelText}
            </label>

            <input
                id={id}
                className={styles.inputContainer}
                type="text"
                placeholder={placeHolderText}
            />
        </div>
    )
}


