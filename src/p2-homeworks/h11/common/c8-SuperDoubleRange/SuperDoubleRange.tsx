import React, {useState} from 'react';
import Slider from "@mui/material/Slider";
import {isBoolean} from "util";


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[]) => void
    // onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    setValue1: (value: number) => void
    min?: number,
    max?: number,
    step?: number,
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, setValue1,
        min, max, step
        // min, max, step, disable, ...
    }) => {
    // сделать самому, можно подключать библиотеки

    const Style = {
        width: '150px',
        height: '5px',
        margin: '0 10px',
        borderRadius: '5px',
        cursor: 'pointer',
    }
    const [disable, setDisable] = useState(false)

    const handleChange = (event: Event, newValue: number[] | number) => {
        if (Array.isArray(newValue)) {
            setValue1(newValue[0]);
            console.log(newValue[0])
            if(newValue[0] > newValue[1]) {
                setDisable(true)
            }
        }
        if (onChangeRange) {
            onChangeRange(newValue as number[]);
        }
    };

    return (
        <>
            <Slider style={Style}
                    value={value ? value : 0}
                    onChange={handleChange}
                    size={"small"}
                    disableSwap
                    min={min}
                    max={max}
                    step={step}
                    disabled={disable}
            />
        </>
    )
}

export default SuperDoubleRange;
