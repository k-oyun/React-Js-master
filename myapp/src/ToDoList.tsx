import { useState } from "react";
import { useForm } from "react-hook-form";
import React from "react";

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  password1: string;
}

function ToDoList() {
  //onchange Onsubmit같은 이벤트와 이벤트 핸들러가 필요 없어짐
  //watch는 변경사항을 볼 수 있는것 console.log랑 같이 사용
  //handlesubmit이 preventdefault 및 검증을 진행함
  //formstate로 에러부분만 메세지를 출력할 수 있음
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        {/* required를 사용하면 비어있는 부분으로 화면을 이동시켜줌 */}
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", { required: "write here" })}
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register("lastName", { required: "write here" })}
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register("username", { required: "write here", minLength: 10 })}
          placeholder="Username"
        />
        <span>{errors?.username?.message}</span>
        <input
          {...register("password", { required: "write here", minLength: 5 })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("password1", {
            required: "Password is required",
          })}
          placeholder="Password1"
        />
        <span>{errors?.password1?.message}</span>
        <button>add</button>
      </form>
    </div>
  );
}
export default ToDoList;
