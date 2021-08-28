
import Header from "./Components/Header";
import ListContainer from "./Components/ListContainer";
import './Styles/App.css';
import { useState } from 'react';
function App() {
  const [inputText, setInputText] = useState('');
  const [selectedOption, setSelectedOption] = useState('Today');
  const [saveList, setSaveList] = useState([]);
  const [todayList, setTodayList] = useState([]);
  const [upComingList, setUpcomingList] = useState([]);
  const [emptyInput, setEmptyInput] = useState('')
  const count = todayList.length + upComingList.length;
  return (
    <div className="app">
      <Header/>
      <ListContainer inputText={inputText} setInputText={setInputText} selectedOption={selectedOption} setSelectedOption={setSelectedOption} saveList={saveList} setSaveList={setSaveList} todayList={todayList} setTodayList={setTodayList} upComingList={upComingList} setUpcomingList={setUpcomingList} emptyInput={emptyInput} setEmptyInput={setEmptyInput} count={count}/>
    </div>
  );
}


export default App;
