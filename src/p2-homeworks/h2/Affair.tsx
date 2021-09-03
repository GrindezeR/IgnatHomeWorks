import React from 'react'
import {AffairType} from "./HW2";
import style from './Affairs.module.css';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any +
    deleteAffairCallback: (_id: number) => void // need to fix any +
}

function Affair(props: AffairPropsType) {
    // need to fix +
    const deleteCallback = () => {
        return props.deleteAffairCallback(props.affair._id)
    }

    const styleCheck = () => {
        switch (props.affair.priority) {
            case 'high':
                return '#ff0000';
            case 'middle':
                return '#ffa200';
            case 'low':
                return '#00ff40';
        }
    }

    const priorityStyle = {
        color: styleCheck(),
        margin: '5px',
    }

    return (
        <div className={style.affair_wrapper}>
            <div className={style.affair_title}>
                {props.affair.name}
            </div>

            <div className={style.affair_priority} style={priorityStyle}>
                [{props.affair.priority}]
            </div>

            <button className={style.affair_deletebtn} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
