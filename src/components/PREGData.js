import React from 'react'
import {Table} from 'reactstrap'

function afterpain()
{
    return( <div>
   
        <Table size="sm">
      <thead>
            <tr>
              <th>#</th>
              <th>Ingredient</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
          <tr><th scope="row">1</th>
              <td>Murungai keerai</td><td>1 handful</td> </tr>
          <tr><th scope="row">2</th>
              <td>Garlic</td> <td>4 cloves</td></tr>
          <tr><th scope="row">3</th>
              <td>Cumin seeds</td><td>1 tbsp</td> </tr>
          <tr><th scope="row">4</th>
              <td>Vasambu</td><td>1 small piece</td></tr>
          <tr><th scope="row">5</th>
              <td>Salt</td> <td>Required</td></tr>
              </tbody></Table></div>);
}

function monthsix()
{
    return(<div>
   
        <Table size="sm">
      <thead>
            <tr>
              <th>#</th>
              <th>Ingredient</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
          <tr><th scope="row">1</th>
              <td>Sakthi saaranai vaer</td><td>1 handful</td> </tr>
          <tr><th scope="row">2</th>
              <td>Kurundhotti vaer</td> <td>4 cloves</td></tr>
          <tr><th scope="row">3</th>
              <td>Garlic</td><td>1 tbsp</td> </tr>
          <tr><th scope="row">4</th>
              <td>Coriander seeds</td><td>1 small piece</td></tr>
          <tr><th scope="row">5</th>
              <td>Cumin seeds</td> <td>Required</td></tr>
              </tbody></Table></div>);
}



export default afterpain
export {monthsix}