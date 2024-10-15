import React, { FC, useState } from 'react'
import styles from './RadioGroup.module.scss'

import { onFoot, onCar, onTruck } from '../../assets/radioIconsSVG'

interface IProps {

}


export const RadioGroup: FC<IProps> = ({ }) => {

    const [value, setValue] = useState('1')

    const options = [
        { label: 'Option 1', value: '1', svg: onFoot },
        { label: 'Option 2', value: '2', svg: onCar },
        { label: 'Option 3', value: '3', svg: onTruck },
    ];

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value)
    }

    return (
        <div className={styles.mainContainer}>
            {options.map(item => {
                return (
                    <label
                        key={item.label}
                        className={[styles.radioContainer, (value === item.value ? styles.checkedStyle : '')].join(' ')} >

                        <input
                            className={styles.hideBtn}
                            type="radio"
                            name='123'
                            value={item.value}
                            checked={value === item.value}
                            onChange={onChangeHandler}
                        />
                        {item.svg}

                        <span className={styles.textContainer}>
                            {item.label}
                        </span>
                    </label>
                )
            })}

        </div>
    )
}



