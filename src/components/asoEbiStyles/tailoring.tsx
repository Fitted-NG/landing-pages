import AsoEbiStylesStep from "@/components/asoEbiStyles/step";
import AsoEbiStylesPricing from "@/components/asoEbiStyles/pricing";

export default function AsoEbiStylesTailoring() {
  return (
    <div>
      <div className="py-26 my-32">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-bold font-kotori-rose text-4xl mb-4">
            Tailoring With <span className="text-pink-fitted">YOU</span> In Mind
          </h1>
          <p className="">
            The process of finding the perfect aso ebi tailor can sometimes be
            confusing. But we help you simplify every step of the way, think of
            us as your personal
          </p>
        </div>
      </div>

      <AsoEbiStylesStep />

      <AsoEbiStylesPricing />
    </div>
  );
}
