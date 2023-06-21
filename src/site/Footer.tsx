type FooterPropsType = {
    titleFooter: string
}

export const Footer = (props: FooterPropsType) => {
    return (
        <div>{props.titleFooter}</div>
    )
}