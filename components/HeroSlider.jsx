"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

export default function HeroSlider() {
    return (
        <section className="relative w-full min-h-[90vh] bg-black">

            <Swiper loop={true} className="h-full">

                {/* SLIDE 1 – Earth */}
                <SwiperSlide>
                    <div className="relative min-h-[100vh] flex items-center overflow-hidden">

                        {/* STARS BACKGROUND */}
                        <Image
                            src="/stars.jpg"
                            alt="stars"
                            fill
                            className="object-cover"
                            priority
                        />

                        {/* DARK OVERLAY */}
                        <div className="absolute inset-0 bg-black/70 z-10" />

                        {/* LEFT TEXT CONTENT */}
                        <div className="container-besong relative z-20 text-white">
                            <div className="max-w-xl ml-6 md:ml-16 lg:ml-24">

                                <h1 className="text-5xl font-extrabold leading-tight">
                                    Global Impact, <br /> Expertly Delivered
                                </h1>

                                <p className="mt-6 text-gray-300">
                                    Fresh perspective to consistently innovate and
                                    transform procurement operations globally.
                                </p>

                                <div className="mt-8 flex gap-4">
                                    <button className="bg-orange-500 px-6 py-3 rounded text-sm font-semibold">
                                        CONTACT OUR EXPERTS
                                    </button>
                                    <button className="border border-white px-6 py-3 rounded text-sm">
                                        BOOK A MEETING
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* EARTH IMAGE – RIGHT SIDE (FLIPPED) */}
                        <div className="absolute right-[-120px] top-1/2 -translate-y-1/2 
                    w-[720px] h-[720px] z-20 hidden md:block">
                            <Image
                                src="/earth.png"
                                alt="earth"
                                fill
                                className="object-contain scale-x-[-1]"
                                priority
                            />
                        </div>

                    </div>
                </SwiperSlide>


                {/* SLIDE 2 – Second Image */}
                <SwiperSlide>
                    <div className="relative w-full min-h-[90vh] flex items-center">

                        <div className="absolute inset-0 bg-black/60 z-10"></div>

                        <Image
                            src="/earth.png"
                            alt="Second Slide"
                            fill
                            className="object-cover"
                        />

                        <div className="relative z-20 max-w-7xl mx-auto px-6 text-white">
                            <h1 className="text-4xl md:text-6xl font-bold">
                                Strategy & Transformation
                            </h1>

                            <p className="mt-6 max-w-xl text-gray-300">
                                Driving procurement innovation with sustainable,
                                long-term value creation.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </section>
    );
}
