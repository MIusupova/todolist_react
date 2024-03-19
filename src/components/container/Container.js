import Tasks from "../task/Tasks"

const Container = () => {
    return (
        <ul className="todo__items">
            <Tasks value="Встать" data="08.03.2024"/>
            <Tasks value="Уснуть" data="08.03.2024"/>
      </ul>
    )
}
export default Container