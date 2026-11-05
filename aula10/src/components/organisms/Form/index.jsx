import InputForm from "../../molecules/InputForm"

const Form = ({ campos, style, btnText, onSubmit }) => {
    return(
        <form onSubmit={onSubmit}>
            {
                campos.map((campo, index) => 
                    <InputForm 
                        key={index} 
                        label={campo.label} 
                        type={campo.type} 
                        style={style}
                        isRequired={campo.isRequired} 
                    />
                )
            }
            <button type="submit">{btnText}</button>
        </form>
    )
}

export default Form