import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css';

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        // stop
        clearTimeout(timerId);
    }
    const start = () => {
        stop()
        const id: number = +setInterval(() => {
            // setDate
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        // show
        setShow(true);
    }
    const onMouseLeave = () => {
        // close
        setShow(false);
    }

    const hours = Number(date?.getHours()) > 10 ? date?.getHours() : '0' + date?.getHours();
    const minutes = Number(date?.getMinutes()) > 10 ? date?.getMinutes() : '0' + date?.getMinutes();
    const seconds = Number(date?.getSeconds()) > 10 ? date?.getSeconds() : '0' + date?.getSeconds();

    const day = Number(date?.getDate()) > 10 ? date?.getDate() : '0' + date?.getDate();
    const mounth = Number(date?.getMonth()) > 10 ? date?.getMonth() : '0' + date?.getMonth();
    const year = date?.getFullYear();

    const stringTime = date && `${hours}:${minutes}:${seconds}` || <br/> // fix with date
    const stringDate = `${day}.${mounth}.${year}` || <br/>  // fix with date

    return (
        <div>
            <div className={s.timeWrapper}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}>
                {stringTime}
            </div>

            {show ? <div className={s.showDate}>{stringDate}</div> : <br/>}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
