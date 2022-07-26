import { NextPage } from "next";
import { useState } from "react";
import ImageTabContent from "./ImageTabContent";
import ImageView from "./ImageView";


const Tabs:NextPage = ()=>{
    const [images,setImage] = useState<FileList>();
    const [active,setActive] = useState<number>(0);

    return(
        <div className="pt-4 self-start  lg:sticky top-0">
            <ul id="tabs" className="inline-flex w-full px-1 pt-2 justify-center">
                <li className={`px-4 py-2 font-semibold text-gray-800 border-b-2 ${active === 0 ? 'border-black' :'border-black-400 opacity-50 cursor-pointer'}`} onClick={()=>setActive(0)} >
                    <a>Image Gallery</a>
                </li>
                <li className={`px-4 py-2 font-semibold text-gray-800 border-b-2 ${active === 1 ? 'border-black' :'border-black-400 opacity-50 cursor-pointer'}`} onClick={()=>setActive(1)}>
                    <a>Preview</a>
                </li>
            </ul>
            <div id="tab-contents">
                {active === 0 ? <ImageTabContent setImage={(file)=>{setImage(file); setActive(1)}} /> :
                <ImageView images={images} />
            }
            </div>
        </div>
    )
}
export default Tabs;