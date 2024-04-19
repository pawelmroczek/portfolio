const Umiejetnosci = () => {

  const umiejetnosci = [
    {
      kategoria: 'Frontend',
      umiejetnosci:[
        "HTML","CSS","JavaScript","React","Next.js","Tailwind CSS"
      ]
    },
    {
      kategoria: 'Czyste programowanie',
      umiejetnosci:[
        "JavaScript","PHP","Python","Java","C++"
      ]
    },
    {
      kategoria: 'Inne',
      umiejetnosci:[
        "Git","GitHub","Trello","Figma"
      ]
    },
    {
      kategoria: "Umijętności miękkie",
      umiejetnosci:[
        "Komunikatywność","Praca w zespole","Zarządzanie czasem","Rozwiązywanie problemów"
      ]
    }
  ]

  return (
    <div>
      <h3 className="uppercase text-center text-sm text-gray-500 pt-20">
        Dumnie zdobyte w trakcie kariery zawodowej
      </h3>
      <h2 className="text-5xl text-center font-semibold mb-10 w-fit mx-auto  border-b-[6px] border-[#fca311]">
        Umiejętności 🚀
      </h2>
      <div className="flex w-full flex-col md:flex-row">
        {umiejetnosci.map((umiejetnosc, index) => (
          <div key={index} className={ `${index%2 ? "bg-[#fca311]" : "bg-white"} flex flex-col px-4 pt-4 md:w-1/2`}>
            <h3 className={`text-2xl font-semibold uppercase ${index%2==0 ? "text-[#fca311]" : "text-white"} mb-5`}>
              {umiejetnosc.kategoria} 
            </h3>
            <ul className="text-lg">
              {umiejetnosc.umiejetnosci.map((umiejetnosc, index) => (
                <li key={index} className="list-disc ml-5">
                  {umiejetnosc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Umiejetnosci;
