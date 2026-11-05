import Header from "../organisms/Header"
import Footer from "../organisms/Footer"

const PageDefault = ({children, style=""})=>{
    return(
        <div id="container">
            <Header />
            <main className={style}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default PageDefault