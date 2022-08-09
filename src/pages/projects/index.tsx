import { NextPage } from "next";
import Head from "next/head";
import Nav from "../../components/Nav";
import Image from "next/image";
import eastverse from "../../../public/eastverse.png";

function Project({ image, alt }: { image: any; alt: string }) {
	return (
		<div className="rounded-md overflow-hidden relative max-h-56 cursor-pointer hover:scale-105 transition duration-75 hover:rotate-1">
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
			<div className="w-screen min-h-screen bg-zinc-900 text-white overflow-x-hidden pb-12">
				<Nav />
				<div className="px-8 md:px-44 lg:px-52 xl:px-96">
					<h1 className="text-7xl font-black">My Work</h1>
					<hr className="border-zinc-800 border-2 my-6" />

					<div className="flex flex-col gap-6">
						<Project image={eastverse} alt="Eastverse" />
					</div>
				</div>
			</div>
		</>
	);
};

export default EPM;
