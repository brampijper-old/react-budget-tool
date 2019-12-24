import React from 'react';

//Make API call for retreiving a single Rapport (give ID to the back-end)
const RAPPORT = {
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
}

function Rapport(props) {    
    return (
        <div>
            <h2> Individual rapport! </h2>
            <p>ID of the rapport is: {props.match.params.id} </p>
        </div>
    )
}

export default Rapport;