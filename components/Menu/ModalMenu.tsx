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
import MenuDisplay from "./MenuDisplay";
import cross from "../../assets/cross2.svg";

const ModalMenu = (props: {
	showing: (item: boolean) => void;
}): React.ReactElement => {
	return (
		<div>
			<div className="fixed top-0 left-0 z-50 flex flex-col w-64 h-max bg-grey-22 shadow-lg py-4 px-5 text-left">
				<button
					onClick={() => props.showing(false)}
					className="float-right -mb-6 ml-1"
				>
					{""}
					<Image
						src={cross}
						alt=""
						className="float-right mt-1"
					/>
				</button>

				<p className="italic">
					The admin page is for uploading items (pieces of clothing along with their
					details) to MongoDB. It was originally protected by NextAuth but has now been removed for viewing purposes.
				</p>

				<br />
				<hr className="h-1 border-1 mt-2" />
				<MenuDisplay />
			</div>
		</div>
	);
};
export default ModalMenu;
