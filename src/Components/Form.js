import InputMessage from "./InputMessage";
import '../Styles/Form.css'

const Form = ( {inputText ,setInputText ,selectedOption ,setSelectedOption ,todayList, setTodayList, upComingList, setUpcomingList, saveList ,setSaveList ,emptyInput ,setEmptyInput}) => {
    const max = 10000;
    const min = 10;
    const inputChanged = (e) => {
        e.preventDefault()
        setInputText(e.target.value)
    }
    const addButton = (e) => {
        e.preventDefault()
        if(inputText === ''){
            setEmptyInput('Fill in the input')
        }else{
            setSaveList([...saveList, {List: inputText, id: Math.floor(Math.random() * (max - min) + min)}]);
            setInputText('');
            storeList()
        }
        setTimeout(() => setEmptyInput(), 1000)
    }
    const optionChanged = (e) => {
        setSelectedOption(e.target.value)
        setInputText('')
    }
    const storeList = () => {
        if(selectedOption === 'Today'){
            setTodayList([...todayList, {Today: inputText, id: Math.floor(Math.random() * (max - min) + min)}]);
        }else{
            setUpcomingList([...upComingList, {Upcoming: inputText, id: Math.floor(Math.random() * (max - min) + min)} ])
        }
    }
    return (
        <form className="input-container">
            <div className="input-radio"  >
                <input type="radio" name="list"  value='Today' checked={selectedOption === 'Today'} onChange={optionChanged}/>
                <label htmlFor="today" id="today" >Today</label>
                <input type="radio"  name="list" value='Upcoming' checked={selectedOption === 'Upcoming'} onChange={optionChanged}/>
                <label htmlFor="upcoming" id="upcoming">Upcoming</label>
            </div>
            <InputMessage emptyInput={emptyInput}/>
            <div className="input-field" >
                <input type="text" id="input-text" onChange={inputChanged} value={inputText} placeholder="Enter List"/>
                <button className="add-btn" onClick={addButton}>Add</button>
            </div>
        </form>
    )
}
export default Form;