"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./codeInput.css";

export default function CodeInput() {
  const router = useRouter();
  const [inputValues, setInputValues] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });
  const [codeError, setCodeError] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value.length < 2) {
      setInputValues({ ...inputValues, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { input1, input2, input3, input4 } = inputValues;
    if (input1 && input2 && input3 && input4) {
      const path = input1.concat(input2.concat(input3.concat(input4)));
      router.push(`/magic/${path}`);
    } else {
      setCodeError("Code is incomplete");
      setTimeout(() => setCodeError(""), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-[52px]">
        <div className="flex gap-[14px]">
          <input
            type="number"
            className="border border-[#E5E9EE] w-1/4 max-w-[57px] h-[44px] rounded-lg focus:border-[#E5E9EE] outline-[#E5E9EE] text-[30px] font-extrabold text-[#1D2939] text-center input"
            name="input1"
            value={inputValues.input1}
            onChange={handleInput}
          />
          <input
            type="number"
            className="border border-[#E5E9EE] w-1/4 max-w-[57px] h-[44px] rounded-lg focus:border-[#E5E9EE] outline-[#E5E9EE] text-[30px] font-extrabold text-[#1D2939] text-center input"
            name="input2"
            value={inputValues.input2}
            onChange={handleInput}
          />
          <input
            type="number"
            className="border border-[#E5E9EE] w-1/4 max-w-[57px] h-[44px] rounded-lg focus:border-[#E5E9EE] outline-[#E5E9EE] text-[30px] font-extrabold text-[#1D2939] text-center input"
            name="input3"
            value={inputValues.input3}
            onChange={handleInput}
          />
          <input
            type="number"
            className="border border-[#E5E9EE] w-1/4 max-w-[57px] h-[44px] rounded-lg focus:border-[#E5E9EE] outline-[#E5E9EE] text-[30px] font-extrabold text-[#1D2939] text-center input"
            name="input4"
            value={inputValues.input4}
            onChange={handleInput}
          />
        </div>
        {codeError && (
          <p className="text-red-500 text-center text-sm font-medium mt-2">
            {codeError}
          </p>
        )}
      </div>

      <div className="w-full max-w-[345px]">
        <button className="bg-pink-fitted w-full text-white text-center py-3 px-5 rounded-lg">
          Access Product
        </button>
      </div>
    </form>
  );
}
