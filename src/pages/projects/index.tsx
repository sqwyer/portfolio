import { NextPage } from "next";
import Head from "next/head";
import Nav from "../../components/Nav";
import Image, { StaticImageData } from "next/image";
import leaveamessage from "../../../public/leaveamessage.png";
import LookingFor from "../../components/LookingFor";

function Project({ image, alt, href }: { image: StaticImageData; alt: string, href: string }) {
	return (
		<div className="rounded-md overflow-hidden relative max-h-56 cursor-pointer hover:scale-105 transition duration-75 hover:rotate-1" onClick={() => window.open(href, '_self')}>
			<Image src={image} className="absolute" />
			<div className="overlay absolute top-0 bottom-0 left-0 right-0 bg-black/50 flex">
				<h1 className="drop-shadow-lg shadow-black/50 m-auto font-bold text-3xl">
					{alt}
				</h1>
			</div>
		</div>
	);
}

const EPM: NextPage = () => {
	return (
		<>
			<Head>
				<title>Sawyer Bivens</title>
				<meta name="description" content="Student & web developer." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="min-h-screen bg-zinc-900 text-white overflow-x-hidden pb-12">
				<LookingFor />
				<Nav />
				<div className="px-8 sm:px-22 md:px-36 lg:px-52 xl:px-96">
					<h1 className="text-7xl font-black">My Work</h1>
					<hr className="border-zinc-800 border-2 my-6" />

					<div className="flex flex-col gap-6">
						<Project image={leaveamessage} alt="Leave-a-message" href="/projects/leaveamessage" />
					</div>
				</div>
			</div>
		</>
	);
};

export default EPM;
