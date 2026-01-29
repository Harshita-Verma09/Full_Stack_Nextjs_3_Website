export default function StrategyAndTransformationSection() {
    return (
        <section className="bg-[#f4fbff] py-16">
            <div className="container-besong">

                {/* ===== TOP HEADING ===== */}
                <div className="max-w-5xl mx-auto text-center mb-14 px-4">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <img src="/pillers.png" className="w-8 md:w-10" />
                        <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700">
                            Strategy And Transformation
                        </h2>
                        <img src="/pillers.png" className="w-8 md:w-10" />
                    </div>

                    <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
                        Save money and boost quality with direct sourcing from emerging markets.
                        Our supply chain experts identify, qualify, and secure competitive,
                        high-performing products tailored to your business needs.
                    </p>
                </div>

                {/* ===== BLUE STRATEGY SECTION ===== */}
                <div className="w-full bg-blue-100 py-12">

                    <div className="max-w-4xl mx-auto px-4 mb-12 text-center">
                        <h3 className="font-bold text-lg mb-4 text-black" >
                            Global Sourcing & Supply Chain Services Worldwide
                        </h3>

                        <div className="flex justify-center gap-6 md:gap-10 border-b border-blue-700 text-sm">
                            <button className="pb-3 text-gray-500 font-semibold">
                                Industry Leading Software
                            </button>
                            <button className="pb-3 px-6 bg-blue-600 text-white rounded-t font-semibold">
                                Strategy
                            </button>
                            <button className="pb-3 text-gray-500 font-semibold">
                                Managed Services
                            </button>
                        </div>

                        <p className="text-sm text-gray-600 mt-6 max-w-3xl mx-auto">
                            BESONG is transforming what procurement and supply chain teams can achieve.
                            Our innovative strategies empower enterprises to enhance efficiency and growth.
                        </p>
                    </div>

                    {/* TWO COLUMNS */}
                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 px-4">
                        <div>
                            <h4 className="text-xl font-bold text-blue-700 mb-3">
                                Build a Resilient Supply Chain
                            </h4>
                            <p className="text-gray-600 text-sm">
                                We specialize in efficient procurement outsourcing from sourcing to logistics.
                            </p>
                            <p className="text-orange-500 font-semibold mt-3 text-sm">
                                OPTIMIZE YOUR SUPPLY CHAIN TODAY →
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold text-blue-700 mb-3">
                                Your Trusted Partner in Procurement
                            </h4>
                            <p className="text-gray-600 text-sm">
                                Discover tailored solutions to streamline procurement.
                            </p>
                            <p className="text-orange-500 font-semibold mt-3 text-sm">
                                BE READY FOR TOMORROW’S CHALLENGES →
                            </p>
                        </div>
                    </div>
                </div>

                {/* ===== PROCUREMENT GRID ===== */}
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start mt-20 px-4">

                    <div>
                        <h3 className="text-2xl font-bold text-blue-700 mb-6">
                            Procurement, Strategy, Supply Chain & Logistics
                            <span className="block text-orange-500 text-lg">
                                Control Cost. Eliminate Risk. Execute.
                            </span>
                        </h3>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                { title: "STRATEGIC SOURCING", text: "Find the best suppliers.", img: "/books.png" },
                                { title: "INVENTORY MANAGEMENT", text: "Ensure just-in-time delivery.", img: "/man.png" },
                                { title: "SUPPLIER MANAGEMENT", text: "Build strong partnerships.", img: "/progress.png" },
                                { title: "RISK MANAGEMENT", text: "Mitigate disruptions.", img: "/redroom.png" },
                            ].map((item) => (
                                <div key={item.title} className="relative rounded overflow-hidden h-48">
                                    <img src={item.img} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/50" />
                                    <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
                                        <p className="text-sm">{item.text}</p>
                                        <p className="text-orange-400 text-xs font-semibold">{item.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="bg-blue-600 rounded-lg p-6 mt-20 relative text-center">

                        {/* MONITOR IMAGE */}
                        <img
                            src="/monitor.png"
                            className="mx-auto relative z-10 max-w-full"
                        />
                        {/* FLOWER */}
                        <img
                            src="/flower.png"
                            className="absolute bottom-4 left-4 w-16 opacity-90"
                        />
                    </div>

                </div>
                {/* TEXT BELOW MONITOR */}
                <div className="mt-5 px-4 text-center">
                    <p className="text-blue-600 font-bold 
                text-base sm:text-lg md:text-xl lg:text-2xl
                ">
                        Unmatched Expertise and a Global Network in Sourcing and Supply Chain Solutions
                    </p>

                    <p className="text-black mt-4
                text-sm sm:text-base md:text-lg
                leading-relaxed mx-50">
                        With over 26 years of proven experience and a powerful network, we deliver intelligent, efficient supply chain and sourcing solutions that redefine success.
                        Spend less time worrying about procurement and more time scaling your business.
                        Our end-to-end solutions save you time and resources.
                    </p>
                </div>

                ===== WHY / WHAT SECTION =====
                <div className="w-full bg-[#eef6ff] py-16 mt-1">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4">

                        <div className="bg-blue-200 p-8 rounded">
                            <h3 className="text-2xl font-extrabold text-blue-700 mb-2">
                                Why <span className="text-orange-500">BESONG?</span>
                            </h3>
                            <p className="text-blue-600 font-semibold mb-4">
                                Reinventing Possibilities with BESONG
                            </p>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                At BESONG, we transform more than supply chains—we redefine industries. Together, we've reshaped the procurement strategies behind the special effects that amaze, the stadiums that unite, the food we share, the clothes we wear, the cars we drive, and even the holidays we cherish. With BESONG, reinvention isn’t just possible; it’s inevitable.
                            </p>
                        </div>

                        <div className="bg-blue-200 p-8 rounded">
                            <h3 className="text-2xl font-extrabold text-blue-700 mb-2">
                                What <span className="text-orange-500">We Do</span>
                            </h3>
                            <p className="text-blue-600 font-semibold mb-4">
                                Procurement Strategy & Transformation
                            </p>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                We specialize in procurement transformation, helping businesses streamline processes, drive efficiency, and uncover hidden value even within the most challenging environments for long-term success.Call us today and discover how BESONG can redefine your supply chain and fuel your business growth.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
