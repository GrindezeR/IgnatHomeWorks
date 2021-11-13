import React, {useState} from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, InitialThemeStateType} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some', 'default'];

function HW12() {
    const theme = useSelector<AppStoreType, InitialThemeStateType>(state => state.theme);
    // useSelector
    const dispatch = useDispatch();
    // useDispatch, onChangeCallback

    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeC(theme));
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                Homeworks 12
            </span>
            <div>
                <SuperSelect
                    defaultValue={themes[3]}
                    options={themes}
                    onChangeOption={onChangeCallback}
                />
            </div>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
