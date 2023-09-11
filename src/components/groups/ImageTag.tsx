export default function ImageTag({ text }: { text: string }) {
  return (
    <div className="absolute bg-[#FFEFF8] border-[3px] border-[#FF84CA] py-[2px] px-2.5 text-xs text-black rounded-3xl left-2 bottom-4">
      {text}
    </div>
  );
}
