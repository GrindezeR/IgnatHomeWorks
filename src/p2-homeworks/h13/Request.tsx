import React, {useState} from "react";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {RequestsAPI} from "./RequestsAPI";
import s from './Request.module.css';

type ResponseType = {
    data: {
        errorText: string
        info: string
    }
    status: number
}

export const Request = () => {
    const [checkStatus, setCheckStatus] = useState(false);
    const [response, setResponse] = useState<ResponseType>({
        data: {
            errorText: '-',
            info: '-',
        },
        status: 0
    });

    const onClickBtnHandler = () => {
        RequestsAPI.doPost(checkStatus)
            .then(res => {
                setResponse(res)
            })
            .catch(err => {
                setResponse(err)
            })
    }

    const checkBoxValue = (value: boolean) => {
        setCheckStatus(value);
    }
    const statusClass = () => {
        if (response.status === 200) {
            return s.statusGood
        } else if (response.status === 0) {
            return s.status
        } else {
            return s.statusBad
        }
    }

    return (
        <div>
            <SuperCheckbox checked={checkStatus} onChangeChecked={checkBoxValue}>
                If the check is set - the POST request is good, if not, it is bad
            </SuperCheckbox>
            <SuperButton onClick={onClickBtnHandler}>Send</SuperButton>
            <div>
                <div>
                    <span className={`${statusClass()}`}>Status: </span>
                    {response.data.errorText}
                </div>
                <div>
                    <span className={s.info}>Info: </span>
                    {response.data.info}
                </div>
            </div>
        </div>
    );
}