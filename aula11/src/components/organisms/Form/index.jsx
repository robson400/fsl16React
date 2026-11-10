import InputForm from "../../molecules/InputForm"

const Form = ({ campos, style, btnText, onSubmit, error }) => {
    return(
        <form onSubmit={onSubmit}>
            <div>
                {
                    campos.map((campo, index) => 
                        <InputForm 
                            key={index} 
                            label={campo.label} 
                            type={campo.type} 
                            style={style}
                            isRequired={campo.isRequired}
                            action={campo.action}
                            value={campo.value} 
                        />
                    )
                }
                {
                    error && (<span style={{color:"red", display:"block"}}>{error}</span>)
                }
            </div>
            <button type="submit">{btnText}</button>
        </form>
    )
}

export default Form