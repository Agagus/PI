import axios from 'axios';
import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getAllCountries } from '../../redux/actions/index';
import style from './CreateActivity.module.css';

const validate = (input) => {
  const error = {};

  if (!input.name) error.name = 'Enter a name';
  if (!input.difficulty) error.difficulty = 'Enter a difficulty';
  else if (input.difficulty < 1 || input.difficulty > 5)
    error.difficulty = 'Difficulty should be a number between 1 and 5';
  if (!input.duration) error.duration = 'Enter duration';
  if (!input.season) input.season = 'All year';
  if (!input.country) error.country = 'Enter a country';

  return error;
};

export const CreateActivity = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const history = useHistory();
  const [input, setInput] = useState({
    country: [],
  });
  const [error, setError] = useState({});

  useEffect(() => {
    // if(!countries.length)
    dispatch(getAllCountries());
  }, []);

  const handlerInput = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });

    console.log(input);

    setError(
      validate({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handlerCountries = (e) => {
    setInput({
      ...input,
      country: [...input.country, e.target.value],
    });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/activities', input).then(() => {
      history.push('/countries');
    });

    setInput({
      country: '',
    });
  };

  return (
    <div className={style.container}>
      <div className={style.nav}>
        <Link to='/countries'>
          <button className={style.button}>BACK</button>
        </Link>
      </div>
      <div className={style.cont}>
        <p className={style.title}>Complete the form to add a new activity</p>
        <p className={style.subtitle}>Fields marked with * are required</p>
        <form className={style.form} onSubmit={handlerSubmit}>
          <div className={style.camp}>
            <label>Name: *</label>
            <input
              className={style.input}
              name='name'
              type='text'
              onChange={handlerInput}
              value={input.name}
            ></input>
          </div>
          {error.name && <p className={style.subtitle}>{error.name}</p>}
          <div className={style.camp}>
            <label>Difficulty: *</label>
            <input
              className={style.input}
              name='difficulty'
              type='number'
              onChange={handlerInput}
              value={input.difficulty}
              placeholder='1 to 5'
            />
          </div>
          {error.difficulty && (
            <p className={style.subtitle}>{error.difficulty}</p>
          )}
          <div className={style.camp}>
            <label>Duration: *</label>
            <input
              className={style.input}
              name='duration'
              type='number'
              onChange={handlerInput}
              value={input.duration}
              placeholder='..hours'
            />
          </div>
          {error.duration && <p className={style.subtitle}>{error.duration}</p>}
          <div className={style.camp}>
            <label>Season:</label>
            <select
              className={style.option}
              name='season'
              onChange={handlerInput}
              value={input.season}
            >
              <option>Summer</option>
              <option>Autumn</option>
              <option>Winter</option>
              <option>Spring</option>
              <option select>All year</option>
            </select>
          </div>
          <div className={style.camp}>
            <label>Countries: *</label>
            <select
              className={style.option2}
              onChange={(e) => handlerCountries(e)}
              name='country'
              multiple
            >
              {allCountries &&
                allCountries.map((country) => {
                  return <option value={country.name}>{country.name}</option>;
                })}
            </select>
          </div>
          {/* {error.country && <p>{error.country}</p>} */}
          <button className={style.button} type='submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
