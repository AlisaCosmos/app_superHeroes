

import HeroListItem from '../hero-list-item/hero-list-item';
import './hero-list.css';


const HeroList = ({data}) => {

    let element = data.map (item => {
        return (
            <HeroListItem 
                key={item.id} 
                name={item.name} 
                url={item.url} 
                power={item.power} 
                text={item.text} />
                );
    })
    
    return (
        <div className="huro-grop row row-cols-1 row-cols-md-3 g-4">
            
            {element}   
                
        </div>    
    );

}

export default HeroList;

