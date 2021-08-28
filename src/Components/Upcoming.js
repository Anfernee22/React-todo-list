import '../Styles/Upcoming.css'

const Upcoming = ({ list, li, id, upComingList, setUpcomingList, completed, saveList}) => {
    const deleteBtn = () => {
        setUpcomingList(upComingList.filter(item => item.id !== li.id))
    }
    const completedBtn = () => {
        // setCompleted(upComingList.filter(item => item.id === li.id))
        setUpcomingList(upComingList.map((item) => {
            if(item.id === li.id){
                return{
                    ...item, completed: !item.completed,
                };
            }
            return item;
        }))
        console.log(li.completed)
    }
    return(
        <div className="container-2">
             <ul key={id}>
                <li className={`list ${li.completed ? 'completed' : ''}`} >{list}</li>
                <div className="buttons">
                    <button className="delete-btn" onClick={deleteBtn}><i className="fas fa-trash"></i></button>
                    <button className="complete-btn" onClick={completedBtn}><i className="fas fa-check"></i></button>
                </div>
            </ul>
        </div>
    )
}
export default Upcoming;
