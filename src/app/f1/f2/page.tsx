import Link from "next/link";

const F2 = () => {
  return (
    <>
      <h1>F2 page</h1>
      <ul>
        <li><Link href={"/f1/f2/inner-f2"}>Inner F2</Link></li>
        <li><Link href={"/f4"}>F4</Link></li>
      </ul>
    </>

  )
}

export default F2;