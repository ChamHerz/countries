import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCountry } from '../../redux/actions';
import style from './country.module.css';

const Country = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const country = useSelector((state) => state.country);

  useEffect(() => {
    dispatch(getCountry(id));
    // eslint-disable-next-line
  }, []);

  return (
    <section className={style.section}>
      <img src={country.flag} alt="flag" className={style.img} />
      <div className={style.title}>
        <h1>{country.name}</h1>
      </div>
      <div className={style.data}>
        <h5>CODE: {country.id}</h5>
        <h5>CAPITAL: {country.capital}</h5>
        <h5>SUBREGION: {country.subregion}</h5>
        <h5>AREA: {country.area}</h5>
        <h5>POPULATION: {country.population}</h5>
      </div>
    </section>
  );
};

export default Country;
