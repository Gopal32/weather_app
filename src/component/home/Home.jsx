import React,{useEffect, useState} from  'react';

const Home = () => {

  // State
const [apiData, setApiData] = useState({});
const [search, setSearch] = useState('mumbai');
const [state, setState] = useState('mumbai');

// API KEY AND URL
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=23f131d3e160c6bec919613bbd6210da`;

// Side effect
useEffect(() => {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => setApiData(data));
}, [apiUrl]);

const inputHandler = (event) => {
  setSearch(event.target.value);
};

const submitHandler = () => {
  setState(search);
};

const kelvinToFarenheit = (k) => {
  return (k - 273.15).toFixed(2);
};

  return (
    <>
    <div className="App" >
    <header className="d-flex justify-content-center align-items-center my-5">
      <h2>Weather App</h2>
    </header>
    <div className="container">
      <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
        <div className="col-auto">
          <input
            type="text"
            id="location-name"
            className="form-control"
            onChange={inputHandler}
            value={search}
          />
        </div>
        <button className="btn btn-outline-primary mt-2" onClick={submitHandler}>
          Search
        </button>
      </div>

      <div className="card mt-3 mx-auto" style={{ width: '60vw' }}>
        {apiData.main ? (
          <div className="card-body text-center">
            <img
              src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
              alt="weather status icon"
              className="weather-icon"
            />

            <p className="h2">
              {kelvinToFarenheit(apiData.main.temp)}&deg; C
            </p>

            <p className="h5">
              <i className="fas fa-map-marker-alt"></i>{' '}
              <strong>{apiData.name}</strong>
            </p>

            <div className="row mt-4">
              <div className="col-md-6">
                <p>
                  <i className="fas fa-temperature-low "></i>{' '}
                  <strong>
                    {kelvinToFarenheit(apiData.main.temp_min)}&deg; C
                  </strong>
                </p>
                <p>
                  <i className="fas fa-temperature-high"></i>{' '}
                  <strong>
                    {kelvinToFarenheit(apiData.main.temp_max)}&deg; C
                  </strong>
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  {' '}
                  <strong>{apiData.weather[0].main}</strong>
                </p>
                {' '}
                <strong>{apiData.weather[0].main}</strong>
              </div>
            </div>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  </div>
);
    </>
  )
}

export default Home;