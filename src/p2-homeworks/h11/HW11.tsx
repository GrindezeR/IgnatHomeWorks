import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const value: [number, number] = [value1, value2];
    const onChangeCallback = (value: [number, number]) => {
        setValue1(value[0]);
        setValue2(value[1]);
    }

    //Styles
    const wrapperStyle = {
        position: 'relative',
        display: 'flex',
        margin: '10px 0',
    } as const
    const spanStyle = {
        width: '20px',
        display: 'inline-block',
        margin: '0 10px'
    } as const

    return (
        <div>
            {/*<hr/>*/}
            Homeworks 11
            {/*should work (должно работать)*/}
            <div style={wrapperStyle}>
                <span style={spanStyle}>{value1}</span>
                <SuperRange value={value1}
                            onChangeRange={setValue1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div style={wrapperStyle}>
                <span style={spanStyle}>{value1}</span>
                <SuperDoubleRange
                    onChangeRange={onChangeCallback}
                    value={value}
                    max={100}
                    min={0}
                    step={1}
                    disable={false}
                />

                {/*сделать так чтоб value1 и value2 изменялось*/}
                <span style={spanStyle}>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            {/*<hr/>*/}
        </div>
    )
}

export default HW11
