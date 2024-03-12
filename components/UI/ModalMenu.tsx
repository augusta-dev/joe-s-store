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
import cross from "../../assets/cross.svg";

const ModalMenu = () => {
	return (
		<div>
			<div className=" fixed top-0 left-0 w-80 !h-screen !z-50 bg-grey-22 shadow-lg p-4">
				<Image src={cross}></Image>
				<ul>
					<li>One</li>
                    <li>One</li>
                    <li>One</li>
                    <li>One</li>
                    <li>One</li>
                    <li>One</li>
                    <li>One</li>
                    <li>One</li>
                    <li>One</li>
                    <li>One</li>
                    <li>One</li>
                    <li>One</li>
                    <li>One</li>
                    <li>One</li>
                    <li>One</li>
                    <li>One</li>
                    <li>One</li>
                    <li>One</li>
                    <li>One</li>
                    <li>One</li>
                    <li>One</li>
				</ul>
			</div>
		</div>
	);
};
export default ModalMenu;
