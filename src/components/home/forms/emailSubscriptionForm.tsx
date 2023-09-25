import { FormEvent, useState } from "react";

export default function EmailSubscriptionForm() {
  const form = useForm();
  return (
    <form className="cta-form mt-6" onSubmit={form.submit}>
      <div className="form-form-wrapper flex flex-row flex-wrap md:flex-nowrap">
        <div className="input-group flex md:flex-row flex-col w-full lg:w-3/4 gap-2">
          <input
            type="text"
            className="cta-form-input w-input flex-1 w-full lg:w-1/2"
            name="name"
            placeholder="Your full name"
            id="name"
            required
            value={form.input.name}
            onChange={form.inputHandle}
          />

          <input
            type="email"
            className="cta-form-input w-input flex-1 w-full lg:w-1/2"
            name="email"
            placeholder="Your email address"
            id="Email"
            value={form.input.email}
            onChange={form.inputHandle}
            required
          />
        </div>
        <button
          type="submit"
          disabled={form.loading}
          className="btn cta-form-button disabled:bg-opacity-10  mt-3 md:mt-0 flex-1 whitespace-nowrap h-14 px-6"
        >
          {form.loading ? "Loading..." : "Get Started"}
        </button>
      </div>
    </form>
  );
}

function useForm() {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
  });

  return {
    input,
    loading,
    submit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();
      if (!(input.email && input.name)) {
        return;
      }
      setLoading(true);
      fetch("/api/email-subscribers", {
        method: "POST",
        body: JSON.stringify(input),
      })
        .then((response) => {
          setInput({
            name: "",
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
