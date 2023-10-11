import Link from "next/link"
import { FaBug } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <nav>
        <Link href={"/"}>
        <FaBug/>
        </Link>
        <ul>
            <li></li>
            <li></li>
        </ul>
    </nav>
  )
}

export default Navbar