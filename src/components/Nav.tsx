export default function Nav() {
	return (
		<div className="px-8 md:px-44 lg:px-52 xl:px-96 pt-12 pb-4">
			<a
				className="font-bold cursor-pointer text-zinc-500 hover:text-zinc-400 transition duration-75"
				onClick={() => window.open("/", "_self")}
			>
				sawyer&biv
			</a>
		</div>
	);
}
