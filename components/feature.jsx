"use client";

import { BadgeCheck } from 'lucide-react';

export default function Feature() {
    return (
        <section>
            <div
                className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
                <div
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <div className="max-w-screen-xl mx-auto md:px-8">
                    <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                        <div className="flex-1 sm:hidden lg:block">
                            <img src="/discord.png" className="md:max-w-lg sm:rounded-lg" alt="" />
                        </div>
                        <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                            <h3 className="text-purple-500 font-semibold">
                                <BadgeCheck /> Discord
                            </h3>
                            <p className="text-purple-800 text-3xl font-semibold sm:text-4xl">
                                Rejoint le serveur Discord !
                            </p>
                            <p className="mt-3 text-gray-400">
                                Rejoignez notre serveur Discord pour échanger avec la communauté, poser des questions et rester informé des dernières nouveautés. Votre avis est précieux pour nous aider à améliorer le projet et à proposer de nouvelles idées.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}