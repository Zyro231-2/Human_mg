import { toast } from "react-toastify";

export default function Filter(props) {
    let category=props.category;
    let setCategory=props.setCategory;

    function clickHandler(tittle) {
        toast.dismiss()
        toast.success("Moved to " + tittle)
        setCategory(tittle)
    }

    return(
        <div className="py-4 text-center">{
        props.filterData.map((data)=>{   
            return(
                <button onClick={()=>clickHandler(data.tittle)} key={data.id} className="focus:border-2 ml-8 px-2 py-1 rounded-md bg-gray-800 text-white">{data.tittle}</button>
            )
        })
    }</div>
    )
}