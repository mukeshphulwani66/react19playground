import { prisma } from "../../prisma/client"
import CreateBinExample1 from "@/components/CreateBinExample1";


export default async function Home() {
  const codeBins = await prisma.codeBin.findMany()

  return (
    <div className="mt-3">
      <CreateBinExample1 codeBins={codeBins} />
    </div>
  )
}
