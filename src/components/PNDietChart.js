import React from "react";
import { Table, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function PNKitDietChart() {
  return (
    <div>
      <Table size="bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>What to eat</th>
            <th>When to eat after delivery</th>
            <th>Time</th>
            <th>How to eat</th>
            <th>Precaution</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Poondu legiyam</td>
            <td>Days 5,6,7</td>
            <td>10 pm</td>
            <td>
              <Link to="/PNLegiyam">Click here </Link>for ingredients and
              preparation
            </td>
            <td>
              Water should be taken only 1/2 hour after taking legiyam.Next day
              morning, ginger juice extract with honey must be taken compulsory.
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>

            <td>Dried ginger legiyam</td>
            <td>Days 8,9,10</td>
            <td>10 pm</td>
            <td>
              <Link to="/PNLegiyam">Click here </Link>for ingredients and
              preparation
            </td>
            <td>
              Water should be taken only 1/2 hour after taking legiyam.Next day
              morning, ginger juice extract with honey must be taken compulsory.
            </td>
          </tr>

          <tr>
            <th scope="row">3</th>

            <td>Prasava legiyam</td>
            <td>Days 10-38</td>
            <td>10 pm</td>
            <td>
              <Link to="/PNLegiyam">Click here </Link>for ingredients and
              preparation
            </td>
            <td>
              Water should be taken only 1/2 hour after taking legiyam.Next day
              morning, ginger juice extract with honey must be taken compulsory.
            </td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Mustard legiyam</td>
            <td>Days 29,30,31</td>
            <td>10 pm</td>
            <td>
              <Link to="/PNLegiyam">Click here </Link>for ingredients and
              preparation
            </td>
            <td>
              Water should be taken only 1/2 hour after taking legiyam.Next day
              morning, ginger juice extract with honey must be taken compulsory.
            </td>
          </tr>
          <tr>
            <th scope="row">5</th>

            <td>Marundhu Kuzhambu podi</td>
            <td>Day 1-28</td>
            <td>Every meal</td>
            <td>
              <Link to="/PNMarundhuPodi">Click here </Link>for ingredients and
              preparation
            </td>
            <td>None.This podi should be used in kuzhambu preparation</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

function PNDietChart() {
  return (
    <div>
      <Table size="bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Days after delivery</th>
            <th>Time</th>
            <th>What to eat</th>
            <th>How to eat</th>
            <th>Precaution</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>First 28 days</td>
            <td>6 am</td>
            <td>Ginger extract with honey</td>
            <td>Consumed empty stomach</td>
            <td>Milk should be taken after 1/2 hour</td>
          </tr>{" "}
          <tr>
            <th scope="row">2</th>
            <td>First 28 days</td>
            <td>6 am</td>
            <td>Garlic with palm jaggery</td>
            <td>
              Garlic should be fried without oil/ghee or shown directly in flame
              and consumed along with Palm jaggery
            </td>
            <td>None</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Days 2,3,4</td>
            <td>10 pm</td>
            <td>Turmeric balls ( size of amla )</td>
            <td>Turmeric should be mixed with little water and consumed</td>
            <td>
              If taken,the next day morning, ginger must be taken
              compulsory.Water should be taken only 1/2 hour after taking
              legiyam
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Days 5,6,7</td>
            <td>10 pm</td>
            <td>Poondu legiyam</td>
            <td>
              <Link to="/PNLegiyam">Check here </Link>or{" "}
              <Link to="/buynow">buy from us </Link>
            </td>
            <td>
              Water should be taken only 1/2 hour after taking legiyam.Next day
              morning, ginger juice extract with honey must be taken compulsory.
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Days 8,9,10</td>
            <td>10 pm</td>
            <td>Dried ginger legiyam</td>
            <td>
              <Link to="/PNLegiyam">Check here </Link>or{" "}
              <Link to="/buynow">buy from us </Link>
            </td>
            <td>
              Water should be taken only 1/2 hour after taking legiyam.Next day
              morning, ginger juice extract with honey must be taken compulsory.
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Days 10-38</td>
            <td>10 pm</td>
            <td>Prasava legiyam</td>
            <td>
              <Link to="/PNLegiyam">Check here </Link>or{" "}
              <Link to="/buynow">buy from us </Link>
            </td>
            <td>
              Water should be taken only 1/2 hour after taking legiyam.Next day
              morning, ginger juice extract with honey must be taken compulsory.
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Days 29,30,31</td>
            <td>10 pm</td>
            <td>Mustard legiyam</td>
            <td>
              <Link to="/PNLegiyam">Check here </Link>or{" "}
              <Link to="/buynow">buy from us </Link>
            </td>
            <td>
              Water should be taken only 1/2 hour after taking legiyam.Next day
              morning, ginger juice extract with honey must be taken compulsory.
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Days 35-until breastfeed (once in 2 weeks )</td>
            <td>12 pm</td>
            <td>Vendhaya Kazhi</td>
            <td>
              <Link to="/PNLegiyam">Check here </Link>
            </td>
            <td>Do not consume on days when you or baby have taken headbath</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default PNDietChart;
export { PNKitDietChart };
