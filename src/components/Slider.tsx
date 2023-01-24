import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";

import leaveamessage from "../../public/leaveamessage.png";
import na from "../../public/na.png";
import Image from "next/image";

import styles from "../styles/hoverimage.module.css";

function HoverImage({ alt, children }: { alt: string; children: any }) {
	return (
		<div className={styles.hoverimage + " relative"}>
			{children}
			<div className="absolute top-0 left-0 bottom-0 right-0 opacity-0 bg-black/10 text-white hover:opacity-100 z-50  duration-100">
				<h1 className="drop-shadow-lg shadow-black/50 text-xl font-bold m-auto">
					{alt}
				</h1>
			</div>
		</div>
	);
}

export default function Slider() {
	return (
		<>
			<Swiper
				slidesPerView={3}
				spaceBetween={0}
				slidesPerGroup={1}
				loop={true}
				loopedSlides={3}
				centeredSlides={true}
				loopFillGroupWithBlank={true}
				autoplay={{ delay: 3000, disableOnInteraction: true }}
				className="mySwiper"
				modules={[Autoplay]}
			>
				<SwiperSlide>
					<div
						className="flex flex-col cursor-pointer transition duration-75"
						onClick={() =>
							window.open("/projects/leaveamessage", "_self")
						}
					>
						<div className="p-3 rounded-t-lg bg-zinc-800 flex flex-row gap-1">
							<div className="p-1 bg-zinc-700 rounded-full"></div>
							<div className="p-1 bg-zinc-700 rounded-full"></div>
							<div className="p-1 bg-zinc-700 rounded-full"></div>
						</div>
						<div className="relative">
							<HoverImage alt="Leave-a-message">
								<Image
									src={leaveamessage}
									alt="thumbnail"
									layout="responsive"
								/>
							</HoverImage>
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
						<div className="relative">
							<HoverImage alt="Coming Soon">
								<Image
									src={na}
									alt="thumbnail"
									layout="responsive"
								/>
							</HoverImage>
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
						<div className="relative">
							<HoverImage alt="Coming Soon">
								<Image
									src={na}
									alt="thumbnail"
									layout="responsive"
								/>
							</HoverImage>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
