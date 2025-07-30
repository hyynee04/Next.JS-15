import Card from "@/app/components/card/Card";
import Link from "next/link";

const ArchivedNotifications = () => {
  return (
    <Card>
      <div>Archived notifications</div>
      <Link href={"/complex-dashboard"}>Default</Link>
    </Card>
  )
}

export default ArchivedNotifications;