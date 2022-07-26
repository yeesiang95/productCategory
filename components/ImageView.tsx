import Image from 'next/image';


interface Props{
    images:FileList|undefined
}

const ImageView=({images}:Props)=>{
    
    return(
        <>
        {images && 
        <div className="flex justify-center">
        <div className="p-2 mt-8 w-1/2  h-48 lg:h-96 border-2 border-black">
            <div className='grid grid-cols-2 lg:grid-cols-5'>
            {Array.from(images).map((item,index)=>{
                const src = URL.createObjectURL(item);
                return(
                    <div className='col-span-1'>
                        <Image key={index} src={src}  width={40} height={40} />
                    </div>
                    
                )
            })}
            </div>
        
        </div>
        
        </div>}
        </>
    )
}
export default ImageView;