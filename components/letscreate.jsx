export default function LetsCreateSection() {
  const cards = [
    {
      title: "BESONG STRATEGY",
      subtitle: "NEXT LEVEL TRANSFORMATION",
      desc: "Transform your business with BESONG. We cut costs, improve efficiency, and drive growth through workflows and collaboration.",
      img: "/aadmi.png",
      btn: "EXPLORE BESONG STRATEGY"
    },
    {
      title: "BESONG PROCURE",
      subtitle: "STREAMLINE YOUR SOURCING",
      desc: "Your trusted sourcing partner for seamless, sustainable, and agile solutions to keep your operations efficient and competitive.",
      img: "/ai.png",
      btn: "PARTNER WITH US TODAY"
    },
    {
      title: "BESONG SUPPLY",
      subtitle: "INTEGRATED OPERATION",
      desc: "BESONG provides seamless ocean, air, ground freight, and LCL shipping solutions, simplifying logistics.",
      img: "/truck.png",
      btn: "CONTACT US"
    },
    {
      title: "BESONG FREIGHT",
      subtitle: "FUTURE-READY SCM",
      desc: "Simplify your supply chain with BESONG. Gain visibility and integrate seamlessly into global logistics.",
      img: "/ship.png",
      btn: "DISCOVER BESONG TODAY"
    }
  ];

  return (
    <section className="bg-[#eef6ff] py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* TOP HEADING */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-4">
            <img src="/tie.png" className="w-12 " />
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700">
            Let’s Create
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
            Simplify your supply chain today with our tailored outsourcing solutions.
            Whether you’re looking to save time, cut costs, or improve supplier relationships,
            we’ve got you covered.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              {/* IMAGE */}
              <img
                src={card.img}
                alt={card.title}
                className="h-44 w-full object-cover"
              />

              {/* CONTENT */}
              <div className="p-5 flex flex-col flex-grow">
                <h4 className="text-blue-700 font-extrabold text-lg">
                  {card.title}
                </h4>

                <p className="text-xs font-semibold mt-2 text-gray-800 uppercase">
                  {card.subtitle}
                </p>

                <p className="text-sm text-gray-600 mt-3 flex-grow">
                  {card.desc}
                </p>

                <button className="mt-5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2 px-4 rounded">
                  {card.btn} →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
