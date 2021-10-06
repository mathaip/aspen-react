import HeaderNew from "../Components/HeaderNew";

const Help = () => {
  return (
    <div className="resource-container w-screen min-h-screen text-[14px] font-medium bg-black text-white tracking-[1.4px] font-Montserrat pb-[60px]">
      <div className="py-[33px]">
        <HeaderNew />
      </div>
      <div className="w-full md:w-[80%] mx-auto bg-[#1A1A20] rounded-md py-10 px-20 leading-[1.625]">
        <div className="text-[32px] font-medium leading-[1.5]">Help</div>
        <div className="mt-2 opacity-90 text-base font-normal"></div>
        <div className="h-[2px] bg-[#e6ecf180] w-full my-8" />

        <div className="text-2xl mb-6">What is Aspen Labs</div>
        <div className="text-base font-normal opacity-90">
          Aspen Labs is a decentralized applications company that specializes in
          building decentralized finance applications that connect the world of
          digital assets and traditional finance.
        </div>
        <div className="h-[2px] bg-[#e6ecf180] w-full my-8" />

        <div className="text-2xl mb-6">How can I get Aspen?</div>
        <div className="text-base font-normal opacity-90">
          Aspen is a reward for staking into the Hypersphere, the initial rate
          of dispensation is 3,000,000 per year. The distribution of the token
          is halved every 3 years. The max total supply is 45,000,000. Before
          the Hypersphere is released Aspen will have a staking mechanism on our
          website to allow for early adopters to earn Aspen tokens. If you wish
          to know more, check out this
          <a
            href="https://aspenlabs1.medium.com/how-aspen-token-will-be-distributed-877c8c1350fd"
            className="text-[#5ce1e6] hover:text-[#5ce1e6] mx-2"
          >
            article
          </a>
        </div>
        <div className="h-[2px] bg-[#e6ecf180] w-full my-8" />

        <div className="text-2xl mb-6">Where can Aspen be traded?</div>
        <div className="text-base font-normal opacity-90">
          Aspen is an ERC-20 it can be traded on any decentralized exchange or
          on our Hypersphere. We are working to have the token added to more
          exchanges and will keep the community updated as this progresses.
        </div>
        <div className="h-[2px] bg-[#e6ecf180] w-full my-8" />

        <div className="text-2xl mb-6">How does the Hypersphere work?</div>
        <div className="text-base font-normal opacity-90">
          The Hypersphere works like any other decentralized exchange, whereby
          you connect your web-based wallet (Metamask, Trustwallet etc...) and
          either trade tokens or deposit tokens to earn staking rewards. The
          benefit of the Hypersphere is that you only need to deposit one token
          not both sides of a pair. We take care of the rest.
        </div>
        <div className="h-[2px] bg-[#e6ecf180] w-full my-8" />

        <div className="text-2xl mb-6">
          Are Aspen's Historical NFTs compatible on other marketplaces?
        </div>
        <div className="text-base font-normal opacity-90">
          Yes! Our goal is to maximize user autonomy. Our NFTs use ERC-1155 as
          the base protocol and should be compatible with any major marketplace
          such as
          <a
            href="https://opensea.io/"
            className="text-[#5ce1e6] hover:text-[#5ce1e6] mx-2"
          >
            opensea.io
          </a>
          . You can also list them on our marketplace, there are zero fees and
          there never will be in the future.
        </div>
        <div className="h-[2px] bg-[#e6ecf180] w-full my-8" />

        <div className="text-2xl mb-6">When will dLEND release?</div>
        <div className="text-base font-normal opacity-90">
          dLEND is the protocol that will require the most infrastructure to
          create. We will have to ensure compliance in any country we operate.
          For this reason we are hoping to release the dLEND platform at the end
          of our 2-year roadmap, currently. You can learn more about dLEND
          <a
            href="https://aspenlabs1.medium.com/what-is-dlend-7370c3c6b03"
            className="text-[#5ce1e6] hover:text-[#5ce1e6] mx-2"
          >
            here
          </a>
          .
        </div>
        <div className="h-[2px] bg-[#e6ecf180] w-full my-8" />

        <div className="text-2xl mb-6">When will the Hypersphere release?</div>
        <div className="text-base font-normal opacity-90">
          The Hypersphere is scheduled for release in late August or early
          September depending on the timing of the release of Moonbeam on the
          Polkadot network. We are hoping to use Moonbeam to ensure cross-chain
          compatibility and very low network fees for our users. You can read
          more about the Hypersphere
          <a
            href="https://aspenlabs1.medium.com/what-is-the-hypersphere-c2c2866add45"
            className="text-[#5ce1e6] hover:text-[#5ce1e6] mx-2"
          >
            here
          </a>
          .
        </div>
        <div className="h-[2px] bg-[#e6ecf180] w-full my-8" />

        <div className="text-2xl mb-6">How will Aspen be governed?</div>
        <div className="text-base font-normal opacity-90">
          Aspen is intended to be governed and directed by the community
          eventually. Our goal as Aspen Labs is to build a robust community
          whereby new developers can be supported to help build out our
          ecosystem.
        </div>
        <div className="text-base font-normal opacity-90">
          In terms of the governance Aspen will have a constitution that will
          outline clearly the rights of all users and the proposal and voting
          mechanism cannot violate said rights. Each Aspen token represents one
          vote in our system. Even fractionalized holders will be allowed to
          vote according to how much of an Aspen token they hold.
        </div>
      </div>
    </div>
  );
};

export default Help;
