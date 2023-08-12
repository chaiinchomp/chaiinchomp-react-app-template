import React from 'react';
import { useSelector } from 'react-redux';
import glarble from '../assets/img/glarble.png';

export default function Home() {
  const settingsState = useSelector(state => state.settings);
  return (
    <div className='flex flex-col justify-center items-center'>
      <img src={glarble} alt='glarble' />
      <p>hi I'm jeff the Glarble nice to meet you :)</p>
      <p>here's something I got from redux: {JSON.stringify(settingsState)}</p>
    </div>
  );
}
