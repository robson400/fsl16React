import { useState, useEffect } from "react"
import { getProduct } from "../services/productsService.js"

const useProduct = id =>{
    
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        async function loadProduct() {
            try {
                setLoading(true)
                const data = await getProduct(id)
                setProduct(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        loadProduct()
    }, [id])

    return {
        product,
        loading,
        error
    }
}

export default useProduct