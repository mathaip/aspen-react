import HeaderNew from "../Components/HeaderNew";
import introducing_image from "../images/assets/introducing aspen 2.png";

const Introduction = () => {
  return (
    <div className="resource-container w-screen min-h-screen text-[14px] font-medium bg-black text-white tracking-[1.4px] font-Montserrat pb-[60px]">
      <div className="py-[33px]">
        <HeaderNew />
      </div>
      <div className="w-full md:w-[80%] mx-auto bg-[#1A1A20] rounded-md py-10 px-20 leading-[1.625]">

        <div className="text-[32px] font-medium leading-[1.5]">
          Introduction
        </div>
        <div className="mt-2 opacity-90 text-base font-normal">
          The future of decentralized finance.
        </div>
        <div className="h-[2px] bg-[#e6ecf180] w-full my-8" />
        
        <img
          src={introducing_image}
          className="w-full h-auto mb-6"
          alt=""
        ></img>
        <div className="text-base font-normal opacity-90">
          Aspen Labs is decentralized application company. Within the framework
          of our first roadmap we are engaged in constructing the Hypersphere, a
          single-pool, cross-chain decentralized exchange. dLEND our social
          finance application that allows digital asset holders to lend to
          qualified home owners and students. And finally dCOLLECT an NFT
          marketplace and auction host for historical moments
        </div>
        <div className="h-[2px] bg-[#e6ecf180] w-full my-8" />

        <div className="text-2xl mb-6">Features</div>

        <div className="text-base mb-6">Trade</div>
        <div className="text-base font-normal opacity-90">
          The Hypersphere is an automated market maker (AMM) that allows
          theoretically an infinite combination of swaps to occurs. So pairs,
          trios and quads are possible.
        </div>

        <div className="text-base mb-6">Yield Farm</div>
        <div className="text-base font-normal opacity-90">
          The Hypersphere can behave as a yield farm as well allowing
          stake-holders to earn the trading fees and Aspen token as reward.
          Other projects can releasing their coins via the Hypersphere as well
          to enable multi-vector earning potential.
        </div>

        <div className="text-base mb-6">Lending</div>
        <div className="text-base font-normal opacity-90">
          dLEND is a platform that allows digital asset holders to earn by
          socially financing mortgages and student loans.
        </div>
        
        <div className="text-base mb-6">NFTs</div>
        <div className="text-base font-normal opacity-90">
          dCOLLECT allows users to buy, sell and auction the one-of-a-kind
          historical NFTs sold by Aspen Labs.
        </div>

        <div className="h-[2px] bg-[#e6ecf180] w-full my-8" />
        
        <div className="text-2xl mb-6">Key Project Information</div>

        <div className="text-base font-normal opacity-90 mb-6">
          <b>Token</b>: Aspen Governance Token
        </div>
        <div className="text-base font-normal opacity-90 mb-6">
          <b>Symbol</b>: ASPEN
        </div>
        <div className="text-base font-normal opacity-90 mb-6">
          <b>Smart Contract Addresses</b>:
          0x3967528a89fB0f0f00D76d9C5FEd8bdCc40Ba9d6
        </div>
      </div>
    </div>
  );
};

export default Introduction;
