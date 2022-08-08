import { NextPage } from "next";
import Head from "next/head";
import Nav from "../components/Nav";

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
				<div className="px-8 md:px-44 lg:px-52 xl:px-96">
					<h1 className="text-7xl font-black">My Skills</h1>
					<hr className="border-zinc-800 border-2 my-6" />

					<p>...</p>
				</div>
			</div>
		</>
	);
};

export default EPM;
