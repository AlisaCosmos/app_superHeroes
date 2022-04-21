

import './hero-list-item.css';


const HeroListItem = ({name, url, power, text}) => {
    return (
        <div className="col">
            <div className="card">
                <img src={url} className="card-img-top" alt={name}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text card_power"> <span className="card-subtitle">Суперсилы: </span> {power}</p>
                    <p className="card-text card_desk"> <span className="card-subtitle">Подробнее: </span> {text}</p>
                </div>
            </div>    
        </div>   
    );
};

export default HeroListItem;