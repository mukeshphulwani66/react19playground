import Link from "next/link"
import SubmitBtn from "./SubmitBtn"
import { handleSubmitAction } from "@/app/actions"


function CreateBin({ codeBins }) {

  return (
    <div>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        action={handleSubmitAction}

      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" >
            Title
          </label>
          <input
            className="border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter title"
            name="title"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Code
          </label>

          <textarea
            className="border-2 rounded w-full py-2 px-3 text-gray-100 font-mono bg-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Write code here"
            name="code"
          >
          </textarea>

        </div>
        <div className="flex items-center justify-between">
          <SubmitBtn />
        </div>
      </form>
      {codeBins.length === 0 && <h1 className="text-2xl font-bold mb-4">No bins available</h1>}
      {codeBins.map(item => {
        return (
          <div
            className="flex justify-between bg-white border border-gray-300 rounded-md p-4 mb-4"
            key={item.id}>
            <Link
              href={`/codebin/${item.id}`}
              className="text-lg font-semibold"
            >{item.title}
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default CreateBin