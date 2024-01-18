import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import FruitierData from './FruitierData';

const API = process.env.REACT_BASE_URL;

export default function Fruitiers() {
   console.log(API)
    // const navigate = useNavigate();
  const [theFruits, setTheFruits] = useState([]);

  const fetchFruits = async () => {
    try {
      fetch(`${API}/fruits`)
        .then((response) => response.json())
        .then((response) => {
          setTheFruits(response)
        
        });
      
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    fetchFruits();
  }, []);

  // const handleBackHome = () => {
  //   navigate('/')
  // }
  
  return (
    <section className='fruitData'>
      <table>
        <thead>
          <tr>
            <th>Images</th>{''}
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {theFruits.map((fruitier) => {
            return < FruitierData key={fruitier.id} fruitier={fruitier} />
            console.log(fruitier)
        })} 
        </tbody>
      </table>
      <button className="btn">
        Back
      </button> 
    </section>
  );
}
