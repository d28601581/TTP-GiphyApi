import React from 'react';
import './searchbar.css';
class Searchbar extends React.Component {
    state = { term: '', limit: 5, rating: 'g' }
    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term, this.state.limit,this.state.rating);
    }
    limitOnChange = (e) => {
        this.setState({ limit: e.target.value });
    }
    rateOnChange = (e) => {
        this.setState({rating:e.target.value});
    }
    render() {
        return (
            <div>
                <form className="search-form" onSubmit={this.onFormSubmit}>
                    <label>Enter a Gif name</label>
                    <input value={this.state.term} type="text" onChange={this.onInputChange} />
                    <label>Amount of results</label>
                    <select onChange={this.limitOnChange} style={{ width: '100px' }}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                    </select>
                    <label>Rating:</label>
                    <select onChange={this.rateOnChange} style={{ width: '100px' }}>
                        <option value="g">g</option>
                        <option value="pg">pg</option>
                        <option value="pg-13">pg-13</option>
                        <option value="r">r</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default Searchbar;