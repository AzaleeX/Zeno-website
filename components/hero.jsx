import React from 'react';
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import {Button, Chip} from '@nextui-org/react';

export default function Hero() {
    const videoSrc = "/Zeno-video.mp4";

    return (
        <section className="relative h-screen overflow-hidden">
            <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
                <source src={videoSrc} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <div
                className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 relative z-10 flex flex-col justify-center h-full">
                <div className="flex justify-center items-center mt-8">
                    <Chip className="bg-purple-500 p-5 rounded-md">
                        <Chip className="bg-purple-700 mr-6">
                            New
                        </Chip>
                        <span className="text-sm font-medium">Rejoignez-nous dès maintenant pour découvrir un monde rempli de défis, d'exploration et de fun sans limite !</span>
                    </Chip>
                </div>

                <TextGenerateEffect
                    className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
                    words="Bienvenue sur Zeno Ranked"/>
                <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48">Découvrez Zeno Ranked, une
                    communauté Minecraft dédiée au divertissement et à l'entraînement intensif.</p>
                <div
                    className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <Button
                        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-purple-500 hover:bg-purple-600 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                        Voir plus
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </Button>
                </div>
            </div>
        </section>
    );
}
