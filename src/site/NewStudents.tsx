type NewStudentsPropsType = {
    students: StudentsPropsType[]
}
type StudentsPropsType = {
    id:number
    name: string
    age: number
}

export const NewStudents = (props: NewStudentsPropsType) => {
    return(
        <div>{
            props.students.map((el=>{
                return (
                    <ul key={el.id}><span>{el.name}: </span>
                    <span>{el.age}</span></ul>
                )
            }))
        }</div>
    )
}