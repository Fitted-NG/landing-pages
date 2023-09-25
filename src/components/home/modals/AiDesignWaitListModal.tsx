"use client";
import { ThemeContext } from "@/contexts/ThemeContext";
import Image from "next/image";
import { FormEvent, FormEventHandler, useContext, useState } from "react";

const AiDesignWaitListModal = () => {
  const { modals } = useContext(ThemeContext);
  const form = useForm();

  return (
    //
    <div className={`modal__box ${modals.state["AiDesignWaitListModal"]}`}>
      <div className="modal__box-wrapper shadow-lg rounded-2xl">
        <div className="h-52 w-full relative">
          <Image
            src={"/ai-design-style.png"}
            alt={"ai design style"}
            fill
            className={"object-contain object-top "}
          />

          <button
            className=" flex items-center absolute top-0 right-5  "
            onClick={() => modals.toggle("AiDesignWaitListModal")}
          >
            <span className="pointer-events-none flex items-center p-2">
              <svg
                className="h-4 w-4 "
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 5L5 15M5 5L15 15"
                  stroke="currentColor"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </button>
        </div>

        <div className="max-w-md mx-auto">
          <h3 className="mt-6 mb-3 font-kotori-rose text-[#1E1E1E] text-xl text-center">
            Want to describe a style and have it made?
          </h3>

          <p className="mb-3 text-gray-800 text-justify">
            Explore limitless style by describing your ideal outfit and
            fitted-AI will generate beautiful style options which you can order
            from any tailor on the platform.
          </p>

          <form onSubmit={form.submit}>
            <div className="">
              <div className="mb-4 flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  <label htmlFor="firstname" className={"mb-2"}>
                    Firstname
                  </label>
                  <input
                    type="text"
                    value={form.input.firstname}
                    onChange={form.inputHandle}
                    name={"firstname"}
                    className="block w-full rounded-md border-0 bg-gray-200 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    placeholder={"Enter your firstname"}
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="lastname" className={"mb-2"}>
                    Lastname
                  </label>
                  <input
                    type="text"
                    name={"lastname"}
                    value={form.input.lastname}
                    onChange={form.inputHandle}
                    className="block w-full rounded-md border-0 bg-gray-200 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    placeholder={"Enter your lastname"}
                  />
                </div>
              </div>
              <div className="mb-8">
                <label htmlFor="email" className={"mb-2"}>
                  Email
                </label>
                <input
                  type="email"
                  name={"email"}
                  value={form.input.email}
                  onChange={form.inputHandle}
                  className="block w-full rounded-md border-0 bg-gray-200 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder={"Enter your email"}
                />
              </div>
              <div className="my-4">
                <button
                  disabled={form.loading}
                  className="block w-full rounded-md bg-pink-500 py-3 px-4 font-medium text-white shadow hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  {form.loading ? "Loading..." : "Join Waitlist"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AiDesignWaitListModal;

function useForm() {
  const { modals } = useContext(ThemeContext);

  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  return {
    input,
    loading,
    submit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();
      setLoading(true);
      fetch("/api/waitlist", {
        method: "POST",
        body: JSON.stringify(input),
      })
        .then((response) => {
          modals.toggle("AiDesignWaitListModal");
          setInput({
            firstname: "",
            lastname: "",
            email: "",
          });
        })
        .finally(() => {
          setLoading(false);
        });
    },
    inputHandle(e?: FormEvent<HTMLInputElement>, name?: string) {
      const currentTarget = e?.currentTarget;
      setInput((prev) => ({
        ...prev,
        [(name ?? currentTarget?.name) as string]:
          currentTarget?.value as string,
      }));
    },
  };
}
