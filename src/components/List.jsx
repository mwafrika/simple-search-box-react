import React from 'react';
import Card from './Card';

const List = ({ filteredData }) => {
  return (
    <ul className='col-start-3 col-end-11 space-y-5 mx-10 row-start-3 row-end-3'>
      {filteredData.map((item) => (
        <Card {...item} key={item.id} />
      ))}
    </ul>
  );
};

export default List;
