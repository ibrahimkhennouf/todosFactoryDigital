import AccordionTodos from "./AccordionTodos";

export default function Todo(props: any) {
  const { todos, deleteTodo, editTodo } = props;

  return (
    <>
      {todos?.length > 0 ? (
        <>
          {todos.map((todo: any) => {
            return (
              <AccordionTodos
                key={todo.id}
                todo={todo}
                deleteP={deleteTodo}
                edit={editTodo}
              />
            );
          })}
        </>
      ) : (
        <p className="text-center text-lg font-bold">No todos yet</p>
      )}
    </>
  );
}
