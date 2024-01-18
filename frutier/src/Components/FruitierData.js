import React from 'react'
import { Link } from 'react-router-dom'

export default function FruitierData({ fruitier }) {
  console.log(fruitier)
  return (
    <tr>
      <td>
        <Link to={`/fruits/${fruitier.id}`}> {fruitier.Images}</Link>
      </td>
      <td>
        <Link to={`/fruits/${fruitier.id}`}>{fruitier.Name}</Link>
      </td>
      <td>
        <Link to={`/fruits/${fruitier.id}`}>{fruitier.Taste}</Link>
      </td>
    </tr>
  );
}
