import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faImage} from "@fortawesome/free-solid-svg-icons";


interface Props{
    setImage:(files:FileList)=>void;
}

const ImageTabContent =({setImage}:Props)=>{

    function onSelect(e:React.ChangeEvent<HTMLInputElement>){
        if(e.target.files && e.target.files.length >5) alert("Only 5 files accepted");
        if(e.target.files && e.target.files.length <=5) setImage(e.target.files);
    }

    return(
        <>
        <div className="flex justify-center">
            <div className="p-2 mt-8 w-1/2 lg:w-1/2 h-24 lg:h-96 border-2 border-black flex items-center justify-center ">
                <div>
                    <label htmlFor="file-input" className="cursor-pointer">
                    <div className="flex justify-center">
                        <FontAwesomeIcon className="color-black text-3xl" icon={faImage}/>
                    </div>
                    <div className="text-center">Add Image</div>
                    </label>
                    <input id="file-input" type="file" className="hidden" accept="image/png, image/jpeg" multiple onChange={onSelect} />
               </div>
            </div>
        </div>
        <div className="mt-10 lg:mt-20">
            <div className="flex justify-center">
                <span className="text-gray-500 text-xs lg:text-base">You may upload up to 5 images (including thumbnail)</span>
            </div>
            <div className="flex justify-center">
                <span className="text-gray-500 text-xs lg:text-base">Supported file types: jpeg, jpg, png</span>
            </div>
            
        </div>
        </>
    )
}
export default ImageTabContent;