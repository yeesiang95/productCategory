import { NextPage } from "next";
import React, { useState } from "react";
import Image from "next/image";



const InputForm:NextPage = () =>{

    const [name,setName] = useState<string>('');
    const [category,setCategory] = useState<string>('collectibles');
    const [brand,setBrand] = useState<string>('');
    const [brandArray,setBrandArray] = useState<Array<string>>([]);
    const [description ,setDescription] = useState<string>('');


    const handleKeyPress=(event:React.KeyboardEvent<HTMLElement>)=>{
        if(event.key === 'Enter'){
            if(brand !== '' && brandArray.length <2) {
                setBrandArray(prevState=>[...prevState,brand]); setBrand('')
            }
            else if(brandArray.length === 2) alert('Only can 2 brand');
            else alert('brand is required');
        }
    }

    return(
        <div className="p-12">
            <div>
                <label htmlFor="product_name">Product Name <small className="text-red-500">*</small></label>
                <div>
                    <input type="text" id="product_name"  className="w-full border-b-2" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name your listing. Keep it short and sweet" />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <div className="pt-4">
                        <label htmlFor="category">Category <small className="text-red-500">*</small></label>
                        <div>
                            <button onClick={()=>setCategory('collectibles')} className={`py-1 px-2 ${category === 'collectibles' ? 'bg-black text-white border-solid border-2 border-black' : 'border-gray-900 border-solid border-2' }`}>Collectibles</button>
                            <button onClick={()=>setCategory('accessories')} className={`py-1 px-2 ml-2 ${category === 'accessories' ? 'bg-black text-white border-solid border-2 border-black' : 'border-gray-900 border-solid border-2' }`}>Accessories</button>
                            <button onClick={()=>setCategory('t-shirt')} className={`py-1 px-2 ml-2 ${category === 't-shirt' ? 'bg-black text-white border-solid border-2 border-black' : 'border-gray-900 border-solid border-2' }`}>T-Shirts</button>
                        </div>
                    </div>
                    <div className="pt-4">
                        <label htmlFor="brand">Brand (up to 2) <small className="text-red-500">*</small></label>
                        <div>
                            <input type="text" id="brand" className="w-full border-b-2" value={brand} onChange={(e)=>setBrand(e.target.value)} placeholder="Add a keyword and press Enter" onKeyDown={handleKeyPress} />
                            {brandArray.length !== 0 &&
                            <div className="pt-4">
                            {brandArray.map((item,index)=>{
                                return <span key={index} className="mr-2 border-black border-2 px-8 py-2">{item} <span className="cursor-pointer" 
                                onClick={()=>{
                                    const data = [...brandArray];
                                    data.splice(index,1);
                                    setBrandArray(data)
                                }}>X</span></span>
                            })}
                            </div>}
                        </div>
                    </div>
                    <div className="pt-4">
                        <label htmlFor="description">Description <small className="text-red-500">*</small></label>
                        <div>
                            <input type="text" id="description" className="w-full border-b-2" value={description} placeholder="Add some information about the product" onChange={(e)=>setDescription(e.target.value)} maxLength={200} />
                            <div className="flex justify-end text-gray-400">
                                {description.length}/200
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-4">
                    <label htmlFor="thumbnail">Thumbnail Image <small className="text-red-500">*</small></label>
                    <button className="bg-black text-white">
                        <label htmlFor="file-input" className="cursor-pointer">
                        <div className="flex justify-center">
                            <Image src="/add-image-icons.png" alt="add_photo" width="12" height="12" />
                        </div>
                        <span className="text-center">Add Image</span>
                        </label>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default InputForm