import React from "react";
import s from './Off.module.css'

export const Off = () =>{
    return(
        <div className={s.wrapper}>
            <div className={s.on}>ON</div>
            <div className={s.off}>OFF</div>
            <div className={s.light}></div>
        </div>
    )
}