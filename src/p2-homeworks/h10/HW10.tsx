import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import s from './HW10.module.css';

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading);
    const dispatch = useDispatch();

    const setLoading = () => {
        // dispatch
        dispatch(loadingAC(true));
        // setTimeout
        setTimeout(() => {
            dispatch(loadingAC(false));
        }, 5000)
        console.log('loading...')
    };

    return (
        <div>
            {/*<hr/>*/}
            Homeworks 10
            {/*should work (должно работать)*/}
            {
                loading ? (<div className={s.preloader}/>)
                    :
                    (<div className={s.wrapper}>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>)
            }

            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
