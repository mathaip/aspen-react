import HeaderNew from "../Components/HeaderNew";
import token_distributioon from "../images/assets/token distributioon.png";

const Disclosure = () => {
  return (
    <div className="resource-container w-screen min-h-screen text-[14px] font-medium bg-black text-white tracking-[1.4px] font-Montserrat pb-[60px]">
      <div className="py-[33px]">
        <HeaderNew />
      </div>
      <div className="w-full md:w-[80%] mx-auto bg-[#1A1A20] rounded-md py-10 px-20 leading-[1.625]">
        <div className="text-[32px] font-medium leading-[1.5]">Disclosures</div>
        <div className="mt-2 opacity-90 text-base font-normal">
          Our goal is to be completely transparent for all our users.
        </div>
        <div className="h-[2px] bg-[#e6ecf180] w-full my-8" />

        <div className="text-base font-normal opacity-90">
          Aspen Labs is decentralized application company. Within the framework
          of our first roadmap we are engaged in constructing the Hypersphere, a
          single-pool, cross-chain decentralized exchange. dLEND our social
          finance application that allows digital asset holders to lend to
          qualified home owners and students. And finally dCOLLECT an NFT
          marketplace and auction host for historical moments
        </div>
        <div className="h-[2px] bg-[#e6ecf180] w-full my-8" />

        <div className="text-base mb-6">Token distribution</div>
        <div className="text-base font-normal opacity-90 mb-6">
          Of the total 45,000,000 Aspen tokens, the Aspen Labs team has been
          allocated 10,000,000 which will be vested and released over a 5 year
          period. The Aspen Foundation is allocated 5,000,000 tokens for
          promotional and development activities. The remaining 30,000,000
          tokens will be released via staking in the Hypersphere.
        </div>

        <img
          src={token_distributioon}
          className="w-full h-auto mb-6"
          alt=""
        ></img>

        <div className="text-base mb-6">Trading Fees</div>
        <div className="text-base font-normal opacity-90 mb-6">
          The trading fee within the Hypersphere exchange is 0.20%. 3/4 of the
          fee is distributed to users based on the proportion of the total
          sphere they account for. The remaining 1/4 is distributed to the Aspen
          treasury.
        </div>

        <div className="text-base mb-6">Token Sales</div>
        <div className="text-base font-normal opacity-90 mb-6">
          Aspen Labs will not conduct an Initial Coin Offering. All tokens are
          given to our users via staking.
        </div>

        <div className="text-base mb-6">Smart Contracts & Wallets</div>
        <div className="text-base font-normal opacity-90 mb-6">
          Founder wallet : 0x8f7e8701e936EbbaeEf37940b869550F3F695457
        </div>
        <div className="text-base font-normal opacity-90 mb-6">
          Founder wallet: 0xAc22D64Dd3B94D786192fd6D864bd40d3Be65A8f
        </div>
        <div className="text-base font-normal opacity-90 mb-6">
          Foundation Wallet: 0xD584BfF7BA1b7B5C0BC5647897515A4eED734cd6
        </div>
        <div className="text-base font-normal opacity-90 mb-6">
          Historical NFT Contract Address:
          0x23E42499BE164a35D3fc5A1EA9Db84d391E95c50
        </div>
        <div className="text-base font-normal opacity-90 mb-6">
          Aspen Token Contract Address:
          0x3967528a89fB0f0f00D76d9C5FEd8bdCc40Ba9d6
        </div>
      </div>
    </div>
  );
};

export default Disclosure;
