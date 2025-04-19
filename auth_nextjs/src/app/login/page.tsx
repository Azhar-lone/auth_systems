"use client";

import { useEffect, useState } from "react";

// Icons

// importing context

const Login = () => {
  const className =
    " file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-6 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm";
  const [input, setInput] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  return (
    <div className="md:w-[60%] w-[100%] mx-auto p-5 flex flex-col gap-5   md:shadow-2xl  border rounded-4xl mt-[5vh] animate-accordion-down ">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center">
        Log in to your Account
      </h3>
      <form className="flex flex-col gap-5">
        <input
          placeholder={"YourEmail@domain.com"}
          className={className}
          value={input.email}
          onChange={(e) =>
            setInput((prev) => {
              return {
                ...prev,
                email: e.target.value,
              };
            })
          }
        />
        <input
          placeholder="*********"
          className={className}
          value={input.password}
          onChange={(e) =>
            setInput((prev) => {
              return {
                ...prev,
                password: e.target.value,
              };
            })
          }
        />

        <button
          type="submit"
          className="bg-blue-600 p-2  shadow-xs hover:bg-blue/90"
        >
          Login{" "}
        </button>
      </form>
    </div>
  );
};

export default Login;
