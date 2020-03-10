import React from 'react';
import {Input} from 'reactstrap';

class SearchForm extends React.Component {
    render(){
        return (
            <label htmlFor="search">
             <Input type="text" name="search" id="search" placeholder="search todos" onChange={this.props.handleSearch}/>
             </label>
        )
    }
}

export default SearchForm;