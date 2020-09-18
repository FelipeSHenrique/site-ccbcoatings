import React from 'react';

import imgBalde from '../../assets/image/balde-tinta.jpg';

import {
  Card,
  CardHeader,
  CardBody
} from './styles';

function CardProducts({ icon, title, info, list }) {

  return (
    <Card>
      <CardHeader>
        <img src={icon} alt="Tinta" />
        <h2>{title}</h2>
      </CardHeader>
      <CardBody>
        <p>{info}</p>

        <div className="line"></div>

        <ul>
          {list.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}

export default CardProducts;