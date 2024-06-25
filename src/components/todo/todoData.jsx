const TodoData = (props) => {
    const { todoList, deleteTodo } = props;


    const handleClickDelete = (id) => {
        console.log(">>> run F handleClickDelete: ")
        deleteTodo(id);

    }






    console.log(">>> check props: ", todoList)
    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                return (
                    <div className="todo-item" key={item.id}>
                        <div> {item.name}</div>
                        <button
                            style={{ cursor: "pointer" }}
                            onClick={() => handleClickDelete(item.id)}
                        >Delete</button>
                    </div>
                )
            })}

            {/* <div>
                {JSON.stringify(props.todoList)}
            </div> */}
        </div>
    )
}

export default TodoData;