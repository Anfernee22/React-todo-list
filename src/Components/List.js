import '../Styles/List.css';
import TodayList from './TodayList';
import Upcoming from './Upcoming'
const List = ({ todayList, setTodayList, upComingList, setUpcomingList, setSaveList, saveList, completed, setCompleted, count}) => {
   
    return(
        <div className="list-container">
            <div className="today-container">
                <h3>Today:</h3>
                {todayList.map(li => (
                    <TodayList list={li.Today} li={li} key={li.id} setTodayList={setTodayList} todayList={todayList} setSaveList={setSaveList} completed={completed} setCompleted={setCompleted} count={count}/>
                ))}
            </div>
            <div className='border-line'></div>
            <div className="upcoming-container">
                <h3>Upcoming:</h3>
               {upComingList.map(li => (
                   <Upcoming list={li.Upcoming} li={li} key={li.id} upComingList={upComingList} setUpcomingList={setUpcomingList} completed={completed} setCompleted={setCompleted} saveList={saveList}/>
               ))}
            </div>
        </div>
    )
}
export default List;