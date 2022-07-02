import React from 'react';
import { Link } from 'react-router-dom';

export default function Photo({ imgUrl, name, age, gender, species }) {
    return (
        <div className="photo-container">
            <Link to="/register">
                <img src={imgUrl} alt="대표 사진"/>
            </Link>
            <div className="photo-morahazi" >
                <div className="photo-name">{name}</div>
                <div className="photo-info" >
                    <span>{age}살</span>
                    <span>{gender}</span>
                    <span>{species}</span>
                </div>
            </div>
        </div>

    );
}
