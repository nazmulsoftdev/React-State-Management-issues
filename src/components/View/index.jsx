import React from 'react';
import {Button} from 'flowbite-react'

import Title from '../Title/Title';


function View({ id,count, Increment, Decrement }) {


  return (
    <div className="w-[300px]  m-auto  p-2 bg-white shadow-2xl">
      <Title count={count} />
      <div className="flex justify-center space-x-3">
        <Button onClick={() => Increment(id)}>+</Button>
        <Button onClick={() => Decrement(id)}>-</Button>
      </div>
    </div>
  );
}

export default View