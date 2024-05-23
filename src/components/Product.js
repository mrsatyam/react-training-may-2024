import React from 'react';
import { useParams } from 'react-router-dom';


const Product = () => {
  const { id } = useParams();
  const burgers = [
      'Cheeseburger',
      'Veggie Burger',
      'Bacon Burger',
      'Chicken Burger',
    ];

    const wraps = [
      'Chicken Wrap',
      'Veggie Wrap',
      'Beef Wrap',
      'Falafel Wrap',
    ];

  return (
    <div>
      <h2>Dish Details</h2>
      {
          id == 1 ?
           <ul>
               {burgers.map((burger, index) => (
                 <li key={index}>{burger}</li>
               ))}
           </ul> :
           <ul>
              {wraps.map((wrap, index) => (
                <li key={index}>{wrap}</li>
              ))}
           </ul>
       }
    </div>
  );
};

export default Product;