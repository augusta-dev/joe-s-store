import MenuBar from "../components/Menu/MenuBar";
import Link from "next/link";
import Latest from "@/components/Home/Latest";
import Filters from "@/components/UI/Filters";
import { list } from "@/components/Providers/ListContext";

export default function Home() {
	return (
		<>
			<Filters />
			<MenuBar />
			<Latest />
		</>
	);
}
