import React from "react";
import s from './On.module.css'

export const On = () =>{
    return(
        <div className={s.wrapper}>
            <div className={s.on}>ON</div>
            <div className={s.off}>OFF</div>
            <div className={s.light}></div>
        </div>
    )
}