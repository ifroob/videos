import React from "react";

class SearchBar extends React.Component {
    state = { searchTerm: "" };

    onInputChange = event => {
        this.setState({ searchTerm: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault(); // Prevent default behavior - don't submit when pressing enter key
        // Call callback from Parent Component
        this.props.onFormSubmit(this.state.searchTerm);
    };

    render() {
        return (
            <div className='search-bar ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>Video Search</label>
                        <input
                            type='text'
                            value={this.state.searchTerm}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;