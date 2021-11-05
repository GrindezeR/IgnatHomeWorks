import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState<number[]>([value1, 50])

    // console.log('VAL1', value1);
    // console.log('VAL2', value2);
    return (
        <div>
            {/*<hr/>*/}
            Homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange value={value1}
                            onChangeRange={setValue1}

                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div style={{position: "relative"}}>
                <span>{value1}</span>
                {/*сделать так чтоб value1 и value2 изменялось*/}
                <SuperDoubleRange
                    setValue1={setValue1}
                    value={[value1, value2[1]]}
                    onChangeRange={setValue2}
                    min={0}
                    max={100}
                    step={10}
                />
                <span>{value2[1]}</span>
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
