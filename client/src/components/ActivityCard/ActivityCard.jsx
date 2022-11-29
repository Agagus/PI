import { useDispatch } from 'react-redux';
import { deleteActivity } from '../../redux/actions';
import style from '../CountryDetail/CountryDetail.module.css';

const ActivityCard = ({id ,name, difficulty, duration, season}) => {
    
    const dispatch = useDispatch();

    const handleActivities = (e) => {
        dispatch(deleteActivity(id));
    }

    return (
        <div className={style.card}>
            <button onClick={handleActivities}>x</button>
            <h4 className={style.name}>{name}</h4>
            <div className={style.details}>
                <p>Difficulty: {difficulty}</p>
                <p>Duration: {duration}</p>
                <p>Season: {season}</p>
            </div>
        </div>
    )
}

export default ActivityCard;