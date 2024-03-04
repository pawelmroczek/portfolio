import Image from "next/image";
import Link from "next/link";

const NavAbove = ({ links }) => {
  return (
    <div className="hidden md:flex justify-between items-center">
      <div className="lg:w-1/4">
        {/* <Link href="#" passHref>
          <Image src="/logo.png" alt="ITMakeovers" width={60} height={70} />
        </Link> */}
      </div>
      {/* <div className="flex gap-10 pl-4  xl:w-3/4 justify-between"> */}
        <div className="flex gap-8 lg:gap-16 items-center text-center w-1/2 justify-center">
          {links.map((link, index) => (
            <div key={link.name}>
              <a
                href={link.link}
                className={`block text-xl font-light text-black  pb-[6px] group relative hover:text-gray-800 transition-color duration-300 ease-in-out`}
              >
                {link.name}
                <span className="absolute inset-x-0 bottom-[-2px] h-0.5 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </a>
            </div>
          ))}
        </div>
        <div className="flex w-1/4 justify-end">
          <a className="bg-[#14213d] text-[#FFF] shadow-sm shadow-[#666] transition-all duration-500 hover:bg-gray-200 hover:text-gray-900 py-2 px-10 rounded-2xl text-center cursor-pointer" href="#kontakt">
            Skontaktuj się
          </a>
          {/* <Image
            src={"/darkMode.svg"}
            alt="dark mode icon"
            width={30}
            height={30}
            className="ml-10"
          /> */}
        </div>
      </div>
    // </div>
  );
};

export default NavAbove;
