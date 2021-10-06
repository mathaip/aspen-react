import HeaderNew from "../Components/HeaderNew";
import { TiInfoOutline } from "react-icons/ti";

const CustomerSupport = () => {
  return (
    <div className="resource-container w-screen min-h-screen text-[14px] font-medium bg-black text-white tracking-[1.4px] font-Montserrat pb-[60px]">
      <div className="py-[33px]">
        <HeaderNew />
      </div>
      <div className="w-full md:w-[80%] mx-auto bg-[#1A1A20] rounded-md py-10 px-20 leading-[1.625]">
        <div className="text-[32px] font-medium leading-[1.5]">
          Customer Support
        </div>
        <div className="mt-2 opacity-90 text-base font-normal">
          Let us help you hit the slopes!
        </div>
        <div className="h-[2px] bg-[#e6ecf180] w-full my-8" />

        <div className="text-2xl mb-6">
          Customer Support for Aspen Labs is available via our community
          channels
        </div>
        <div className="text-base font-normal opacity-90 mb-6">
          If you are experiencing issues on any Aspen Labs application reach out
          in our
          <a
            href="https://forms.gle/DyQSgxJfHz1sMzhN7"
            className="text-[#5ce1e6] hover:text-[#5ce1e6] mx-2"
          >
            Telegram Group
          </a>
          or
          <a
            href="https://forms.gle/DyQSgxJfHz1sMzhN7"
            className="text-[#5ce1e6] hover:text-[#5ce1e6] mx-2"
          >
            Discord Channel
          </a>
          .
        </div>
        <div className="relative border-l-4 border-solid border-[#ff4642] bg-[#ffffff38] p-6 pl-12 text-white tracking-[0.8px] rounded-sm">
          <TiInfoOutline className="w-6 h-6 text-[#ff4642] absolute top-6 left-3" />
          <div className="mb-6 text-base">Our admins will NEVER reach out asking for personal information or funds</div>
          <div className="text-base font-bold">Do not ever give your private keys or recovery phrases to anyone</div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
