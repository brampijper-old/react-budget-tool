import React from 'react';
import {hot} from "react-hot-loader";
import { Route, Link } from 'react-router-dom';
import "./RapportsCollection.css";

const RAPPORTS = [
    { 
      id: 1, 
      date: 'December 2019',
      totalResult: 0,
      expenses: {
        totalExpenses: 0,
        mainCategories: {
          food: {
            home: [4.5, 0.59, 8.25],
            restaurant: [21.5, 11.50],
            takeout: [7.50]
          },
          shelter: {
            studio: [600],
            hotels: [],
            hostels: []
          },
          utilities: {
            phone: [25],
            transport: [40]
          }
        }
      },
      income: {
        totalIncome: 0,
        mainCategories: {
          income: {
            paycheck: [1800],
            interest: [],
            taxes: []
          }
        }
      }, 
    },
  ];

class RapportsCollection extends React.Component {
    render() {
        const rapportItems = RAPPORTS.map((rapport) => {
            return (
                <li key={rapport.id}>
                    <a href={rapport.id}>
                        {rapport.date}
                    </a> 
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
}

export default hot(module)(RapportsCollection);