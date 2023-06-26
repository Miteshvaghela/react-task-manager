import React from 'react';

const SearchBar = ({searchFilter}) => {
    return (
        <form>
            <div className="form-control">
                <input type="text" placeholder="Search Task:" onChange={e => searchFilter(e.currentTarget.value)}/>
            </div>
        </form>
    )
}

export default SearchBar; 