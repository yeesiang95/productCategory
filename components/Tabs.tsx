import { NextPage } from "next";
import { useState } from "react";
import ImageTabContent from "./ImageTabContent";


const Tabs:NextPage = ()=>{

    const [active,setActive] = useState<number>(0);

    return(
        <div className="w-3/4 mx-auto mt-4 ">
            <ul id="tabs" className="inline-flex w-full px-1 pt-2 justify-center">
                <li className={`px-4 py-2 font-semibold text-gray-800 border-b-2 ${active === 0 ? 'border-black' :'border-black-400 opacity-50 cursor-pointer'}`} onClick={()=>setActive(0)} >
                    <a>Image Gallery</a>
                </li>
                <li className={`px-4 py-2 font-semibold text-gray-800 border-b-2 ${active === 1 ? 'border-black' :'border-black-400 opacity-50 cursor-pointer'}`} onClick={()=>setActive(1)}>
                    <a>Preview</a>
                </li>
            </ul>
            <div id="tab-contents" className="flex justify-center">
                {active === 0 ? <ImageTabContent/> :
                <div className="p-4">
                    Second
                </div>
            }
            </div>
        </div>
    )
}
export default Tabs;