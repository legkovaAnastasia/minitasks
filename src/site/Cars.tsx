type CarsPropsType = {
    cars: CarListPropsType[]
}
type CarListPropsType = {
    manufacturer: string
    model: string
}

export const Cars = (props: CarsPropsType) => {
    return(
        <table>
                {props.cars.map(((el,index) => {
                    return(
                        <tr>
                        <td>{index+1} manufacturer: {el.manufacturer}</td>
                        <td>model: {el.model}</td>
                        </tr>

                        )
                }))}
        </table>
    )
}