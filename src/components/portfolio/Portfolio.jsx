import { React, useState,useEffect } from "react";
import "./portfolio.css";
import PortfolioList from "./PortfolioList";

import {webPortfolio,landingPages} from '../store/Store'
const Portfolio = () => {
  const [activePortfolio, setActPortfolio] = useState(1);
  const [data, setData] = useState([]);
  const myPortfolio = [
    {
      id: 1,
      name: "Web App",
    },
    {
      id: 2,
      name: "Static",
    },
    {
      id: 3,
      name: "Design",
    },
    {
      id: 4,
      name: "Dynamic",
    },
  ];


  useEffect(() => {

      switch(activePortfolio){
          case 1:
            setData(webPortfolio)
            break;
          case 2:
            setData(landingPages)
            break;
          case 3:
            setData(webPortfolio)
            break;
          case 4:
            setData(landingPages)
            break;
      }
  }, [activePortfolio])
  return (
    <div className="portfolio">
      <h1>PORTFOLIO</h1>
      <ul>
        {myPortfolio.map((portfolio) => (
          <PortfolioList
            id={portfolio.id}
            active={activePortfolio === portfolio.id}
            setActPortfolio={setActPortfolio}
            name={portfolio.name}
          />
        ))}
      </ul>
      <div className="container">
          {data.map(d=>(
        <div className="item">
          <img src={d.Image} alt={d.name} />
          <h3>{d.name}</h3>
        </div>

          ))}
      </div>
    </div>
  );
};

export default Portfolio;
