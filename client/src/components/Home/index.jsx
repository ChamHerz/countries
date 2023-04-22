import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";
import Countries from "../Countries";
import StyledSelect from "../../styled components/StyledSelect";
import style from "./home.module.css";
import Paginator from "../Paginator";

function Home() {
  const [countriesFilter, setCountriesFilter] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [maxPag, setMaxPag] = useState(0);
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const continenteSelect = useRef(null);
  const activitySelect = useRef(null);
  const orderSelect = useRef(null);

  useEffect(() => {
    dispatch(getCountries());
    // eslint-disable-next-line
  }, []);

  /* FILTRO */

  const clausureContinent = (country) => {
    if (continenteSelect.current.value === "Todos") return true;
    return country.continent === continenteSelect.current.value;
  };

  const clausureActivity = (country) => {
    if (activitySelect.current.value === "Todas") return true;
    return country.activities.some(
      (oneActivity) => oneActivity.name === activitySelect.current.value
    );
  };

  const finalClausure = (country) =>
    clausureContinent(country) && clausureActivity(country);

  /* FIN FILTRO */

  /* ORDENAMIENTO */

  /* FIN ORDENAMIENTO */

  const onFilter = () => {
    const order = orderSelect.current.value;
    let orderA;
    let orderB;
    let property;

    switch (order) {
      case "de la A a la Z":
        orderA = 1;
        orderB = -1;
        property = "name";
        break;
      case "de la Z a la A":
        orderA = -1;
        orderB = 1;
        property = "name";
        break;
      case "pob. de menor a mayor":
        orderA = 1;
        orderB = -1;
        property = "population";
        break;
      case "pob. de mayor a menor":
        orderA = -1;
        orderB = 1;
        property = "population";
        break;
    }

    countries.sort(function (a, b) {
      if (a[property] > b[property]) return orderA;
      if (a[property] < b[property]) return orderB;
      return 0;
    });

    setMaxPag(
      Math.floor(
        countries.filter((country) => finalClausure(country)).length / 10
      )
    );

    setCountriesFilter(
      countries
        .filter((country) => finalClausure(country))
        .slice(currentPage * 10, currentPage * 10 + 10)
    );

    //maxPag = Math.floor(countriesFilter.length / 10);
  };

  useEffect(() => {
    onFilter();
    // eslint-disable-next-line
  }, [countries, currentPage]);

  return (
    <React.Fragment>
      <section className={style.section}>
        <div className={style.menu}>
          <input className={style.input}></input>
          <StyledSelect
            name="Continente:"
            backColor="#d9e6ee"
            color="#31429e"
            label="#1b1e3f"
            options={[
              "Todos",
              "South America",
              "North America",
              "Europe",
              "Africa",
              "Asia",
              "Oceania",
            ]}
            reference={continenteSelect}
            onChange={() => onFilter()}
          />
          <StyledSelect
            name="Actividad turística:"
            backColor="#d9e6ee"
            color="#31429e"
            label="#1b1e3f"
            options={[
              "Todas",
              "ski",
              "trekking",
              "rafting",
              "parapente",
              "paracaidismo",
              "ciclismo",
              "rappel",
              "buceo",
              "pesca",
            ]}
            reference={activitySelect}
            onChange={() => onFilter()}
          />
          <StyledSelect
            name="Alfabeto:"
            backColor="#d9e6ee"
            color="#31429e"
            label="#1b1e3f"
            options={[
              "de la A a la Z",
              "de la Z a la A",
              "pob. de menor a mayor",
              "pob. de mayor a menor",
            ]}
            reference={orderSelect}
            onChange={() => onFilter()}
          />
        </div>
        <Paginator
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          maxPag={maxPag}
        />
        <div className={style.cards}>
          {countriesFilter &&
            countriesFilter.map((country) => (
              <Link to={`/country/${country.id}`} key={country.id}>
                <Countries
                  key={country.id}
                  flag={country.flag}
                  name={country.name}
                  continent={country.continent}
                />
              </Link>
            ))}
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;
