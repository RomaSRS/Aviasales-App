import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { getCheaplyTickets, getFastestTickets } from '../../redux/actions';
import { sorting } from '../../constants';

import './SortingTabs.scss';

const SortingTabs = () => {
  const dispatch = useDispatch();

  const cheaply = useRef(null);
  const faster = useRef(null);

  const handleClick = (ref) => {
    if (ref.current.id === sorting.CHEAPLY) {
      ref.current.classList.add('tabs__btn--active');
      faster.current.classList.remove('tabs__btn--active');
    }
    if (ref.current.id === sorting.FASTER) {
      ref.current.classList.add('tabs__btn--active');
      cheaply.current.classList.remove('tabs__btn--active');
    }
  };

  return (
    <div className='tabs'>
      <button
        type='button'
        className='tabs__btn tabs__btn--active'
        id={cheaply.cheaply}
        ref={cheaply}
        onClick={() => {
          dispatch(getCheaplyTickets());
          handleClick(cheaply);
        }}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        type='button'
        className='tabs__btn'
        id={faster.faster}
        ref={faster}
        onClick={() => {
          dispatch(getFastestTickets());
          handleClick(faster);
        }}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
    </div>
  );
};

export default SortingTabs;
