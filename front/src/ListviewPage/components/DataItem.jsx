import React from 'react';
import style from './DataItem.module.css';

function DataItem({ id, photoUrl, name, age, gender, species, isAdopted }) {
  return (
    <div className={style.dataContainer}>
      <img className={style.dataPhoto} src={photoUrl} alt="사진 url"/>
      <div className={style.dataInfo}>
        <h4>{name}</h4>
        <p>{age}</p>
        <p>{species} / {gender}</p>
        <p>{isAdopted}</p>
      </div>
    </div>
  )
}

export default DataItem;