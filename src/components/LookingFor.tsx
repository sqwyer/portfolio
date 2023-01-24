const LOOKING_FOR_POSITION = "internship";
const STARTS_WITH_VOWEL =
	LOOKING_FOR_POSITION.startsWith("a") ||
	LOOKING_FOR_POSITION.startsWith("e") ||
	LOOKING_FOR_POSITION.startsWith("i") ||
	LOOKING_FOR_POSITION.startsWith("o") ||
	LOOKING_FOR_POSITION.startsWith("u");

export default function LookingFor() {
	return (
		<>
			{LOOKING_FOR_POSITION && (
				<div
					className="bg-indigo-600 text-white py-1 text-center font-semibold overflow-x-hidden sticky top-0"
					onClick={() =>
						window.open("mailto:sawyer.codes.stuff@gmail.com")
					}
				>
					<span className="mx-auto inline-block cursor-pointer hover:underline">
						I&apos;m looking for a{STARTS_WITH_VOWEL && "n"}{" "}
						{LOOKING_FOR_POSITION}, contact me!
					</span>
				</div>
			)}
		</>
	);
}
