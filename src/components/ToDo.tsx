import { IToDo } from "../atmos";

function ToDo({ text }: IToDo) {
  return (
    <li>
      <span>{text}</span>
      <button>To DO</button>
      <button>Doing</button>
      <button>Done</button>
    </li>
  );
}

export default ToDo;
