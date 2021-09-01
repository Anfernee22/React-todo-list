import '../Styles/TodayList.css'

const TodayList = ({list, id, li ,setTodayList, todayList, count}) => {
    
    const deleteBtn = () => {
        setTodayList(todayList.filter(item => item.id !== li.id))
        // setSaveList(todayList.filter(item => item.id !== li.id))
    }
    const completedBtn = () => {
        setTodayList(todayList.map(item => {
            if(item.id === li.id){
                return{
                    ...item, completed: !item.completed,
                };
                
            }
            return item;
        }))
    }
    return(
        <div className="container-1">
            <div className="today-list-container">
                <ul key={id}>
                    <li className={`today-list ${li.completed ? 'completed' : ''}`}>{list}</li>
                </ul>

                <div className="today-buttons">
                    <button className="delete-btn" onClick={deleteBtn}><i className="fas fa-trash"></i></button>
                    <button className="complete-btn" onClick={completedBtn}><i className="fas fa-check"></i></button>
                </div>
            </div>
        </div>
    )
}
export default TodayList;