"use client"

import { useRoom } from "@liveblocks/react/suspense"
import { useState } from "react"
import * as Y from "yjs"
import {LiveblocksYjsProvider} from '@liveblocks/yjs'
import { Button } from "./ui/button"
import { MoonIcon, SunIcon } from "lucide-react"

const Editor = () => {

    const room=useRoom()
    const [doc,setDoc]=useState<Y.Doc>()
    const [provider,setProvider]=useState<LiveblocksYjsProvider>()
    const [darkMode,setDarkMode]=useState(false)

    const style=`hover:text-white ${darkMode?"text-gray-300 bg-gray-700 hover:bg-gray-100 hover:text-gray-700":
                                                "text-gray-700 bg-gray-200 hover:bg-gray-300 hover:text-gray-700"
    }`
  return (
    <div className='max-w-6xl mx-auto'>
        <div>
            {/* translate document ai */}
            {/* {chatto document ai} */}
            {/* dark mode */}
            <Button className={style} onClick={()=>setDarkMode(!darkMode)}>
                {darkMode?<SunIcon/>:<MoonIcon/>}
            </Button>
        </div>

        {/* block note */}
    </div>
  )
}

export default Editor