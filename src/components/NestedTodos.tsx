import { useState, useEffect } from "react";
import axios from "axios";
import AddNewElement from "./AddNewElement";
import NestedTodo from "./NestedTodo";

export default function NestedTodos({ id }: { id: string }) {
  const [nstTodos, setNstTodos] = useState([]);

  let fetch = async () => {
    const data = await axios
      .get(`${import.meta.env.VITE_API_URL}/nestedTodos?todoId=${id}`)
      .then((res) => res.data);
    setNstTodos(data);
    return data;
  };

  useEffect(() => {
    fetch();
  }, []);

  const addNewNesTodo = (newTodo: any) => {
    setNstTodos([newTodo, ...nstTodos]);
  };

  const editNesTodo = (newTodo: any) => {
    const tmpArr = nstTodos;
    const elInd = tmpArr.findIndex((todo) => todo.id === newTodo.id);
    tmpArr[elInd] = newTodo;

    setNstTodos([...tmpArr]);
  };

  const deleteNesTodo = (id: number) => {
    const filteredArr = nstTodos.filter((todo) => todo.id !== id);
    setNstTodos(filteredArr);
  };
  return (
    <>
      <h1 className="text-2xl font-bold text-blue-500 underline">
        Nested Todos:
      </h1>
      <AddNewElement
        addNewElement={addNewNesTodo}
        id={id}
        placeholder="Add New Nested Todo"
        url={"nestedTodos"}
        nested={true}
      />

      <NestedTodo
        nstTodos={nstTodos}
        editNesTodo={editNesTodo}
        deleteNesTodo={deleteNesTodo}
        nested={true}
      />
    </>
  );
}
