import HeaderNew from "../Components/HeaderNew";
import img1 from "../images/assets/img1.png";
import img2 from "../images/assets/img2.png";
import img3 from "../images/assets/img3.png";
import img4 from "../images/assets/img4.png";
import img5 from "../images/assets/img5.png";
import img6 from "../images/assets/img6.png";
import img7 from "../images/assets/img7.png";
import img8 from "../images/assets/img8.png";
import img9 from "../images/assets/img9.png";
import img10 from "../images/assets/img10.png";

const Faqs = () => {
  return (
    <div className="resource-container w-screen min-h-screen text-[14px] font-medium bg-black text-white tracking-[1.4px] font-Montserrat pb-[60px]">
      <div className="py-[33px]">
        <HeaderNew />
      </div>
      <div className="w-full md:w-[80%] mx-auto bg-[#1A1A20] rounded-md py-10 px-20 leading-[1.625]">
        <div className="text-[32px] font-medium leading-[1.5]">FAQS</div>
        <div className="mt-2 opacity-90 text-base font-normal">
          Frequently Asked Questions & Guide on How to use Aspen's NFT platform
        </div>
        <div className="h-[2px] bg-[#e6ecf180] w-full my-8" />

        <div className="text-2xl mb-6">Using the Aspen NFT Platform</div>

        <div className="text-xl mb-6">Which Wallet Should I connect with?</div>
        <div className="text-base font-normal opacity-90 mb-6">
          Right now Aspen Labs only supports the use of the Metamask Browser
          Extension. You connect your wallet use the "connect wallet" button in
          the top right hand corner of the page. We recommend you use the Chrome
          Metamask Browser Extension. For more details you can visit
          <a
            href="https://metamask.io/"
            className="text-[#5ce1e6] hover:text-[#5ce1e6] mx-2"
          >
            https://metamask.io/
          </a>
        </div>

        <img src={img1} className="w-auto h-auto mb-6 mx-auto" alt=""></img>
        <div className="text-base font-normal text-center opacity-70 mb-6">
          Click on this button to connect Metamask wallet
        </div>

        <div className="text-xl mb-6">
          How can I purchase a Historical Pack?
        </div>
        <div className="text-base font-normal opacity-90 mb-6">
          Navigate to
          <a
            href="https://www.aspenlabs.io/Collections"
            className="text-[#5ce1e6] hover:text-[#5ce1e6] mx-2"
          >
            https://www.aspenlabs.io/Collections
          </a>
          and select the pack collection that is being released at the time.
          Make sure your wallet is connected and press the buy pack button. If
          all the packs have been been bought the button will be disabled and
          Packs Left will be 0. If you successfully purchase a pack you will be
          redirected to the NFT.
        </div>

        <img src={img2} className="w-auto h-auto mb-6 mx-auto" alt=""></img>
        <div className="text-base font-normal text-center opacity-70 mb-6">
          Click this button to purchase a pack.
        </div>

        <div className="text-xl mb-6">What cryptocurrency can I pay in?</div>
        <div className="text-base font-normal opacity-90 mb-6">
          Right now the platform only accepts payment in Etheruem. This goes for
          both the NFT market and the purchasing of packs. The price of packs
          will be listed in USD and the approximate ethereum value will be
          released on the day of the pack drop. E.g for the American Revolution
          Pack drop the price of a single pack will be 150 USD converted into
          Ethereum on the day of the drop.
        </div>

        <div className="text-xl mb-6">
          How can I offer my historical moment for sale?
        </div>
        <div className="text-base font-normal opacity-90 mb-6">
          The Owner of the NFT can offer their Historical moment for sale by
          clicking the "offer moment for sale" button. You must enter the
          minimum bid price for your moment in wei. This is the minimum
          acceptable bid. E.g If you set the minimum bid price in wei at 1000
          wei. Anyone who wants to bid will have to bid at least 1000 wei for
          their transaction to go through.
        </div>

        <img src={img3} className="w-auto h-auto mb-6 mx-auto" alt=""></img>
        <div className="text-base font-normal text-center opacity-70 mb-6">
          Enter Minimum Bid price in wei and Click the button
        </div>

        <div className="text-xl mb-6">
          How Can I remove my Historical Moment from the Market
        </div>
        <div className="text-base font-normal opacity-90 mb-6">
          If you have placed your moment for sale on the market you can remove
          your moment from the market by clicking " Remove From Market " button.
        </div>

        <img src={img4} className="w-auto h-auto mb-6 mx-auto" alt=""></img>
        <div className="text-base font-normal text-center opacity-70 mb-6">
          Click to remove moment from market
        </div>

        <div className="text-xl mb-6">
          How Can I place a bid on a Historical Moment?
        </div>
        <div className="text-base font-normal opacity-90 mb-6">
          If you would like to place a bid on a moment first look at these three
          fields to determine if should bid and how much
        </div>

        <img src={img5} className="w-auto h-auto mb-6 mx-auto" alt=""></img>

        <div className="text-base font-normal opacity-90 mb-6">
          If For Sale: false. You will not be able to bid on the moment. If the
          moment is for sale it will say For Sale: True and it will have a
          Minimum bid price that you will have to place for your transaction to
          succeed. If there is a Current Bid set e.g "Current Bid (wei): 1000" ,
          make sure your bid is higher than 1000 Wei. There can only be 1
          current bid and it is always the highest bidder in terms of wei.
          <b>
            Note: Always Check those three fields above before you place your
            bid. When your bid is place the bid amount is taken from your wallet
            and store in the smart contract
          </b>
        </div>

        <img src={img6} className="w-auto h-auto mb-6 mx-auto" alt=""></img>
        <div className="text-base font-normal text-center opacity-70 mb-6">
          Enter Your Bid in Wei and Click Bid
        </div>

        <div className="text-xl mb-6">Can I withdraw by Bid?</div>
        <div className="text-base font-normal opacity-90 mb-6">
          Yes you can withdraw your bid.
        </div>
        <div className="text-base font-normal opacity-90 mb-6">
          There are two types of Withdrawing bids
        </div>

        <div className="text-base mb-6 font-bold">
          Withdraw for Current Bidder:
        </div>
        <div className="text-base font-normal opacity-90 mb-6">
          If you are the current bidder you, which can be seen in the current
          bidder field.
        </div>

        <img src={img7} className="w-auto h-auto mb-6 mx-auto" alt=""></img>
        <div className="text-base font-normal text-center opacity-70 mb-6">
          If the address you bid with = Current Bidder
        </div>

        <div className="text-base font-normal opacity-90 mb-6">
          And you want to withdraw your bid you can do so by clicking the
          "Withdraw Current Bid" button. At this point your bid amount will be
          refunded to your wallet.
        </div>

        <img src={img8} className="w-auto h-auto mb-6 mx-auto" alt=""></img>
        <div className="text-base font-normal text-center opacity-70 mb-6">
          Current Bidder can click this to withdraw their bid
        </div>

        <div className="text-base mb-6 font-bold">
          Withdraw For Non-Current Bidders
        </div>
        <div className="text-base font-normal opacity-90 mb-6">
          This is used for all users you have bid on a moment but have had their
          bid beaten by someone else.
          <b>
            E.g If you have bid 100 wei on a moment that is for sale and someone
            else comes along and bids 200 wei. They now have the highest bid and
            are recognized as the current bidder.
          </b>
          Now you must withdraw your bid from the smart contract by clicking the
          "Withdraw Losing Bid Button.
        </div>

        <img src={img9} className="w-auto h-auto mb-6 mx-auto" alt=""></img>
        <div className="text-base font-normal text-center opacity-70 mb-6">
          Click this to Withdraw bid if you're not current bidder
        </div>

        <div className="text-xl mb-6">
          How Can I accept an Offer for my Bid?
        </div>
        <div className="text-base font-normal opacity-90 mb-6">
          If you want to accept an offer for your bid. Enter the price current
          bid into the Accept Bid textfield and click "Accept Bid". The current
          bid amount will be sent your wallet, while the ownership of the
          Historical Moment will be transferred to the current bidder.
        </div>

        <img src={img10} className="w-auto h-auto mb-6 mx-auto" alt=""></img>
        <div className="text-base font-normal text-center opacity-70 mb-6">
          Enter current bid amount and Click this to accept bid
        </div>
      </div>
    </div>
  );
};

export default Faqs;
