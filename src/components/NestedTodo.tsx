import ElementHeader from "./ElementHeader";

export default function NestedTodo(props: any) {
  const { nstTodos, deleteNesTodo, editNesTodo } = props;
  return (
    <>
      {nstTodos.length > 0 ? (
        nstTodos.map((nstTodo: any) => {
          return (
            <ElementHeader
              todo={nstTodo}
              deleteP={deleteNesTodo}
              edit={editNesTodo}
              urlP="nestedTodos"
              key={nstTodo.id}
            />
          );
        })
      ) : (
        <p className="text-center text-lg font-bold">No nested todos yet</p>
      )}
    </>
  );
}
