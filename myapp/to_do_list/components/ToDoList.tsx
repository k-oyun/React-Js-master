import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { todo } from "node:test";
import { Categories, categoryState, toDoSelector, toDoState } from "../atoms";
import ToDo from "./ToDo";

function ToDoList() {
  // //react의 state와 유사
  // const toDos = useRecoilValue(toDoState);

  //selector에 접근 -> atom에서 받아오지 않음 atom -> selector -> 현재
  const toDos = useRecoilValue(toDoSelector);

  //atom을 불러와 값을 읽고 설정
  const [category, setCategoty] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategoty(event.currentTarget.value as any);
  };
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      {/* select를 통해서 카테고리별 todo를 볼 수 있음 */}
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}
export default ToDoList;
