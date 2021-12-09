
const InputMessage = ({ emptyInput }) => {
    return(
        <div>
            {emptyInput && <div><p style={{color: 'red'}}>{emptyInput}</p></div>}
        </div>
    )
}
export default InputMessage;