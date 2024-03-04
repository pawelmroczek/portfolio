import Image from "next/image";
import TypeWriter from "../TypeWritter";

const Header = () => {
  return (
    <header
      className=" bg-no-repeat bg-contain mt-10  md:mt-20"
      style={{
        backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="27" height="325" viewBox="0 0 27 325" fill="none"><path d="M-92.8183 323.495C19.1215 230.345 70.3613 134.389 -22.3097 1.02426" stroke="%23fca311" stroke-width="2"/></svg>')`,
      }}
    >
      <div
        className="flex justify-center items-center flex-col bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="63" height="417" viewBox="0 0 63 417" fill="none"><path d="M-90.6496 415.557C53.3381 295.775 119.288 172.434 0.246952 1.13447" stroke="%23fca311" stroke-width="2"/></svg>')`,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="63"
          height="417"
          viewBox="0 0 63 417"
          fill="none"
          className="absolute right-0 animate-pulse"
        >
          <path
            d="M152.846 1.00012C9.30029 121.311 -56.1956 244.894 63.4757 415.754"
            stroke="#fca311"
            stroke-width="2"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="325"
          viewBox="0 0 27 325"
          fill="none"
          className="absolute right-0 animate-pulse"
        >
          <path
            d="M119.203 1.05355C7.60649 94.6149 -43.2798 190.759 49.8816 323.782"
            stroke="#fca311"
            stroke-width="2"
          />
        </svg>

        <div className="flex md:flex-row flex-col items-center justify-center w-4/5 mx-auto">
          <Image
            src="/me.jpg"
            alt="Moje zdjęcie"
            className="rounded-full mr-10 md:w-1/4"
            width={1524}
            height={1524}
          />
          <div className="">
            <span className="uppercase text-5xl">Cześć,</span>
            <h1 className="text-3xl md:text-6xl font-bold">
              Jestem{" "}
              <span className="text-[#fca311]">
                <TypeWriter
                  text={["Paweł Mroczek", "Frontend Developerem"]}
                  delay={150}
                />
              </span>
            </h1>
            <div className="absolute left-0 z-[-100] hidden md:block"></div>
            <p className="text-2xl w-3/4 mt-10 mb-12">
              👨🏻‍💻 Jestem{" "}
              <span className="text-[#fca311] font-semibold">
                Frontend Developerem
              </span>
              , który kocha pracować w zespole i poszukuję aktualnie nowych
              możliwości rozwoju zawodowego.
            </p>

            <a
              href="mailto:pawel.mroczekpl@gmail.com"
              className="bg-[#fca311] hover:bg-orange-500 transition-all duration-500 text-white font-bold rounded-sm py-3 px-6 "
            >
              Zatrudnij mnie!
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
