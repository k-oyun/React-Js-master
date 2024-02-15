import { useRecoilState } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function App() {
  //userecoilstate atom의 값을 불러오거나 수정할 수 있음
  const [minutes, setMinutes] = useRecoilState(minuteState);

  //selector에서의 set함수와 사용
  const [hours, setHours] = useRecoilState(hourSelector);

  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    //+를 추가함으로써 string을 numberfh qkRNa
    setMinutes(+event.currentTarget.value);
  };

  const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };
  return (
    <div>
      <input
        value={minutes}
        onChange={onMinutesChange}
        type="number"
        placeholder="Minutes"
      />
      <input
        onChange={onHoursChange}
        value={hours}
        type="number"
        placeholder="Hours"
      />
    </div>
  );
}

export default App;
