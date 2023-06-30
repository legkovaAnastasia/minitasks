import React, {ChangeEvent} from 'react';

type InputPropsType = {
    title:string
    setTitle: (title:string)=>void
}
export const Input = (props:InputPropsType) => {
    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) => {
        let newTitle = event.currentTarget.value
        props.setTitle(newTitle)
    }
    return (
        <input value={props.title} onChange={onChangeInputHandler}/>
    );
};

export default Input;