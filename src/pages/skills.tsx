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

					<p className="text-zinc-500 font-medium">
						Hey, I&apos;m Sawyer! I&apos;ve been programming since
						early 2019 using languages such as{" "}
						<span className="text-zinc-300">HTML</span>,{" "}
						<span className="text-zinc-300">CSS</span>,{" "}
						<span className="text-zinc-300">Sass</span>,{" "}
						<span className="text-zinc-300">JavaScript</span>,{" "}
						<span className="text-zinc-300">TypeScript</span>, &
						more.
					</p>
					<br />
					<p className="font-medium text-zinc-300">
						Frameworks & Libraries
					</p>
					<ul className="font-medium text-zinc-500">
						<li className="ml-4">1. NextJS</li>
						<li className="ml-4">2. tRPC</li>
						<li className="ml-4">3. NextAuth</li>
						<li className="ml-4">4. Prisma</li>
						<li className="ml-4">5. Tailwind</li>
						<li className="ml-4">6. Express</li>
						<li className="ml-4">7. Mongoose</li>
					</ul>
					<br />
					<p className="font-medium text-zinc-300">
						Tools & Workflow
					</p>
					<ul className="font-medium text-zinc-500">
						<li className="ml-4">1. NodeJS</li>
						<li className="ml-4">2. VSCode</li>
						<li className="ml-4">3. Github</li>
						<li className="ml-4">4. Vercel</li>
						<li className="ml-4">5. MongoDB</li>
						<li className="ml-4">6. Figma</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default EPM;
