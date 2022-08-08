// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

import eastverse from "../../public/eastverse.png";
import na from "../../public/na.png";
import Image from "next/image";

export default function Test() {
	return (
		<>
			<Swiper
				slidesPerView={3}
				spaceBetween={0}
				slidesPerGroup={3}
				loop={true}
				loopFillGroupWithBlank={true}
				pagination={{
					clickable: true,
				}}
				navigation={false}
				modules={[Pagination, Navigation]}
				className="mySwiper"
			>
				<SwiperSlide>
					<div className="flex flex-col opacity-50 cursor-pointer hover:opacity-60 transition duration-75">
						<div className="p-3 rounded-t-lg bg-zinc-800 flex flex-row gap-1">
							<div className="p-1 bg-zinc-700 rounded-full"></div>
							<div className="p-1 bg-zinc-700 rounded-full"></div>
							<div className="p-1 bg-zinc-700 rounded-full"></div>
						</div>
						<div>
							<Image
								src={na}
								alt="thumbnail"
								layout="responsive"
							/>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="flex flex-col cursor-pointer transition duration-75">
						<div className="p-3 rounded-t-lg bg-zinc-800 flex flex-row gap-1">
							<div className="p-1 bg-zinc-700 rounded-full"></div>
							<div className="p-1 bg-zinc-700 rounded-full"></div>
							<div className="p-1 bg-zinc-700 rounded-full"></div>
						</div>
						<div>
							<Image
								src={eastverse}
								alt="thumbnail"
								layout="responsive"
							/>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="flex flex-col opacity-50 cursor-pointer hover:opacity-60 transition duration-75">
						<div className="p-3 rounded-t-lg bg-zinc-800 flex flex-row gap-1">
							<div className="p-1 bg-zinc-700 rounded-full"></div>
							<div className="p-1 bg-zinc-700 rounded-full"></div>
							<div className="p-1 bg-zinc-700 rounded-full"></div>
						</div>
						<div>
							<Image
								src={na}
								alt="thumbnail"
								layout="responsive"
							/>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
