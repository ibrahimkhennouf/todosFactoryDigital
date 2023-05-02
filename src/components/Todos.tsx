import { useState } from "react";
import AddNewElement from "./AddNewElement";
import Todo from "./Todo";
import FilterElements from "./FilterElements";
import useFilter from "../hooks/useFilter";
import { renderArr } from "../utils";

export default function Todos(props: any) {
  const { data, id } = props;
  const { filter, setFilterActive, setFilterAll, setFilterCompleted } =
    useFilter();

  const [todos, setTodos] = useState(renderArr(data, filter));

  const addNewTodo = (newTodo: any) => {
    setTodos([newTodo, ...data]);
  };

  const editTodo = (newTodo: any) => {
    const tmpArr = renderArr(data, filter);
    const elInd = tmpArr.findIndex((todo) => todo.id === newTodo.id);
    tmpArr[elInd] = newTodo;
    setTodos(tmpArr);
  };

  const deleteTodo = (id: number) => {
    const arr = renderArr(data, filter);
    const filteredArr = arr.filter((todo) => todo.id !== id);
    setTodos(filteredArr);
  };

  const filterTodos = (filter: string) => {
    let filterArr;

    if (filter === "active") {
      filterArr = data
        .filter((todo: any) => !todo.completed)
        .sort((a: any, b: any) => a.pos - b.pos);
    } else {
      if (filter === "completed") {
        filterArr = data
          .filter((todo: any) => todo.completed)
          .sort((a: any, b: any) => a.pos - b.pos);
      } else {
        filterArr = data.sort((a: any, b: any) => a.pos - b.pos);
      }
    }
    setTodos(filterArr);
  };

  return (
    <>
      <h1 className="text-3xl font-bold tracking-[1rem]">TODO</h1>
      <AddNewElement
        addNewElement={addNewTodo}
        id={id}
        placeholder={"Add New Todo"}
        url={"todos"}
        nested={false}
      />
      <FilterElements
        filterTodos={filterTodos}
        setFilterActive={setFilterActive}
        setFilterAll={setFilterAll}
        setFilterCompleted={setFilterCompleted}
        filter={filter}
      />
      <Todo todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} />
    </>
  );
}
