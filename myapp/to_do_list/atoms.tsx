import { atom, selector } from "recoil";

//enum으로 만들어 사용하면 오타가 날 확률이 줄어든다!
export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const categoryState = atom<Categories>({
  key: "categoty",
  default: Categories.TO_DO,
});

//state에 맞게 배열에 저장
export const toDoSelector = selector({
  key: "toDoSelector",
  //get function으로 atoms의 요소를 가져올 수 있음
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    //조건에 맞지않는 원소를 제거
    //각각 조건에 따라 배열에 저장
    return toDos.filter((toDo) => toDo.category === category);
  },
});
