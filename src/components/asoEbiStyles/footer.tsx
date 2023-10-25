import Footer from "@/components/reusable/Footer";

export function AsoEbiStylesFooter() {
  return (
    <div className="">
      <div className="bg-gray-200 py-20">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="text-3xl font-bold">
            <h2 className="">You Focus On The Party Jollof,</h2>
            <h2 className="text-pink-fitted">Let Us Handle The Aso Ebi</h2>
          </div>
          <div className="flex justify-end">
            <a
              href="https://groups.fitted.fashion/signup"
              className="bg-pink-fitted hover:bg-opacity-80 text-white py-[10px] px-[18px] text-sm rounded-[8px]"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
