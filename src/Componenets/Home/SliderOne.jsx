import React from 'react';
import { Logo1, Logo2, Logo3, Logo4, Logo5, Logo6 } from '../../assets';

const SliderOne = () => {
    const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];

    // Duplicate the array multiple times to ensure it covers screen width and loops seamlessly
    const infiniteLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

    return (
        <section className="pb-10 bg-white overflow-hidden relative ">
            {/* Gradient Overlays for smooth entry/exit look */}
            {/* <div className="absolute inset-y-0 left-0 w-20 md:w-60 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 md:w-60 bg-gradient-to-l from-white via-white/80 to-transparent z-10" /> */}

            <div className="relative flex overflow-hidden group">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .marquee-container {
                        display: flex;
                        width: max-content;
                        animation: marquee 35s linear infinite;
                    }
                    .marquee-container:hover {
                        animation-play-state: paused;
                    }
                `}} />

                <div className="marquee-container gap-16 md:gap-32 pr-16 md:pr-32">
                    {infiniteLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 transition-all duration-500 transform  opacity-80 group-hover:opacity-100 group-hover:grayscale-0 hover:!scale-110 px-4"
                        >
                            <img
                                src={logo}
                                alt={`Partner Logo ${index}`}
                                className="h-20 "
                                draggable="false"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SliderOne;
