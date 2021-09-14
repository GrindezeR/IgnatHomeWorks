import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any +
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix +
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    const btnStyle = {
        margin: '10px 0',
        width: '64px',
    }

    return (
        <div>
            {mappedAffairs}
            <SuperButton style={btnStyle} onClick={setAll}>All</SuperButton>
            <SuperButton style={btnStyle} onClick={setHigh}>High</SuperButton>
            <SuperButton style={btnStyle} onClick={setMiddle}>Middle</SuperButton>
            <SuperButton style={btnStyle} onClick={setLow}>Low</SuperButton>
        </div>
    )
}

export default Affairs
