const InputForm = ({ label, type, style, isRequired=false })=>{

    const id = `ipt-${label.toLowerCase()}`

    return(
        <div className={style.campo}>
            <label htmlFor={id}>{label}:</label>
            <input type={type} id={id} name={label.toLowerCase()} required={isRequired} />
        </div>
    )
}

export default InputForm 