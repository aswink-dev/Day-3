import Link from "next/link"

export default function Navbar(){
  return(
    <nav className="bg-black p-3">
      <Link href="/" className="text-red-500 px-3 ml-5">Home</Link>
      <Link href="/about" className="text-red-500 px-3 ml-5">about</Link>
      <Link href="/contact" className="text-red-500 px-3 ml-5">contact</Link>
      <Link href="/dashboard" className="text-red-500 px-3 ml-5">Dashboard</Link>
      <Link href="/users" className="text-red-500 px-3 ml-5">user</Link>
      <Link href="/user-server" className="text-red-500 px-3 ml-5">user-server</Link>
      <Link href="/users-api" className="text-red-500 px-3 ml-5">USERS Api-GET</Link>
      <Link href="/users-api-form" className="text-red-500 px-3 ml-5">USERS-API- POST</Link>
    </nav>
  )
}