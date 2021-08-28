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
            <ul key={id}>
                <li className={`list ${li.completed ? 'completed' : ''}`}>{list}</li>
                <div className="buttons">
                    <button className="delete-btn" onClick={deleteBtn}><i className="fas fa-trash"></i></button>
                    <button className="complete-btn" onClick={completedBtn}><i className="fas fa-check"></i></button>
                </div>
            </ul>
        </div>
    )
}
export default TodayList;