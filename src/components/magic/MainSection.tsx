import CodeInput from "./CodeInput";

export default function MainSection() {
  return (
    <main className="w-full min-h-[calc(100vh-60px)]">
      <div className="pt-16 text-center flex flex-col justify-center items-center">
        <h1 className=" text-dark text-lg font-medium mb-[14px]">
          Input code on Tag
        </h1>
        <CodeInput />
      </div>
    </main>
  );
}
