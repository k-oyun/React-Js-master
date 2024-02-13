import { atom } from "recoil";

//atom을 만드는 방법
export const isDarkAtom = atom({
  key: "isDark",
  default: true,
});
