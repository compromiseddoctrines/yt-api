import React from 'react';

class SearchBar extends React.Component{

    state = { term: '' };

    onInputChange = (e) => {
        this.setState({
            term: e.target.value
        })
    };

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };

    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>
                                Search a Video
                        </label>
                        <div class="ui action input">
                            <input 
                                type="text" 
                                className="prompt"
                                value={this.state.term}
                                onChange={this.onInputChange}
                                placeholder="Type your input here" 
                            />
                            <button type="submit" className="ui button">
                                    <i class="search icon search-icon"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar