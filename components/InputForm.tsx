import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import BranInputComponent from "./BrandInputComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faImage} from "@fortawesome/free-solid-svg-icons";


const InputForm:NextPage = () =>{

    const [name,setName] = useState<string>('');
    const [category,setCategory] = useState<string>('collectibles');
    const [brand,setBrand] = useState<string>('');
    const [brandArray,setBrandArray] = useState<Array<string>>([]);
    const [description ,setDescription] = useState<string>('');
    const [available_qty,setAvailableQty] = useState<number>();
    const [condition,setCondition] = useState<string>('new');
    const [declaration,setDeclaration] = useState<boolean>(false);
    const [season,setSeason] = useState<string>('');
    const [retail, setRetail] = useState<number>();

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
        <div className="pt-20 px-20 grid grid-cols-2 lg:border-l-2">
            <div className="col-span-2 order-1">
                <div >
                    <label className="font-bold" htmlFor="product_name">Product Name <small className="text-red-500">*</small></label>
                    <div className="mt-4">
                        <input type="text" id="product_name"  className="w-full border-b-2" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name your listing. Keep it short and sweet" />
                    </div>
                </div>
            </div>
            <div className="col-span-2 lg:col-span-1 order-2 mt-8">
                <div>
                    <label className="font-bold" htmlFor="category">Category <small className="text-red-500">*</small></label>
                    <div className="mt-4">
                        <button onClick={()=>setCategory('collectibles')} className={`py-1 px-2 ${category === 'collectibles' ? 'bg-black text-white border-solid border-2 border-black' : 'border-gray-900 border-solid border-2' }`}>Collectibles</button>
                        <button onClick={()=>setCategory('accessories')} className={`py-1 px-2 ml-2 ${category === 'accessories' ? 'bg-black text-white border-solid border-2 border-black' : 'border-gray-900 border-solid border-2' }`}>Accessories</button>
                        <button onClick={()=>setCategory('t-shirt')} className={`py-1 px-2 ml-2 ${category === 't-shirt' ? 'bg-black text-white border-solid border-2 border-black' : 'border-gray-900 border-solid border-2' }`}>T-Shirts</button>
                    </div>
                </div>
            </div>
            <div className="col-span-2 order-3 lg:order-4 mt-8">
                <label className="font-bold" htmlFor="brand">Brand (up to 2) <small className="text-red-500">*</small></label>
                <div className="mt-4">
                    <input type="text" id="brand" className="w-full border-b-2" value={brand} onChange={(e)=>setBrand(e.target.value)} placeholder="Add a keyword and press Enter" onKeyDown={handleKeyPress} />
                    {brandArray.length !== 0 &&
                    <div className="pt-4">
                    {brandArray.map((item,index)=>{
                        return <BranInputComponent item={item} key={index} 
                        onClick={()=>{
                            const data = [...brandArray];
                            data.splice(index,1);
                            setBrandArray(data);
                        }} />
                    })}
                    </div>}
                </div>
            </div>
            <div className="col-span-2 order-4 lg:order-5 mt-8">
                <label className="font-bold" htmlFor="description">Description <small className="text-red-500">*</small></label>
                <div className="mt-4">
                    <input type="text" id="description" className="w-full border-b-2" value={description} placeholder="Add some information about the product" onChange={(e)=>setDescription(e.target.value)} maxLength={200} />
                    <div className="flex justify-end text-gray-400">
                        {description.length}/200
                    </div>
                </div>
            </div>
            <div className="col-span-1 order-5 lg:order-3 mt-8">
                <label className="font-bold" htmlFor="thumbnail">Thumbnail Image <small className="text-red-500">*</small></label>
                <div className="mt-4">
                    <button className="bg-black text-white px-2 py-1">
                        <label htmlFor="file-input" className="cursor-pointer flex justify-center items-center">
                        
                            <FontAwesomeIcon className="color-black text-base" icon={faImage}/>
                        
                        <span className="text-center ml-2">Add Image</span>
                        </label>
                    </button>
                </div>
            </div>
            <div className="col-span-1 order-6 mt-8 ">
                <label className="font-bold" htmlFor="available_qty">Available Qty <small className="text-red-500">*</small></label>
                <div className="mt-4">
                    <input id="available_qty" type="number" className="w-full border-b-2" value={available_qty} onChange={(e)=>setAvailableQty(parseInt(e.target.value))} placeholder="Enter available quanlity"  />
                </div>
            </div>
            <div className="col-span-2 order-7 mt-8">
                <label className="font-bold" htmlFor="condition">Condition</label>
                <div className="mt-4">
                    <button onClick={()=>setCondition('bad')} className={`py-1 px-2 ${condition === 'bad' ? 'bg-black text-white border-solid border-2 border-black' : 'border-gray-900 border-solid border-2' }`}>Bad</button>
                    <button onClick={()=>setCondition('fair')} className={`py-1 px-2 ml-2 ${condition === 'fair' ? 'bg-black text-white border-solid border-2 border-black' : 'border-gray-900 border-solid border-2' }`}>Fair</button>
                    <button onClick={()=>setCondition('good')} className={`py-1 px-2 ml-2 ${condition === 'good' ? 'bg-black text-white border-solid border-2 border-black' : 'border-gray-900 border-solid border-2' }`}>Good</button>
                    <button onClick={()=>setCondition('new')} className={`py-1 px-2 ml-2 ${condition === 'new' ? 'bg-black text-white border-solid border-2 border-black' : 'border-gray-900 border-solid border-2' }`}>New</button>
                </div>
            </div>
            <div className="col-span-1 order-8 mt-8 ">
                <label className="font-bold" htmlFor="season">Season</label>
                <div className="mt-4">
                    <input id="season" type="text" value={season} onChange={(e)=>setSeason(e.target.value)} className="w-full border-b-2" placeholder="SS20" />
                </div>
            </div>
            <div className="col-span-1 order-9 mt-8 ml-4 ">
                <label className="font-bold" htmlFor="retail">Retail</label>
                <div className="w-full border-b-2 mt-4 flex">
                    <label>S$</label>
                    <input id="retail" type="number" value={retail} onChange={(e)=>setRetail(parseInt(e.target.value))} className="w-full" placeholder="400" />
                </div>
            </div>
            <div className="col-span-2 order-10 mt-8">
                <label className="font-bold">Authencity</label>
                <div className="mt-4">
                    <span>100%</span>
                </div>
            </div>
            <div className="col-span-2 order-11 mt-8">
                <label className="font-bold">Declaration <small className="text-red-500">*</small></label>
                <div className="mt-4">
                    <label htmlFor="declaration_check" className="flex">
                        <div>
                        <input type="checkbox" id="declaration_check" className="mr-2" checked={declaration} onChange={(e)=>setDeclaration(e.target.checked)} />
                        </div>
                            I hereby declare that my item is 100% authentic and in the original packaging. In the event that any information given in this application proves to be false or incorrect, I shall be responsible for the consequences.
                    </label>
                </div>
            </div>
            <div className="col-span-2 order-12 mt-8">
                <div className="flex justify-end lg:justify-start mt-4">
                    <label>
                        <small className="text-red-500">*</small>
                            indicates required
                    </label>
                </div>
                <div className="flex justify-center lg:justify-end mt-4 ">
                    <button className={`py-1 px-2 border-gray-500 border-solid border-2 hover:border-gray-900 mr-2`}>Cancel</button>
                    <button className={`py-1 px-2 bg-black text-white border-solid border-2 border-black hover:border-white-900 hover:bg-white`}>Publish</button>
                </div>
            </div>
        </div>    
    )
}
export default InputForm