import React from 'react';

const SearchBar = (props) => {

    return(
        <div className="ui segment">
            <form className="ui form" onSubmit={props.formSubmit}>
                <input 
                    type="text"
                    id="search_bar"
                    placeholder="Search Here"
                />
            </form>
        </div>
    );
}  

export default SearchBar;