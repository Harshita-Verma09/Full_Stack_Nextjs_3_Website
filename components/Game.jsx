export default function ProcurementGameSection() {
    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4">

                {/* ===== TOP HEADING ===== */}
                <div className="text-center max-w-4xl mx-auto mb-14">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-blue-600 mb-3 flex justify-center items-center gap-2">
                        <span className="text-orange-500">⟲</span>
                        Procurement And Supply Chain Is Our Game
                    </h2>

                    <p className="text-gray-600 text-sm md:text-base">
                        At BESONG, we transform supply chains with resilience, agility,
                        and sustainability. Our strategies deliver efficiency, results,
                        and lasting impact for businesses globally.
                    </p>
                </div>

                {/* ===== THREE IMAGE CARDS ===== */}
                <div className="grid md:grid-cols-3 gap-8 mb-10">

                    {/* CARD 1 */}
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden border">
                        <img
                            src="/truck2.png"
                            alt="Who is Besong"
                            className="w-full h-56 object-cover"
                        />

                        <div className="p-5">
                            <p className="text-orange-500 text-xs font-bold mb-2">
                                WHO IS BESONG?
                            </p>
                            <p className="text-sm text-gray-700 mb-4">
                                BESONG builds partnerships to drive ROI and long-term growth,
                                helping businesses achieve their goals with future-ready solutions.
                            </p>

                            <button className="bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded">
                                UNLOCK YOUR BUSINESS'S FULL POTENTIAL →
                            </button>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden border">
                        <img
                            src="/metting2.png"
                            alt="Proven Expertise"
                            className="w-full h-56 object-cover"
                        />

                        <div className="p-5">
                            <p className="text-orange-500 text-xs font-bold mb-2">
                                PROVEN EXPERTISE
                            </p>
                            <p className="text-sm text-gray-700 mb-4">
                                Our passionate team averages 26 years of experience,
                                providing insights and support needed to stay ahead.
                            </p>

                            <button className="bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded">
                                DISCOVER HOW WE ADD VALUE →
                            </button>
                        </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden border">
                        <img
                            src="/aadmies.png"
                            alt="Top Supplier Sourcing"
                            className="w-full h-56 object-cover"
                        />

                        <div className="p-5">
                            <p className="text-orange-500 text-xs font-bold mb-2">
                                TOP SUPPLIER SOURCING
                            </p>
                            <p className="text-sm text-gray-700 mb-4">
                                Streamline your supply chain with BESONG. Source materials,
                                cut costs, and boost ROI across industries.
                            </p>

                            <button className="bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded">
                                PARTNER WITH US TODAY →
                            </button>
                        </div>
                    </div>

                </div>

                {/* ===== CENTER CTA BUTTON ===== */}
                <div className="flex justify-center mb-20">
                    <button className="bg-orange-500 text-white font-semibold text-sm px-6 py-3 rounded">
                        CONNECT WITH BESONG TODAY →
                    </button>
                </div>

                {/* ===== BLUE ACTION BAR ===== */}
                <div className="bg-blue-600 rounded-xl grid md:grid-cols-4 gap-6 p-8 text-white">

                    {[
                        {
                            title: "Ask Us",
                            text: "Send us your question(s)"
                        },
                        {
                            title: "RFP",
                            text: "Request for a business proposal"
                        },
                        {
                            title: "Feedback",
                            text: "Share your thoughts and suggestions"
                        },
                        {
                            title: "Speak to an Expert",
                            text: "Schedule a consult with a specialist"
                        }
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="border border-white/40 rounded-lg p-6 text-center hover:bg-white/10 transition"
                        >
                            <div className="text-3xl mb-3">☰</div>
                            <h4 className="font-bold mb-2">{item.title}</h4>
                            <p className="text-sm opacity-90">{item.text}</p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}
