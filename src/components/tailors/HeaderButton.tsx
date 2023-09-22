"use client";

export default function HeaderButtons() {
  return (
    <div className="justify-end md:gap-3 lg:gap-5 hidden md:flex -mt-[45px] container mx-auto xl:pl-72">
      <nav className="bg-none mt-2">
        <ul className="flex justify-center space-x-6">
          <li>
            <a href="#" className="text-white font-avenir text-sm font-medium">
              Gigs & Jobs
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-avenir text-sm font-medium">
              Fitted.fashion
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-avenir text-sm font-medium">
              Support
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-avenir text-sm font-medium">
              Blog
            </a>
          </li>
        </ul>
      </nav>

      <a href="https://tailorsapp.fitted.ng/signin">
        <button className="py-2 px-3 bg-white text-[#5773FF] rounded-lg cursor-pointer">
          Sign In
        </button>
      </a>
      
      <a href="https://tailorsapp.fitted.ng/signup">
        <button className="py-2.5 px-4 md:px-[18px] bg-[#5773FF] text-white rounded-lg cursor-pointer">
          Create account
        </button>
      </a>
    </div>
  );
}

