import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteActivity, getActivities } from '../../redux/actions';
import style from '../CountryDetail/CountryDetail.module.css';

const ActivityCard = ({ id, name, difficulty, duration, season }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  const handleActivities = (id) => {
    dispatch(deleteActivity(id));
    console.log('delete activity');
  };

  return (
    <div className={style.card}>
      <button onClick={() => handleActivities(id)} className={style.button}>
        x
      </button>
      <h4 className={style.name}>{name}</h4>
      <div className={style.details}>
        <p>Difficulty: {difficulty}</p>
        <p>Duration: {duration}</p>
        <p>Season: {season}</p>
      </div>
    </div>
  );
};

export default ActivityCard;
