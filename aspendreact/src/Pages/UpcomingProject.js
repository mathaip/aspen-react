import HeaderNew from "../Components/HeaderNew";

const UpcomingProject = () => {
  return (
    <div className="resource-container w-screen min-h-screen text-[14px] font-medium bg-black text-white tracking-[1.4px] font-Montserrat pb-[60px]">
      <div className="py-[33px]">
        <HeaderNew />
      </div>
      <div className="w-full md:w-[80%] mx-auto bg-[#1A1A20] rounded-md py-10 px-20 leading-[1.625]">
        <div className="text-[32px] font-medium leading-[1.5]">
          Upcoming Projects
        </div>
        <div className="mt-2 opacity-90 text-base font-normal">
          If you want to collaborate
        </div>
        <div className="h-[2px] bg-[#e6ecf180] w-full my-8" />

        <div className="text-2xl mb-6">We are interested</div>
        <div className="text-base font-normal opacity-90 mb-6">
          If you or your team are interested in developing a project in
          conjunction with Aspen Labs or wish to receive Aspen Foundation
          support.
        </div>
        <div className="text-base font-normal opacity-90">
          Fill out this
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScqzCaBUHEcS36Z1k3XZvT5v2PmB9QFTZU9epTtkOiaysqvxQ/viewform?usp=sf_link"
            className="text-[#5ce1e6] hover:text-[#5ce1e6] mx-2"
          >
            quick form
          </a>
          and we will get back to you!
        </div>
      </div>
    </div>
  );
};

export default UpcomingProject;
