import React, { useEffect } from 'react';

const loadimg = (value: number) => {
  fetch(`api/photo/${value}`)
    .then((res) => res.json())
    .then((data) => console.log(data));
};
function Error(): JSX.Element {
  return <div></div>;
}

export default Error;
