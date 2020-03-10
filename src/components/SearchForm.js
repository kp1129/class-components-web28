import React from 'react';
import {Input} from 'reactstrap';
import "./SearchForm.css";

class SearchForm extends React.Component {
    render(){
        return (
            <div className="search-form">
            <label htmlFor="search">
             <Input aria-label="search" type="text" name="search" id="search" placeholder="search todos" onChange={this.props.handleSearch}/>
             </label>
             </div>
        )
    }
}

export default SearchForm;