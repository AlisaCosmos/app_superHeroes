import './search-panel.css';

const SearchPanel = () => {
    return (
        <input 
            type="text" 
            name="text" 
            id="" 
            className="form-control search-input"
            placeholder="Найти супергероя"
        />
    );
}

export default SearchPanel;