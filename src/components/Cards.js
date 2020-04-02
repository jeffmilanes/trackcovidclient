import React from 'react';

export default function Cards({image, title, numbers, description}) {
    return (
        <div className="cards">
            <div className="card-flex">
                <img src={image} alt={title} className="icon" />
                <div className="numbers">{numbers}</div>
                <div className="status-desc">{description}</div>
            </div>
        </div>
    )
}