import { notFound } from "next/navigation"
import { prisma } from "../../../../prisma/client"
import { TrashIcon } from '@heroicons/react/24/outline'
import { deleteBinAction } from "@/app/actions"

async function CodeBinView(props) {
  const bin = await prisma.codeBin.findFirst({
    where: { id: parseInt(props.params.id) }
  })

  if (!bin) {
    return notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">{bin.title}</h2>
      <pre className="bg-gray-200 p-4 rounded-md overflow-auto">{bin.code}</pre>
    </div>
  )
}

export default CodeBinView
