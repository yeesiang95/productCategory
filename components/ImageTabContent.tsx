import { NextPage } from "next";
import { render } from "react-dom";
import Image from "next/image";

const ImageTabContent =()=>{

    
    function onSelect(e:React.ChangeEvent<HTMLInputElement>){
        if(e.target.files && e.target.files.length > 5){
            alert("Only 5 files accepted");
        }
    }

    return(
            <div className="p-2 mt-8 w-1/2 lg:w-full h-24 lg:h-96 border-2 border-gray-300 flex items-center justify-center ">
                <div>
                    <label htmlFor="file-input" className="cursor-pointer">
                    <div className="flex justify-center">
                        <Image src="/add-image-icons.png" alt="add_photo" width="32" height="32" />
                    </div>
                    <div className="text-center">Add Image</div>
                    </label>
                    <input id="file-input" type="file" className="hidden" accept="image/png, image/jpeg" multiple onChange={onSelect} />
               </div>
            </div>
            
       
    )
}
export default ImageTabContent;