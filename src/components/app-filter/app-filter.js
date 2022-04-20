

import './app-fiiter.css'

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button 
                className="btn btn-light"
                type="button">
                    Все супергерои
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    Рейтинг больше 5
            </button>
        </div>
    );
}

export default AppFilter;

