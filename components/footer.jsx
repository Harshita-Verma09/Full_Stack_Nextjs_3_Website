export default function Footer() {
    return (
        <footer
            className="relative bg-cover bg-center text-white"
            style={{ backgroundImage: "url('/virus.png')" }}
        >
            {/* Dark Overlay */}
            <div className="bg-black/70 px-10 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">

                    {/* Column 1 */}
                    <div>
                        <h3 className="font-semibold mb-4">Procurement Consulting</h3>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li>Sourcing & Procurement</li>
                            <li>Demand & Supply Planning</li>
                            <li>Strategic Sourcing</li>
                            <li>Cost Optimization</li>
                            <li>Procurement Transformation</li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h3 className="font-semibold mb-4">Supply Chain Consulting</h3>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li>Supply Chain Strategy</li>
                            <li>Inventory Optimization</li>
                            <li>Network Optimization</li>
                            <li>Collaborative Planning</li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h3 className="font-semibold mb-4">iPROCURE</h3>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li>Direct Procurement</li>
                            <li>Indirect Procurement</li>
                            <li>Source-to-Pay</li>
                            <li>Contract Management</li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h3 className="font-semibold mb-4">iFREIGHT</h3>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li>Freight Shipping</li>
                            <li>Logistics Services</li>
                            <li>Transportation Solutions</li>
                        </ul>
                    </div>

                    {/* Column 5 */}
                    <div>
                        <h3 className="font-semibold mb-4">Managed Services</h3>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li>Procurement Outsourcing</li>
                            <li>Strategic Sourcing</li>
                            <li>Category Management</li>
                        </ul>
                    </div>

                    {/* Column 6 */}
                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm opacity-80 mb-4">
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Contact Us</li>
                        </ul>

                        {/* Social Icons */}
                        <div className="flex gap-3 mb-4">
                            <span className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">▶</span>
                            <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">f</span>
                            <span className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center">in</span>
                        </div>

                        {/* Subscribe */}
                        <div className="flex max-w-xs">
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="px-2 py-1 text-black text-sm flex-1"
                            />
                            <button className="bg-orange-500 px-4 text-sm font-medium whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>

                    </div>

                </div>
            </div>

            {/* Bottom Blue Bar */}
            <div className="h-14 bg-blue-600"></div>
        </footer>
    );
}
