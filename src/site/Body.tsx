type BodyPropsType = {
    titleBody: string
}

export const Body = (props: BodyPropsType) => {
    return(
        <div>{props.titleBody}</div>
    )
}