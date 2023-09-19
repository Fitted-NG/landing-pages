import Image from "next/image";
import CheckIcon from "/public/check-icon.png";

interface IList {
  children: string;
}


const ListItem = ({children} :IList) => {
  return (
      <ul>
        <li className="flex flex-row w-[300px] gap-3 text-sm py-1">
            <Image
            src={CheckIcon}
            alt="gjjgjgjg"
            sizes="10vw"
            style={{
              width: "6%",
              height: "5%",
            }}
          />
            {children}
        </li>
      </ul>
  );
};

export default function TailorsPricing() {
  return (
    <section className="bg-[#FBFBFF] sm:px-16 px-8 sm:py-24 py-12">
      <div className="container max-auto flex flex-col lg:flex-row items-start gap-5">
       <div>
          <div className="">
            <h1 className="font-kotori-rose text-[#152C5B] text-2xl lg:text-3xl font-normal lg:font-bold w-[345px] lg:w-[400px]">Pricing plans that scale</h1>
            <p className="text-[#667085] font-avenir font-normal text-sm lg:text-lg w-[345px] lg:w-[400px] mt-2">
              The tailor app will always have a free version for tailors, artisans
              and brands at their earliest stages. For those looking to scale up,
              we offer very competitive pricing!
            </p>
          </div>
        </div>
        

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="text-center">
              <h2>Free Forever</h2>
              <p>You will pay</p>
            </div>
              <ListItem>Access to all basic features</ListItem>
              <ListItem>Store customer measurements</ListItem>
              <ListItem>Download customer measurement (offline mode to save data)</ListItem>
              <ListItem>Store customer contact information</ListItem>
              <ListItem>Send & receive measurements</ListItem>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="text-center">
              <h2>Free Forever</h2>
              <p>You will pay</p>
            </div>
              <ListItem>Access to all basic features</ListItem>
              <ListItem>Store customer measurements</ListItem>
              <ListItem>Download customer measurement (offline mode to save data)</ListItem>
              <ListItem>Store customer contact information</ListItem>
              <ListItem>Send & receive measurements</ListItem>
          </div>
        </div>
      </div>
    </section>
  );
}
