import React, { useState, useEffect } from "react";


import './style.css';
const axios = require("axios");

function Selector() {

  const [data, setData] = useState([]);
  const [raza, setRaza] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://dog.ceo/api/breeds/list/all");
      const arrResult = Object.keys(result.data.message);
      setData(arrResult);
    };
    fetchData();
  }, []);

  function handleChange(e){
    
    setRaza(e.target.value);

  }

  function handleSubmit(e){
    if(raza == ""){
      alert('Debes elegir una raza!!');
    }else{
      e.preventDefault();
      window.location = raza; 
    }
    
  };

  return (

    <div>
      <div className="container">
        <form>
        <label>Elige tu perro:</label>
        <select className="form-control" onChange={handleChange} value={raza}>
          <option disabled selected="selected" value="default"> - SELECCIONA UNA RAZA -</option>
          { data.map(dat => <option key={dat} value={dat}>{dat}</option>) }
        </select>
        <button type="button" onClick={handleSubmit} className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Selector;
