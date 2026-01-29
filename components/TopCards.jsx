export default function TopCards() {
  return (
    <section className="bg-white pl-10 py-10">
      <div className="container-besong">
        <p className="text-blue-600 font-semibold mb-4">
          Seamless Solutions, Endless Possibilities
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Humble, collaborative and passionate",
              text: "We don’t work from the outside looking in. At BESONG, we co-create solutions with our clients.",
              btn: "LET’S CO-CREATE"
            },
            {
              title: "Proactive, Innovative and Focused",
              text: "We build global partnerships with industry leaders, driving sourcing strategies worldwide.",
              btn: "SPEAK TO AN EXPERT"
            },
            {
              title: "Sustainable and Long-Term Value",
              text: "Focused on sustainability, we ensure your success meets today’s and tomorrow’s needs.",
              btn: "PARTNER FOR SUCCESS"
            }
          ].map((item, i) => (
            <div key={i} className="bg-blue-600 text-white p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-sm mb-4">{item.text}</p>
              <button className="bg-orange-500 px-4 py-2 text-xs rounded font-semibold">
                {item.btn}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
