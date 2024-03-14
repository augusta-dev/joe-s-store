//Create a modal menu to be applied to the home page of an ecommerce app
//The menu will have a list of categories and a search bar
//The menu will also have a close button
//The menu will be hidden by default and will only be shown when the user clicks on the grid icon
//The menu will be hidden when the user clicks on the close button
//The menu will be hidden when the user clicks anywhere outside the menu
//The menu will have a fixed position at the top left of the screen
//The menu will have a width of 300px
//The menu will have a height of 100vh
//write now
import Image from "next/image";
import Link from "next/link";
import MenuItem from "./MenuItem";
import cross from "../../assets/cross2.svg";

const ModalMenu = (props: {
	showing: (item: boolean) => void;
}): React.ReactElement => {
	return (
		<div>
			<div className=" fixed top-0 left-0 w-64 !h-screen !z-50 bg-grey-22 shadow-lg py-4 px-5 text-left">
				<button onClick={() => props.showing(false)} className="float-right">
					{""}
					<Image
						src={cross}
						alt=""
						className="float-right mt-1"
					/>
				</button>

				<p className="italic mb-4">
					The links on this page have been placed abstractly as the
					app is currently under development. These links have been
					incorporated for easy access to the relevant pages. It is
					important to note that this is not the final design of the
					menu and I am working towards enhancing it for a superior
					user experience.
				</p>
				<Link
					href="/admin"
					className="underline"
				>
					Admin Page
				</Link>
				<p className="italic">
					For uploading items (pieces of clothing along with their
					detail) to MongoDB
				</p>
				<Link
					href="/signin"
					className="underline"
				>
					Signin
				</Link>
				<p></p>
				<Link
					href="/signup"
					className="underline"
				>
					Signup
				</Link>
				<br />
				<hr className="h-1 border-1 mt-2" />
				<MenuItem></MenuItem>
				<p>My Account</p>
				<p>All Product</p>
				<ul>
					<li>Categories</li>
				</ul>
			</div>
		</div>
	);
};
export default ModalMenu;
