import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css';

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>();
    const [show, setShow] = useState<boolean>(false);

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
        if (date !== undefined) {
            setShow(true);
        }
    }
    const onMouseLeave = () => {
        // close
        setShow(false);
    }

    const getTime = (time?: number) => {
        return Number(time) < 10 ? `0${time}` : time;
    }

    const hours = getTime(date?.getHours());
    const minutes = getTime(date?.getMinutes());
    const seconds = getTime(date?.getSeconds());

    const day = getTime(date?.getDate());
    const month = getTime(date?.getMonth());
    const year = getTime(date?.getFullYear());

    const stringTime = date && `${hours}:${minutes}:${seconds}` || <br/> // fix with date
    const stringDate = `${day}.${month}.${year}` || <br/>  // fix with date

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

export default Clock;