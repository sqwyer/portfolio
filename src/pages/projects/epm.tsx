import { NextPage } from "next";
import Head from "next/head";
import Nav from "../../components/Nav";
import eastverse from "../../../public/eastverse.png";
import Image from "next/image";

const EPM: NextPage = () => {
	return (
		<>
			<Head>
				<title>Sawyer Bivens</title>
				<meta name="description" content="Student & web developer." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="w-screen min-h-screen bg-zinc-900 text-white overflow-x-hidden">
				<Nav />
				<div className="px-96">
					<h1 className="text-7xl font-black">Eastverse</h1>
					<div className="flex flex-row gap-2 mt-6">
						<div
							className="rounded-full border border-zinc-800 py-2 px-8 cursor-pointer hover:bg-zinc-800 ease-linear duration-75"
							onClick={() =>
								window.open("https://github.com/sqwyer/epm-t3")
							}
						>
							View on Github
						</div>
					</div>
					<hr className="border-zinc-800 border-2 my-6" />

					<div className="rounded-lg overflow-hidden">
						<Image
							src={eastverse}
							alt="thumbnail"
							layout="responsive"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default EPM;
