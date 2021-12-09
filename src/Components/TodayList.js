import '../Styles/TodayList.css'
import { useState } from 'react'
const TodayList = ({list, id, li ,setTodayList, todayList, count}) => {
    const [completed, setCompleted] = useState(false)
    const deleteBtn = () => {
        setTodayList(todayList.filter(item => item.id !== li.id))
    }
    return(
            <div className="today-list-container">
                <ul key={id}>
                    <li className={completed ? 'completed' : 'today-list'}>{list}</li>
                </ul>
                <div className="today-buttons">
                    <button className="delete-btn" onClick={deleteBtn}><i className="fas fa-trash"></i></button>
                    <button className="complete-btn" onClick={() => setCompleted(!completed)}><i className="fas fa-check"></i></button>
                </div>
            </div>
    )
}
export default TodayList;