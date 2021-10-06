import HeaderNew from "../Components/HeaderNew";

const BusinessInquires = () => {
  return (
    <div className="resource-container w-screen min-h-screen text-[14px] font-medium bg-black text-white tracking-[1.4px] font-Montserrat pb-[60px]">
      <div className="py-[33px]">
        <HeaderNew />
      </div>
      <div className="w-full md:w-[80%] mx-auto bg-[#1A1A20] rounded-md py-10 px-20 leading-[1.625]">
        <div className="text-[32px] font-medium leading-[1.5]">
          Business Enquires
        </div>
        <div className="mt-2 opacity-90 text-base font-normal"></div>
        <div className="h-[2px] bg-[#e6ecf180] w-full my-8" />

        <div className="text-2xl mb-6">Auctions</div>
        <div className="text-base font-normal opacity-90 mb-6">
          dCOLLECT can be enabled to host auctions for NFTs. If you are an
          artist you can apply to have your auction hosted by Aspen Labs via the
          dCOLLECT application.
        </div>
        <a
          href="https://forms.gle/DyQSgxJfHz1sMzhN7"
          className="text-[#5ce1e6] hover:text-[#5ce1e6] mx-2"
        >
          Apply here
        </a>
        <div className="h-[2px] bg-[#e6ecf180] w-full my-8" />

        <div className="text-2xl mb-6">Hypersphere Listing</div>
        <div className="text-base font-normal opacity-90">
          The nature of the Hypersphere requires that we be diligent about which
          tokens can be used on the primary trading platform. We ask that all
          projects that wish to list within the Hypersphere apply. Application
          acceptance is based on our team review of the project and the final
          decision rests with the community vote that must take place for any
          token to be listed within the Hypersphere.
        </div>
        <div className="text-base font-normal opacity-90">
          We will open applications after the launch of the Hypersphere.
        </div>
        <div className="h-[2px] bg-[#e6ecf180] w-full my-8" />

        <div className="text-2xl mb-6">Where can Aspen be traded?</div>
        <div className="text-base font-normal opacity-90">
          Aspen is an ERC-20 it can be traded on any decentralized exchange or
          on our Hypersphere. We are working to have the token added to more
          exchanges and will keep the community updated as this progresses.
        </div>
        <div className="h-[2px] bg-[#e6ecf180] w-full my-8" />

        <div className="text-2xl mb-6">Pools</div>
        <div className="text-base font-normal opacity-90">
          Any token is free to create a pool for staking and release of their
          tokens via Aspen Labs. They do not need to enquire with us beforehand.
        </div>
        <div className="h-[2px] bg-[#e6ecf180] w-full my-8" />

        <div className="text-2xl mb-6">Other enquires?</div>
        <div className="text-base font-normal opacity-90">
          Feel free to message us on Telegram, @CJaspen if the above are not
          what you are looking for. If you need help with support please go to
          our
          <a
            href="https://t.me/aspenlabs"
            className="text-[#5ce1e6] hover:text-[#5ce1e6] mx-2"
          >
            Telegram
          </a>
          or
          <a
            href="https://discord.gg/a8SpHySdYR"
            className="text-[#5ce1e6] hover:text-[#5ce1e6] mx-2"
          >
            Discord
          </a>
          communities.
        </div>
      </div>
    </div>
  );
};

export default BusinessInquires;
