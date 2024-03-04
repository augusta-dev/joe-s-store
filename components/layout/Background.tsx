import Footer from "./Footer";
const Background:React.FC<{children: React.ReactNode}> = (props) => {
	return (
		<div className="bg-grey-12 w-screen h-fit min-h-screen max-w-[430px]">
            <div className=" min-h-[calc(100vh-176px)] h-full text-grey-67 px-6">
            {props.children}
            </div>
			
			<Footer className='relative bottom-0 w-full max-w-[430px]'></Footer>
		</div>
	);
};
export default Background;
