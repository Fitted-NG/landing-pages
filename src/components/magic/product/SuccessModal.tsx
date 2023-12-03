import Image from "next/image";
import tickCircle from "/public/icons/tick-circle.svg";

export default function SuccessModal({
  setShowSuccessModal,
}: {
  setShowSuccessModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black/30 backdrop-blur">
      <div
        className="absolute inset-0"
        onClick={() => setShowSuccessModal(false)}
      ></div>
      <div className="bg-white max-w-[340px] mx-auto p-10 relative rounded-lg flex flex-col items-center gap-5">
        <Image src={tickCircle} alt="tick circle icon" />
        <p className="text-xl text-center font-medium">
          Successfully submitted
        </p>
        <button
          className="bg-pink-fitted text-white py-1 px-7 rounded"
          onClick={() => setShowSuccessModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
}
