import { ITodo } from "../types/todosProps";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import NestedTodos from "./NestedTodos";
import ElementHeader from "./ElementHeader";

export default function AccordionTodos(props: ITodo) {
  const { todo, deleteP, edit } = props;

  return (
    <>
      <Accordion
        allowToggle
        className="border-b-2 p-2 bg-white m-4 rounded-md "
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <ElementHeader
                todo={todo}
                deleteP={deleteP}
                edit={edit}
                urlP="todos"
              />

              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <NestedTodos id={todo.id} />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
