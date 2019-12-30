import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Paginator from 'react-hooks-paginator';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './style.css';
const axios = require("axios");

function Single(props) {
  const slug = props.match.params.slug;
  const [data, setData] = useState([]);

  const pageLimit = 10;
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://dog.ceo/api/breed/"+slug+"/images");
      setData(result.data.message);
      //console.log(result.data.message);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setCurrentData(data.slice(offset, offset + pageLimit));
  }, [offset, data]);
 

  return (
    <div>
      <Header/>
      <div className="container">
        <p>Resultado para la raza <span>{slug}:</span></p>
      </div>
      <div className="dog-imgaes container-fluid">
       
        { currentData.map(dat => <img src={dat} className="img-responsive animated fadeIn delay-1s" alt={slug}/> )}
      <br/><br/>
      <div class="text-center">
        <a href="/">Volver al inicio</a>
      <Paginator
        totalRecords={data.length}
        pageLimit={pageLimit}
        pageNeighbours={2}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />              </div>
            

      </div>
      <br/><br/>
      <Footer/>
    </div>
  );
}
export default Single;
