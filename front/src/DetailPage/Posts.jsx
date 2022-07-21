import React, { Component } from 'react'

export default function Posts({ imgUrl, name, age, gender, species }) {
    return (
        <div className="photo-container">
            <img src={imgUrl} alt="대표 사진"/>
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


