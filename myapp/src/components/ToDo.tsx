import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      //event를 발생시킨 name을 잡음
      currentTarget: { name },
    } = event;
    //카테고리가 변하는 toDo의 인덱스를 찾기 위해 인자로 받은 id와 비교
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const oldToDo = oldToDos[targetIndex];
      //as any는 타입스크립트 검사를 하지말아달라는 의미
      const newToDo = { text, id, category: name as any };
      return [
        //기존의 todo들중 카테고리를 변경한 todo의 카테고리를 변환해야함
        //따라서 변환되지 않은 것은 냅두고 변환된 todo만 배열에 다시 넣음
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          To DO
        </button>
      )}
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;
