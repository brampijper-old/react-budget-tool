import React from 'react';
import { Link } from 'react-router-dom';
import "./RapportsCollection.css";

//Make api call for retreiving all rapports.
const RAPPORTS = [
  { 
    id: 1, 
    date: 'December 2019',
    totalSavings: 0,
  },
  { 
    id: 2, 
    date: 'November 2019',
    totalResult: 0, 
  },
];

function RapportsCollection() {
  const rapportItems = RAPPORTS.map((rapport) => {
    return (
      <li key={rapport.id}>
        <Link to={`/rapport/${rapport.id}`}>
            {rapport.date}
        </Link> 
      </li>
    )         
  });

  return (
    <div>
      <h2> Rapport items </h2>
      <ul>{rapportItems}</ul>
    </div>
  )
}



export default RapportsCollection;