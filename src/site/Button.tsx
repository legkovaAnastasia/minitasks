import React from "react";
type NamePropsType = {
    name: string
    callBack: ()=>void

}

export const Button = (props: NamePropsType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}