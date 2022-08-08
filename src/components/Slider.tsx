import eastverse from "../../public/eastverse.png";
import na from "../../public/na.png";
import Image from "next/image";

function open(page: string) {
	window.open("/projects/" + page, "_self");
}

export default function Slider() {
	return (
		<>
			<div className="relative w-100">
				<div
					className="flex flex-col w-xl absolute right-1/2 mt-10 opacity-50 cursor-pointer hover:opacity-60 transition duration-75"
					style={{ transform: "translate(-25%)" }}
				>
					<div className="p-3 rounded-t-lg bg-zinc-800 flex flex-row gap-1">
						<div className="p-1 bg-zinc-700 rounded-full"></div>
						<div className="p-1 bg-zinc-700 rounded-full"></div>
						<div className="p-1 bg-zinc-700 rounded-full"></div>
					</div>
					<div>
						<Image src={na} alt="thumbnail" layout="responsive" />
					</div>
				</div>

				<div
					className="flex flex-col w-xl absolute left-1/2 mt-10 opacity-50 cursor-pointer hover:opacity-60 transition duration-75"
					style={{ transform: "translate(25%)" }}
				>
					<div className="p-3 rounded-t-lg bg-zinc-800 flex flex-row gap-1">
						<div className="p-1 bg-zinc-700 rounded-full"></div>
						<div className="p-1 bg-zinc-700 rounded-full"></div>
						<div className="p-1 bg-zinc-700 rounded-full"></div>
					</div>
					<div>
						<Image src={na} alt="thumbnail" layout="responsive" />
					</div>
				</div>

				<div
					className="flex flex-col w-xl absolute left-1/2 cursor-pointer"
					style={{ transform: "translate(-50%)" }}
				>
					<div className="p-3 rounded-t-lg bg-zinc-800 flex flex-row gap-1">
						<div className="p-1 bg-zinc-700 rounded-full"></div>
						<div className="p-1 bg-zinc-700 rounded-full"></div>
						<div className="p-1 bg-zinc-700 rounded-full"></div>
					</div>
					<div onClick={() => open("epm")}>
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
}
