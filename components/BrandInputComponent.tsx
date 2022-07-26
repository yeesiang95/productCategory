
interface Props{
    item:string,
    onClick:()=>void
}

const BranInputComponent=({item,onClick}:Props)=>{

    return(
        <>
        <span className="mr-2 border-black border-2 px-8 py-2">
            {item} 
            <span className="cursor-pointer" onClick={onClick}>X</span>
        </span>
        </>
    )
}
export default BranInputComponent