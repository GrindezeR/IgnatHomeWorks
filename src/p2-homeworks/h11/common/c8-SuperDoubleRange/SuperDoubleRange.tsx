import React, {ChangeEvent, useEffect} from 'react';
import s from './SuperDoubleRange.module.css';

type TwoInputsPropsType = {
    onChangeRange: (value: [number, number]) => void
    value: [number, number]
    min?: number
    max?: number
    step?: number
    disable?: boolean
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<TwoInputsPropsType> = (
    {
        onChangeRange, value,
        max, min, step, disable
        // min, max, step, disable, ...
    }) => {
    // сделать самому, можно подключать библиотеки

    useEffect(() => {
        onChangeRange([value[0], max ? max : value[1]])
        onChangeRange([min ? min : value[0], value[1]])
    }, [max, min, onChangeRange, value])
    useEffect(() => {
        if (value[0] < value[1]) {
            onChangeRange([value[0], value[1]]);
        } else if (value[0] > value[1]) {
            onChangeRange([value[0], value[1] + 1]);
        }
    }, [value, onChangeRange])

    const onChangeOne = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue1 = +e.currentTarget.value;

        if (inputValue1 < value[1]) {
            onChangeRange([inputValue1, value[1]]);
        } else if (inputValue1 > value[1]) {
            onChangeRange([inputValue1, value[1] + ((step ? step : 1))]);
        }
    }

    const onChangeTwo = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue2 = +e.currentTarget.value;

        if (inputValue2 > value[0]) {
            onChangeRange([value[0], inputValue2]);
        } else if (inputValue2 < value[0]) {
            onChangeRange([value[0] - (step ? step : 1), inputValue2]);
        }
    }

    return (
        <div>
            <input className={s.first}
                   type="range"
                   value={value[0]}
                   onChange={onChangeOne}
                   min={min}
                   max={max}
                   step={step}
                   disabled={disable}
            />

            <input className={s.second}
                   type="range"
                   value={value[1]}
                   onChange={onChangeTwo}
                   min={min}
                   max={max}
                   step={step}
                   disabled={disable}
            />
        </div>
    )
}

export default SuperDoubleRange;
