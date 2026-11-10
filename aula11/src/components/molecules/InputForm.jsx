const InputForm = ({ label, type, style, isRequired=false, action, value })=>{

    const id = `ipt-${label.toLowerCase()}`

    return(
        <div className={style.campo}>
            <label htmlFor={id}>{label}:</label>
            <input 
                type={type} 
                id={id} 
                name={label.toLowerCase()} 
                required={isRequired}
                onChange={e => action(e.target.value)}
                value={value}
                />
        </div>
    )
}

export default InputForm 