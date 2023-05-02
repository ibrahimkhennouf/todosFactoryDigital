import Button from "./elements/Button";
import axios from "axios";
import { useRef } from "react";

export default function AddNewElement(props: any) {
  const { addNewElement, id, nested, placeholder, url } = props;

  const fromRef = useRef(null);
  const hndlSubmit = (e: any) => {
    e.preventDefault();

    let date;
    if (e.currentTarget.date.value) {
      const arrDate = e.currentTarget.date.value?.split("-");
      date = `${arrDate[2]}/${arrDate[1]}/${arrDate[0]}`;
    } else {
      date = "";
    }

    const data = {
      title: e.currentTarget.title.value,
      completed: false,
      endDate: date,
      description: e.currentTarget.desc.value,
      pos: 1,
    };
    let dataS;
    if (nested) {
      dataS = { ...data, todoId: id };
    } else {
      dataS = { ...data, userId: id };
    }
    axios
      .post(`${import.meta.env.VITE_API_URL}/${url}`, dataS)
      .then((todo: any) => addNewElement(todo.data), fromRef?.current.reset());
  };

  return (
    <form
      className="flex justify-between items-center gap-4"
      onSubmit={hndlSubmit}
      ref={fromRef}
    >
      <div className="flex-1 flex gap-4 items-center">
        <input
          type="text"
          className="outline-none w-4/12 h-14 p-2 rounded-md"
          placeholder={placeholder}
          required
          name="title"
        />
        <textarea
          name="desc"
          className="outline-none w-4/12 rounded-md p-4 flex-1"
          cols={10}
          rows={2}
          placeholder="Description"
        />
      </div>
      <input
        type="date"
        className="outline-none rounded-md p-4"
        min={new Date().toISOString().split("T")[0]}
        name="date"
      />
      <Button text={placeholder} type="submit" />
    </form>
  );
}
