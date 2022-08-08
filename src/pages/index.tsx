import type { NextPage } from "next";
import Head from "next/head";
import { ChevronRight, GitHub, Linkedin, Mail } from "react-feather";
import Slider from "../components/Slider";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Sawyer Bivens</title>
				<meta name="description" content="Student & web developer." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="w-screen h-screen flex flex-col bg-zinc-900 font-inter overflow-hidden">
				<div className="flex flex-col justify-center items-center p-4 gap-2 flex-1">
					<div className="rounded-full bg-zinc-800/40 px-8 py-2 flex flex-row gap-2 justify-center font-medium text-zinc-500 cursor-pointer hover:bg-zinc-800/50 transition duration-75">
						Skills <ChevronRight />
					</div>
					<h1 className="text-white text-4xl font-bold">
						I&apos;m Sawyer
					</h1>
					<p className="text-zinc-700 text-xl font-medium">
						a student & web developer.
					</p>
					<div className="flex flex-row gap-4 text-white">
						<div
							className="w-min rounded-full border border-zinc-800 p-3 cursor-pointer hover:bg-zinc-800 ease-linear duration-75"
							onClick={() =>
								window.open("https://github.com/sqwyer")
							}
						>
							<GitHub />
						</div>
						<div
							className="w-min rounded-full border border-zinc-800 p-3 cursor-pointer hover:bg-zinc-800 ease-linear duration-75"
							onClick={() =>
								window.open(
									"mailto:sawyer.codes.stuff@gmail.com"
								)
							}
						>
							<Mail />
						</div>
						<div className="w-min rounded-full border border-zinc-800 p-3 cursor-pointer hover:bg-zinc-800 ease-linear duration-75">
							<Linkedin />
						</div>
					</div>
				</div>
				<div className="flex-1 justify-start">
					<Slider />
				</div>
			</div>
		</>
	);
};

export default Home;
