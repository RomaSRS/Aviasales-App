import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { dispatchClickOnFilter } from '../../redux/actions';

import styles from './CheckboxFilter.module.scss';

const Filter = () => {
  const dispatch = useDispatch();
  const stateFilter = useSelector((state) => state.filter);

  return (
    <div className={styles.root}>
      <span className={styles.root_header}>Количество пересадок</span>
      <div className={styles.root_filer}>
        <label className={styles.label} id='all'>
          <input
            className={styles.input}
            type='checkbox'
            checked={stateFilter.all}
            value='all'
            onChange={(e) => dispatch(dispatchClickOnFilter(e.target.value))}
          />
          <svg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
            <g fill='none' fillRule='evenodd'>
              <rect
                stroke={stateFilter.all ? '#2196F3' : '#9ABBCE'}
                fill='none'
                x='.5'
                y='.5'
                width='19'
                height='19'
                rx='1.5'
              />
            {stateFilter.all ? (
                <path
                  fill='#2196F3'
                  d='M8.28571 14L4 10.1612L5.20857 9.0787L8.28571 11.8273L14.7914 6L16 7.09021L8.28571 14Z'
                />
              ) : !stateFilter.all}
            </g>
          </svg>
          <span className={styles.title}>Все</span>
        </label>
        <label className={styles.label} id='without'>
          <input
            className={styles.input}
            type='checkbox'
            checked={stateFilter.without}
            value='without'
            onChange={(e) => dispatch(dispatchClickOnFilter(e.target.value))}
            tabIndex='-1'
          />
          <svg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
            <g fill='none' fillRule='evenodd'>
              <rect
                stroke={stateFilter.without ? '#2196F3' : '#9ABBCE'}
                fill='none'
                x='.5'
                y='.5'
                width='19'
                height='19'
                rx='1.5'
              />
            {stateFilter.without ? (
                <path
                  fill='#2196F3'
                  d='M8.28571 14L4 10.1612L5.20857 9.0787L8.28571 11.8273L14.7914 6L16 7.09021L8.28571 14Z'
                />
              ) : !stateFilter.without}
            </g>
          </svg>
          <span className={styles.title}>Без пересадок</span>
        </label>
        <label className={styles.label} id='one'>
          <input
            className={styles.input}
            type='checkbox'
            checked={stateFilter.one}
            value='one'
            onChange={(e) => dispatch(dispatchClickOnFilter(e.target.value))}
          />
          <svg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
            <g fill='none' fillRule='evenodd'>
              <rect
                stroke={stateFilter.one ? '#2196F3' : '#9ABBCE'}
                fill='none'
                x='.5'
                y='.5'
                width='19'
                height='19'
                rx='1.5'
              />
            {stateFilter.one ? (
                <path
                  fill='#2196F3'
                  d='M8.28571 14L4 10.1612L5.20857 9.0787L8.28571 11.8273L14.7914 6L16 7.09021L8.28571 14Z'
                />
              ) : !stateFilter.one}
            </g>
          </svg>
          <span className={styles.title}>1 пересадка</span>
        </label>
        <label className={styles.label} id='two'>
          <input
            className={styles.input}
            type='checkbox'
            checked={stateFilter.two}
            value='two'
            onChange={(e) => dispatch(dispatchClickOnFilter(e.target.value))}
          />
          <svg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
            <g fill='none' fillRule='evenodd'>
              <rect
                stroke={stateFilter.two ? '#2196F3' : '#9ABBCE'}
                fill='none'
                x='.5'
                y='.5'
                width='19'
                height='19'
                rx='1.5'
              />
            {stateFilter.two ? (
                <path
                  fill='#2196F3'
                  d='M8.28571 14L4 10.1612L5.20857 9.0787L8.28571 11.8273L14.7914 6L16 7.09021L8.28571 14Z'
                />
              ) : !stateFilter.two}
            </g>
          </svg>
          <span className={styles.title}>2 пересадки</span>
        </label>
        <label className={styles.label} id='three'>
          <input
            className={styles.input}
            type='checkbox'
            checked={stateFilter.three}
            value='three'
            onChange={(e) => dispatch(dispatchClickOnFilter(e.target.value))}
          />
          <svg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
            <g fill='none' fillRule='evenodd'>
              <rect
                stroke={stateFilter.three ? '#2196F3' : '#9ABBCE'}
                fill='none'
                x='.5'
                y='.5'
                width='19'
                height='19'
                rx='1.5'
              />
            {stateFilter.three ? (
                <path
                  fill='#2196F3'
                  d='M8.28571 14L4 10.1612L5.20857 9.0787L8.28571 11.8273L14.7914 6L16 7.09021L8.28571 14Z'
                />
              ) : !stateFilter.three}
            </g>
          </svg>
          <span className={styles.title}>3 пересадки</span>
        </label>
      </div>
    </div>
  );
};

export default Filter;
