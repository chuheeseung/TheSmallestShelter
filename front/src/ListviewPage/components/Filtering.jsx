import React from 'react';
import style from './Filtering.module.css';

function Filtering() {
  return (
    <div className={style.filterWrap}>
      <div className={style.filterSection}>
        <div className={style.filterItem}>동물 종류</div>
        <div className={style.filterItem}>성별</div>
        <div className={style.filterItem}>나이</div>
        <div className={style.filterItem}>입양 상태</div>
      </div>
      <button>검색</button>
    </div>
  )
}

export default Filtering