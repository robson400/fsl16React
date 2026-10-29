import { useState, useEffect } from "react"
import { getProducts } from "../services/productsService.js"

const useProducts = ()=>{
    
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        async function loadProducts() {
            try {
                setLoading(true)
                const data = await getProducts()
                setProducts(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        loadProducts()
    }, [])

    return {
        products,
        loading,
        error
    }
}

export default useProducts