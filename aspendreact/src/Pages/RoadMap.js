import HeaderNew from "../Components/HeaderNew";
import roadmap from "../images/assets/roadmap.png";

const RoadMap = () => {
  return (
    <div className="resource-container w-screen min-h-screen text-[14px] font-medium bg-black text-white tracking-[1.4px] font-Montserrat pb-[60px]">
      <div className="py-[33px]">
        <HeaderNew />
      </div>
      <div className="w-full md:w-[80%] mx-auto bg-[#1A1A20] rounded-md py-10 px-20 leading-[1.625]">
        <div className="text-[32px] font-medium leading-[1.5]">Roadmap</div>
        <div className="mt-2 opacity-90 text-base font-normal"></div>
        <div className="h-[2px] bg-[#e6ecf180] w-full my-8" />

        <ul style={{listStyleType:'disc'}} className="mb-6">
          <li>
            <div className="text-base font-normal opacity-90">
              <b>Q2.2021</b>- release of dCOLLECT historical NFTs
            </div>
          </li>
          <li>
            <div className="text-base font-normal opacity-90">
              <b>Q2.2021</b>- release of Aspen token via bounty and staking
            </div>
          </li>
          <li>
            <div className="text-base font-normal opacity-90">
              <b>Q3.2021</b>- Whitepaper 1.0
            </div>
          </li>
          <li>
            <div className="text-base font-normal opacity-90">
              <b>Q3.2021</b>- Hypersphere testnet
            </div>
          </li>
          <li>
            <div className="text-base font-normal opacity-90">
              <b>Q3.2021</b>- Hypersphere beta release
            </div>
          </li>
          <li>
            <div className="text-base font-normal opacity-90">
              <b>Q3.2021</b>- Hypersphere code release and auditing
            </div>
          </li>
          <li>
            <div className="text-base font-normal opacity-90">
              <b>Q4.2021</b>- Hypersphere alpha release
            </div>
          </li>
          <li>
            <div className="text-base font-normal opacity-90">
              <b>Q1.2022</b>- Hypersphere additional features
            </div>
          </li>
          <li>
            <div className="text-base font-normal opacity-90">
              <b>Q2.2022</b>- dLEND research & development
            </div>
          </li>
          <li>
            <div className="text-base font-normal opacity-90">
              <b>Q3.2022</b>- Research & development of payment application for businesses and customers
            </div>
          </li>
          <li>
            <div className="text-base font-normal opacity-90">
              <b>Q4.2022</b>- Limited launch of dLEND application
            </div>
          </li>
          <li>
            <div className="text-base font-normal opacity-90">
              <b>Q1.2023</b>- Launch of payment application for businesses 
            </div>
          </li>
        </ul>
        <img
          src={roadmap}
          className="w-[218px] h-auto mb-6 mx-auto"
          alt=""
        ></img>
      </div>
    </div>
  );
};

export default RoadMap;
