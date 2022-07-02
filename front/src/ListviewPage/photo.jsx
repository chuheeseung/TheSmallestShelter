import React from 'react';

export default function Photo({ photo, name, age, disease }) {
    return (
        <div className="photo-container">
            <img src={photo} alt="대표 사진"/>
            <div className="photo-morahazi" >
                <div className="photo-name">{name}</div>
                <div className="photo-info" >
                    <span>{age}</span>
                    <span>{disease}</span>
                </div>
            </div>
        </div>

    );
}