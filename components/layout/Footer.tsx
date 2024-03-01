import Image from "next/image";
import Link from "next/link";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/Instagram.svg";
import copyright from "../../assets/copyright.svg";
const Footer:React.FC<{className: string;}> = (props) => {
	return (
		<div className={`${props.className}  bg-grey-22 font-athiti p-4`}>
			<div className="flex flex-wrap flex-row ">
				<div className="w-1/2 text-grey-C3 text-sm">
					<h2 className="text-grey-D9 text-lg">About Us</h2>
					<Link href="/about-us">
						<p>Who We Are</p>
					</Link>
					<Link href="/contact-us">
						<p>Contact Us</p>
					</Link>
				</div>

				<div className="text-grey-C3 text-sm">
					<h2 className="text-grey-D9 text-lg">Help</h2>
					<Link href="/shipping-policy">
						<p>Shipping Policy</p>
					</Link>

					<Link href="/terms-conditions">
						<p>Terms & Conditions</p>
					</Link>

					<Link href="/privacy-policy">
						<p>Privacy Policy</p>
					</Link>

					<Link href="/refunds-returns-policy">
						<p>Returns & Refunds Policy</p>
					</Link>
				</div>
			</div>
			<div className="flex flex-row flex-wrap w-full justify-between px-7 -mx-7 pt-3">
				<Link href="">
					<Image
						src={facebook}
						className="w-2"
						alt=""
					></Image>
				</Link>

				<Link href="">
					<Image
						src={twitter}
						className="w-5"
						alt=""
					></Image>
				</Link>

				<Link href="">
					{" "}
					<Image
						src={instagram}
						className="w-4"
						alt=""
					></Image>
				</Link>

				<div className="flex flex-row gap-2">
					<Image
						src={copyright}
						className="w-4"
						alt=""
					></Image>
					<p className="text-grey-D9">2023 Name of Company</p>
				</div>
			</div>
		</div>
	);
};
export default Footer;
