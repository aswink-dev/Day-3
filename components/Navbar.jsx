import Link from "next/link"


export default function Navbar(){
  return(
    <nav style ={{background:"black", padding: "10px"}}>
      <Link href="/" style={{color:"red" ,padding:"10px" ,marginLeft:"20px"}}>Home</Link>
      <Link href="/about" style={{color:"red", padding:"10px" ,marginLeft:"20px"}}>about</Link>
      <Link href="/contact" style={{color:"red", padding:"10px" ,marginLeft:"20px"}}>contact</Link>
      <Link href="/dashboard" style={{color:"red", padding:"10px" ,marginLeft:"20px"}}>Dashboard</Link>
      <Link href="/users" style={{color:"red", padding:"10px" ,marginLeft:"20px"}}>user</Link>
      <Link href="/user-server" style={{color:"red", padding:"10px" ,marginLeft:"20px"}}>user-server</Link>
      <Link href="/users-api" style={{color:"red", padding:"10px" ,marginLeft:"20px"}}>USERS Api-GET</Link>
      <Link href="/users-api-form" style={{color:"red", padding:"10px" ,marginLeft:"20px"}}>USERS-API- POST</Link>
    </nav>
  )
}