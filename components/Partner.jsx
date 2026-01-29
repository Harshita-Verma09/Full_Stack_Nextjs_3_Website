export default function ProcurementEfficiencySection() {
    return (
        <section className="bg-[#f4fbff] py-20">
            <div className="max-w-7xl mx-auto px-4">

                {/* TOP HEADING */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-3">
                        Simplify Your Business With One Partner
                    </h2>
                    <p className="text-gray-600 max-w-4xl mx-auto text-sm md:text-base">
                        Manage your entire procurement, freight, distribution, and supply chain
                        with a single, integrated system. From Ecommerce and Financials to
                        Inventory Management and CRM, our platform is designed to streamline
                        operations, boost efficiency, and drive growth.
                    </p>
                </div>

                {/* TOP SMALL CARDS */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
                    {[
                        {
                            title: "Order",
                            text: "Capture orders anywhere—online, phone, or EDI—and connect with customers their way, effortlessly."
                        },
                        {
                            title: "Warehouse",
                            text: "Stay in control of inventory with real-time updates and optimize workflows."
                        },
                        {
                            title: "Source",
                            text: "Get full visibility into suppliers and purchasing to make smarter decisions."
                        },
                        {
                            title: "Fulfill",
                            text: "Ensure fast delivery, lower costs, and delight customers with efficient fulfillment."
                        },
                        {
                            title: "Procurement",
                            text: "Refine procurement strategies while reducing inefficiencies."
                        }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-5 rounded-xl shadow-sm">
                            <h4 className="text-blue-600 font-bold mb-2">{item.title}</h4>
                            <p className="text-sm text-gray-600 mb-3">{item.text}</p>
                            <span className="text-orange-500 text-xs font-semibold cursor-pointer">
                                LEARN MORE
                            </span>
                        </div>
                    ))}
                </div>

                {/* BIG BLUE BORDER SECTION */}
                <div className="border-2 border-dashed border-blue-500 rounded-xl p-8">

                    {/* SECTION TITLE */}
                    <h3 className="text-xl md:text-2xl font-extrabold text-blue-600 mb-8">
                        Innovating Procurement And Supply Chains Boosts Efficiency,
                        Resilience, And Scalability Through Improved Collaboration And Control.
                    </h3>

                    <div className="grid lg:grid-cols-3 gap-8">

                        {/* LEFT IMAGE CARDS */}
                        <div className="lg:col-span-2 grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "INCREASED PROFITABILITY",
                                    img: "/box.png",
                                    text: "Reduce costs associated with planning and executing supply chain processes."
                                },
                                {
                                    title: "IMPROVED CASH FLOW",
                                    img: "/trafficman.png",
                                    text: "Gain a better understanding of demand and inventory planning."
                                },
                                {
                                    title: "PROACTIVE MANAGEMENT",
                                    img: "/meting.png",
                                    text: "Leverage predictive analytics to identify risks and develop response strategies."
                                }
                            ].map((item, i) => (
                                <div key={i}>
                                    <p className="text-orange-500 text-xs font-bold mb-2">
                                        {item.title}
                                    </p>
                                    <img
                                        src={item.img}
                                        className="rounded-lg mb-3 w-full h-44 object-cover"
                                    />
                                    <p className="text-sm text-gray-600">
                                        {item.text}
                                    </p>
                                </div>
                            ))}

                            {/* BUTTONS */}
                            <div className="md:col-span-3 flex flex-wrap gap-4 mt-6">
                                <button className="bg-orange-500 text-white text-xs font-semibold px-4 py-2 rounded">
                                    REQUEST A FREE CONSULTATION →
                                </button>
                                <button className="bg-orange-500 text-white text-xs font-semibold px-4 py-2 rounded">
                                    LEARN BESONG PROCURE →
                                </button>
                                <button className="bg-orange-500 text-white text-xs font-semibold px-4 py-2 rounded">
                                    DISCOVER BESONG STRATEGY →
                                </button>
                            </div>
                        </div>

                        {/* RIGHT BLUE BOX */}
                        <div className="bg-blue-600 rounded-xl p-6 text-white flex flex-col justify-between">
                            <div>
                                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <span className="text-2xl">☰</span> 24/7 Personal Assistance
                                </h4>
                                <p className="text-sm mb-4">
                                    At BESONG, we’re revolutionizing procurement and supply chain
                                    management. Our solutions enhance efficiency, strengthen
                                    resilience, and drive collaboration.
                                </p>

                                <div className="bg-white text-gray-700 p-4 rounded mb-3 text-sm">
                                    Outsource your procurement needs with BESONG. Our experts handle
                                    sourcing, supplier relations, and strategies so your team can
                                    focus on growth.
                                </div>

                                <div className="bg-white text-gray-700 p-4 rounded text-sm">
                                    BESONG helps you manage and optimize your global supply chain
                                    from supplier to customer.
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 mt-6">
                                <button className="bg-white text-blue-600 font-semibold text-xs py-2 rounded">
                                    GET STARTED WITH BESONG TODAY →
                                </button>
                                <button className="border border-white text-white font-semibold text-xs py-2 rounded">
                                    TRANSFORM YOUR SUPPLY CHAIN →
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
