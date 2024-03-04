import Image from "next/image";

const Tile = ({ svg, color, left,title,text }) => {
  return (
    <div className={`flex ${left ? "flex-row md:items-start" : "flex-row-reverse md:items-end"} p-3 gap-10 md:flex-col `}>
      <div className={`${color === "black" ? "bg-black" : "bg-[#2FAB73]"} p-6 rounded-2xl shadow-md shadow-[#777] h-fit flex justify-center items-center z-10`}>
        {svg}
      </div>
      <div className={`${left ? "text-right md:text-left" : "text-left md:text-right"} max-w-[240px]`}>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-sm mt-3 leading-7 ">
        {text}
        </p>
      </div>
    </div>
  );
};

export default Tile;
