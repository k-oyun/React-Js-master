import { atom, selector } from "recoil";

export const minuteState = atom({
  key: "minutes",
  default: 0,
});

//state를 가져다가 수정한 output을 리턴함 (selector)
export const hourSelector = selector<number>({
  key: "hours",

  //atom의 값을 가져오는 get function
  get: ({ get }) => {
    const minutes = get(minuteState);
    return minutes / 60;
  },

  //atom의 state를 수정할 수 있음
  set: ({ set }, newValue) => {
    const minutes = Number(newValue) * 60;
    set(minuteState, minutes);
  },
});
