import { getProducts } from "../services/productsServices.js"

const useProducts = ()=>{
    
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(()=>{
        
    }, [])

    return
}

export default useProducts