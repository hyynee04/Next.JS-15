import Link from "next/link";

const F1 = () => {
  return (
    <>
      <h1>F1 page</h1>
      <ul>
        <li><Link href={"/f1/f2"}>F2</Link></li>
        <li><Link href={"/f3"}>F3</Link></li>
      </ul>
    </>

  )
}

export default F1;