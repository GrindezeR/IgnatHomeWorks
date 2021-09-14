import React, {KeyboardEvent} from 'react';
import {ChangeEvent} from "react";
import s from './Greeting.module.css';
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any +
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any +
    addUser: () => void // need to fix any +
    error: string // need to fix any +
    totalUsers: number // need to fix any +
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.done // need to fix with (?:) +

    const enterAddUser = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addUser();
        }
    }

    return (
        <div className={s.wrapper}>
            <SuperInputText value={name}
                            onChange={setNameCallback}
                            className={inputClass}
                            onKeyPress={enterAddUser}
                            error={error}/>

            <SuperButton disabled={!name}
                         className={s.addButton}
                         onClick={addUser}>Add</SuperButton>
            <span>{totalUsers}</span>
            {/*<span className={s.errorText}>{error}</span>*/}
        </div>
    )
}

export default Greeting
