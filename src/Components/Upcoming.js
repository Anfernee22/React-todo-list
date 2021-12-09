import '../Styles/Upcoming.css'

const Upcoming = ({ list, li, id, upComingList, setUpcomingList}) => {
    const deleteBtn = () => {
        setUpcomingList(upComingList.filter(item => item.id !== li.id))
    }
    const completedBtn = () => {
        setUpcomingList(upComingList.map((item) => {
            if(item.id === li.id){
                return{
                    ...item, completed: !item.completed,
                };
            }
            return item;
        }))
    }
    return(
            <div className="upcoming-list-container">
                <ul key={id}>
                    <li className={`upcoming-list ${li.completed ? 'completed' : ''}`} >{list}</li>
                </ul>
                <div className="upcoming-buttons">
                    <button className="delete-btn" onClick={deleteBtn}><i className="fas fa-trash"></i></button>
                    <button className="complete-btn" onClick={completedBtn}><i className="fas fa-check"></i></button>
                </div>
            </div>
    )
}
export default Upcoming;
