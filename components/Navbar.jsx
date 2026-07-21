import Link from "next/link"


export default function Navbar(){
  return(
    <nav style ={{background:"black", padding: "10px"}}>
      <Link href="/" style={{color:"red" ,padding:"10px" ,marginLeft:"20px"}}>Home</Link>
      <Link href="/about" style={{color:"red", padding:"10px" ,marginLeft:"20px"}}>about</Link>
      <Link href="/contact" style={{color:"red", padding:"10px" ,marginLeft:"20px"}}>contact</Link>
      <Link href="/dashboard" style={{color:"red", padding:"10px" ,marginLeft:"20px"}}>Dashboard</Link>
    </nav>
  )
}