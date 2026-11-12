const API_URL = "https://fakestoreapi.com/products"

export const getProducts = async ()=>{
    const response = await fetch(API_URL)

    if(!response.ok){
        throw new Error("Erro ao buscar Produtos.")
    }

    return response.json()
}

export const getProduct = async (id)=>{
    const response = await fetch(`${API_URL}/${id}`)

    if(!response.ok){
        throw new Error("Erro ao buscar Produto.")
    }
    
    return response.json()
}
// sendProduct() - POST
// updateProduct() - PUT
// removeProduct() - DELETE