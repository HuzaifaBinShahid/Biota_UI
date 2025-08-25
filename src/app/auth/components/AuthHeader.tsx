import Image from "next/image";
import BiotaLogo from "../../../../public/Biota-Logo.svg";

const AuthHeader = () => {
  return (
    <div className="w-full flex justify-between items-center py-4 pr-24 pl-7 bg-white">
      <Image
        src={BiotaLogo}
        alt="Biota Logo"
        width={82}
        height={62}
        className="w-[82px] h-[62px]"
      />
      <p className="!text-[#718096]">Growing sustainable futures together</p>
    </div>
  );
};

export default AuthHeader;
