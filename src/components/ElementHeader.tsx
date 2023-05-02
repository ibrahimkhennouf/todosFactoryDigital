import { ITodo } from "../types/todosProps";
import { useRef } from "react";
import axios from "axios";
import { ReactComponent as DeleteSvg } from "../assets/deleteSvg.svg";

export default function ElementHeader(props: ITodo) {
  const { todo, edit, deleteP, urlP } = props;

  const inpRef = useRef();

  const hndlUpdate = (e: any) => {
    e.stopPropagation();
    const url = `${import.meta.env.VITE_API_URL}/${urlP}/${todo.id}`;

    axios
      .patch(url, {
        completed: inpRef?.current.checked,
      })
      .then((upTodo) => {
        edit(upTodo.data);
      });
  };

  const hndlDeleteTodo = (e: any) => {
    e.stopPropagation();
    const url = `${import.meta.env.VITE_API_URL}/${urlP}/${todo.id}`;
    axios.delete(url).then(() => {
      deleteP(todo.id);
    });
  };
  return (
    <>
      <div className="flex justify-between gap-4 flex-1 items-center">
        <input
          type="checkbox"
          defaultChecked={todo.completed}
          onClick={hndlUpdate}
          ref={inpRef}
        />
        <p className="font-bold text-lg">{todo.title}</p>
        <p>{todo.description}</p>
        <p>{todo.endDate}</p>
        <DeleteSvg
          className="cursor-pointer"
          width={30}
          onClick={hndlDeleteTodo}
        />
      </div>
    </>
  );
}
