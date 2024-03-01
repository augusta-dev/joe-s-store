import MenuBar from "../components/UI/MenuBar"
import Link from "next/link"

export default function Home() {
  return(
    <div>
      <Link href='/admin'>Admin</Link>
      <Link href='/signup'>Signup</Link>
      <MenuBar></MenuBar>
    </div>
  )
}
