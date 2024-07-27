'use client'
import { useState } from "react"

function TransitionDemo() {
    const [text, setText] = useState("")
    const [result, setResult] = useState([])

    const handleChange = async (e) => {
        const value = e.target.value
        setText(value)
        const res = await fetch(`https://api.github.com/search/users?q=${value}`)
        const result = await res.json()
        if (result?.items?.length) setResult(result.items)
        else setResult([])

    }

    return (
        <div className="p-4">
            <input
                className="border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Type GitHub username"
                type="text"
                value={text}
                onChange={handleChange} />
            <div className="mt-4 grid gap-4">
                {
                    result.map((item => {
                        return (
                            <a
                                key={item.id}
                                href={item.html_url}
                                className="block p-4 border rounded hover:bg-gray-100 transition duration-200">
                                <div className="flex items-center">
                                    <img
                                        src={item.avatar_url}
                                        alt={item.login}
                                        className="w-10 h-10 rounded-full mr-4"
                                    />
                                    <h1
                                        className="text-lg font-semibold">
                                        {item.login}
                                    </h1>
                                </div>
                            </a>
                        )
                    }))
                }
            </div>
        </div>
    )
}

export default TransitionDemo
