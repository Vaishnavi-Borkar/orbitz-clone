import axios from "axios";
import { useState, useEffect } from "react";
import Hotel from "./Hotel"
const getData = async () => {
    return axios.get("http://localhost:8000/hotels");

}



const Hotels = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getData().then((res) => {
            setProduct(res.data)
        })
    }, [])

    return (
        <>
            <Grid>
                {product.map((p) => {
                    <Hotel key={p.id} {...p} />
                })}
            </Grid>
        </>
    )
}

export default Hotels