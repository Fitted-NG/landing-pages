"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CodeInput() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const code = inputValue.toLocaleLowerCase();

    router.push(`/magic/${code}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-[52px]">
        <div className="flex gap-[14px]">
          <input
            type="text"
            className="bg-[#F9FAFB] border border-[#E5E9EE] w-full max-w-[270px] h-[44px] rounded-lg focus:border-[#E5E9EE] outline-[#E5E9EE] text-[22px] font-extrabold text-[#1D2939] uppercase text-center"
            name="input"
            value={inputValue}
            onChange={handleInput}
          />
        </div>
      </div>

      <div className="w-full max-w-[345px]">
        <button className="bg-pink-fitted w-full text-white text-center py-3 px-5 rounded-lg">
          Access Product
        </button>
      </div>
    </form>
  );
}
