import { NextPage } from "next";
import Head from "next/head";
import Nav from "../../components/Nav";
import leaveamessage from "../../../public/leaveamessage.png";
import Image from "next/image";
import LookingFor from "../../components/LookingFor";
import { ChevronLeft, ChevronRight } from "react-feather";

const EPM: NextPage = () => {
	return (
		<>
			<Head>
				<title>Sawyer Bivens</title>
				<meta name="description" content="Student & web developer." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="min-h-screen bg-zinc-900 text-white overflow-x-hidden relative">
				<LookingFor />
				<Nav />
				<div className="px-8 sm:px-22 md:px-36 lg:px-52 xl:px-96">
					<h1 className="text-7xl font-black">Leave A Message</h1>
					<div className="flex flex-row gap-2 mt-6">
						<div
							className="rounded-full border border-zinc-800 py-2 px-8 cursor-pointer hover:bg-zinc-800 ease-linear duration-75"
							onClick={() =>
								window.open(
									"https://github.com/sqwyer/leave-a-message"
								)
							}
						>
							View on Github
						</div>
						<div
							className="rounded-full border border-zinc-800 py-2 px-8 cursor-pointer hover:bg-zinc-800 ease-linear duration-75"
							onClick={() =>
								window.open(
									"https://leave-a-message-one.vercel.app/"
								)
							}
						>
							Visit Site
						</div>
					</div>

					<hr className="border-zinc-800 border-2 my-6" />

					<div className="rounded-lg overflow-hidden">
						<Image
							src={leaveamessage}
							alt="thumbnail"
							layout="responsive"
						/>
					</div>

					<hr className="border-none my-6" />

					<div className="flex flex-col gap-12 pb-6 overflow-x-hidden text-xl font-semibold">
						<div className="flex flex-col lg:flex-row gap-6">
							<div className="lg:basis-1/5">
								<p className="font-bold">Project Background</p>
							</div>
							<div className="flex-1">
								<p className="text-zinc-500">
									Leave-a-message is a web app where anyone
									can leave a message and give it some
									passphrase. Any time someone enters a
									passphrase, they will see whatever message
									someone left.
								</p>
							</div>
						</div>

						<div className="flex flex-col lg:flex-row gap-6">
							<div className="lg:basis-1/5">
								<p className="font-bold">Tech Stack</p>
							</div>
							<div className="flex-1">
								<p className="text-zinc-500">
									This project was first bootstrapped with{" "}
									<a
										className="text-zinc-600 underline cursor-pointer hover:text-zinc-700 duration-75"
										onClick={() =>
											window.open(
												"https://github.com/t3-oss/create-t3-app"
											)
										}
									>
										Create-t3-app
									</a>
									, a NextJS alternative to Create-react-app.
									The &quot;t3&quot; stack includes, of
									course, NextJS, in addition to various
									helpful libraries and tools such as Prisma,
									tRPC, and Tailwind. In this project, Prisma
									was used with MongoDB as a provider to store
									any messages that got left by users. In
									addition, tRPC provided type-safe API
									methods that gave the front-end a way to
									write to the database. Last, Tailwind was
									used to style the entire sleek UI.
								</p>
							</div>
						</div>

						<div className="flex flex-col lg:flex-row gap-6">
							<div className="lg:basis-1/5">
								<p className="font-bold">What I Learned</p>
							</div>
							<div className="flex-1">
								<p className="text-zinc-500">
									This project helped further develop my
									understanding of NextJS and React as a
									whole. Further, it taught me how to better
									utilize Prisma in conjunction with tRPC to
									create fully type-safe APIs that allow for
									better develop experience, and less errors
									in production.
								</p>
							</div>
						</div>

						<div className="flex flex-col lg:flex-row gap-6">
							<div className="lg:basis-1/5"></div>
							<div className="flex-1">
								<p className="text-zinc-500">
									Questions?{" "}
									<span
										className="text-indigo-600 underline cursor-pointer"
										onClick={() =>
											window.open(
												"mailto:sawyer.codes.stuff@gmail.com"
											)
										}
									>
										Let&apos;s chat.
									</span>
								</p>
							</div>
						</div>
					</div>

					<hr className="border-zinc-800 border-2 my-6" />

					<div className="py-6 flex flex-col sm:flex-row gap-6 text-lg">
						<div
							className="rounded-md border-2 border-zinc-800 font-semibold py-4 px-8 cursor-pointer hover:bg-zinc-800 ease-linear duration-75 flex-1 flex flex-row gap-2 items-center"
							onClick={() => window.open("/", "_self")}
						>
							<ChevronLeft />
							<span className="text-zinc-400 ml-auto">
								Go to
							</span>{" "}
							Home
						</div>
						<div className="rounded-md border-2 border-zinc-800 font-semibold py-4 px-8 cursor-not-allowed -hover:bg-zinc-800 ease-linear duration-75 flex-1 flex flex-row gap-2 items-center disabled:">
							{/* <span className="text-zinc-400">Go to</span> <span className="font-bold">Quizlet Free</span> */}
							<span className="text-zinc-400">
								Look&apos;s like you reached the end...
							</span>
							<ChevronRight className="ml-auto text-zinc-400" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default EPM;
