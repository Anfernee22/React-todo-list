
const InputMessage = ({ emptyInput }) => {
    return(
        <div>
            {emptyInput && <div><p>{emptyInput}</p></div>}
        </div>
    )
}
export default InputMessage;