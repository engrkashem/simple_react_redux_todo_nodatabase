import { COLORCHANGED } from "./actionTypes"

export const colorChanged=(color, changeType)=>{
    return {
        type:COLORCHANGED,
        playload:{
            color,
            changeType
        }
    }
};


export const statusChanged=(status)=>{
    return {
        type:COLORCHANGED,
        playload:{
            status
        }
    }
};