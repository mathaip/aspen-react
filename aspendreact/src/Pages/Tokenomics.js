import HeaderNew from "../Components/HeaderNew";
import img1 from "../images/assets/dispensation per year.png";
import img2 from "../images/assets/total release.png";

const Tokenomics = () => {
  return (
    <div className="resource-container w-screen min-h-screen text-[14px] font-medium bg-black text-white tracking-[1.4px] font-Montserrat pb-[60px]">
      <div className="py-[33px]">
        <HeaderNew />
      </div>
      <div className="w-full md:w-[80%] mx-auto bg-[#1A1A20] rounded-md py-10 px-20 leading-[1.625]">
        <div className="text-[32px] font-medium leading-[1.5]">Tokenomics</div>
        <div className="mt-2 opacity-90 text-base font-normal">
          The economics of our token.
        </div>
        <div className="h-[2px] bg-[#e6ecf180] w-full my-8" />

        <div className="text-base font-normal opacity-90 mb-6">
          Aspen token is distributed via staking at a rate of 3,000,000 per
          year. This number is halved every 3 years.
        </div>

        <img
          src={img1}
          className="w-[730px] max-w-full h-auto mb-6 mx-auto"
          alt=""
        ></img>
        <div className="text-base font-normal text-center opacity-70 mb-6">
          Distribution Rate
        </div>

        <div className="text-base font-normal opacity-90 mb-6">
          This is a graph of the total available supply over the next 15 years.
          *not including foundation and team tokens
        </div>

        <img
          src={img2}
          className="w-[730px] max-w-full h-auto mb-6 mx-auto"
          alt=""
        ></img>
        <div className="text-base font-normal text-center opacity-70 mb-6">
          Total Supply Available
        </div>

        <div className="text-base font-normal opacity-90 mb-6">
          We have designed our token so that all 45,000,000 millions token would
          never be released in our lifetime. The supply naturally constricts to
          recreate a deflation in supply and a subsequent increase the price of
          the token.
        </div>

        <div className="text-base font-normal opacity-90 mb-6">
          We have made one recent amendment that overall would not effect the
          distribution rate as shown above. We will allow Aspen NFTs to be
          staked for Aspen token. 1,000,000 tokens from the foundation will be
          released via staking over a 10 year period.
        </div>

        <div className="text-base font-normal opacity-90 mb-6">
          Additionally 10,000,000 are vested in team contracts to be released
          over a 5 year period and an additional 5,000,000 tokens have been
          deposited in the Aspen Foundation muli-sig wallet.
        </div>

        <div className="text-base font-normal opacity-90 mb-6">
          Our goal is to ensure that our users benefit over the long term and we
          believe this is the best way. Instead of burning tokens we believe we
          have release the appropriate amount of tokens over a time-locked
          period to create massive value in our ecosystem.
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
