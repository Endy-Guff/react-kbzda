import React from "react";
import { Off } from "./Off/Off";
import { On } from "./On/On";

type PropsType = {
    value: boolean
}

export const OnOff = (props: PropsType) =>{
    return(
        <div>
            {props.value && <On />}
            {!props.value && <Off />}
        </div>
    )
}