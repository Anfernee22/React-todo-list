import '../Styles/ListContainer.css';
// import { useState } from 'react';
// import InputMessage from './InputMessage';
import Form from './Form';
import List from './List';

const ListContainer = ({inputText, setInputText, selectedOption, setSelectedOption, saveList, setSaveList, todayList, setTodayList, upComingList, setUpcomingList, emptyInput, setEmptyInput , count}) => {
    return( 
        <div className="list-wrapper">
            <div className="container-wrapper">
                <Form inputText={inputText} setInputText={setInputText} selectedOption={selectedOption} setSelectedOption={setSelectedOption} saveList={saveList} setSaveList={setSaveList} todayList={todayList} setTodayList={setTodayList} upComingList={upComingList} setUpcomingList={setUpcomingList} emptyInput={emptyInput} setEmptyInput={setEmptyInput}/>
                <List todayList={todayList} setTodayList={setTodayList} upComingList={upComingList} setUpcomingList={setUpcomingList} saveList={saveList} setSaveList={setSaveList} count={count}/>
            </div>

            <div className="list-count">
                <p>You have {count} things to do.</p>
            </div>
        </div>
    ) 
}
export default ListContainer;