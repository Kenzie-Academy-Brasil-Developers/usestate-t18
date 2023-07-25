export const Select = ({ children, value }) => {
    return (
        <div role="menu">
            <p>{value === "" ? "Selecione uma opção" : value}</p>
            <ul>
                {children}               
            </ul>
        </div>
    )
}