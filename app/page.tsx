import MenuBar from "../components/Menu/MenuBar"
import Link from "next/link"
import Latest from "@/components/Home/Latest"
import { list } from "@/components/Providers/ListContext";


export default function Home() {
  
  return(
    <div className="">
      {/* <Link href='/admin'>Admin</Link>
      <Link href='/signup'>Signup</Link> */}
      
      <MenuBar></MenuBar>
      <Latest></Latest>
    </div>
  )
}
