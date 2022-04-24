import {useParams} from "react-router-dom"

export const Products = () =>{
    const values = useParams();
    console.log(values)
    return <div>Product</div>
}