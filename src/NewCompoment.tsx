import React from "react";

type NewCompomentPropsType={
    currentMoney: MoneyPropsType[]
    callback: (name:string)=>void
}
type MoneyPropsType={
    banknots:string
    value:number
    number:string
}

export const NewCompoment = (props: NewCompomentPropsType) => {
    return(
        <>
            <ul>
                {props.currentMoney.map((el, index) => {
                    return(
                        <li key={index}>
                            <span>{el.banknots}</span>
                            <span>{el.value}</span>
                            <span>{el.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={()=>props.callback('all')} >all</button>
                <button onClick={()=>props.callback('dollars')} >dollars</button>
                <button onClick={()=>props.callback('rubles')} >rubles</button>
            </div>
        </>
    )
}