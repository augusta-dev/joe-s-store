import MenuBar from "../components/UI/MenuBar"
import Link from "next/link"
import Latest from "@/components/Home/Latest"

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
