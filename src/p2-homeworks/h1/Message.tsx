import React from 'react'
import style from './Message.module.css';

export type messageType = {
    avatar: string
    name: string
    message: string
    time: string
}

export function Message(props: messageType) {
    return (
        <div className={style.wrapper}>
            <div className={style.avatar}>
                <img src={props.avatar} alt={'avatar'}/>
            </div>
            <div className={style.angle}/>
            <div className={style.message}>
                <div className={style.name}>{props.name}</div>
                <div className={style.text}>{props.message}</div>
                <div className={style.time}>{props.time}</div>
            </div>
        </div>
    );
}

export default Message;
