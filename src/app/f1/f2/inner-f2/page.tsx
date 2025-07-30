import Link from "next/link";

const InnerF2 = () => {
  return (
    <>
      <h1>Inner F2 page</h1>
      <ul>
        <li><Link href={"/f5"}>F5</Link></li>
      </ul>
    </>

  )
}

export default InnerF2;