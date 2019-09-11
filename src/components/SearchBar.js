import React, { Component } from 'react';

import { Paper, TextField } from '@material-ui/core';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(evt) {
		evt.preventDefault();
		const { searchTerm } = this.state;
		const { onFormSubmit } = this.props;

		onFormSubmit(searchTerm);
	}

	handleChange(evt) {
		this.setState({
			searchTerm: evt.target.value,
		});
	}

	render() {
		return (
			<Paper elevation={6} style={{ padding: '25px' }}>
				<form onSubmit={this.handleSubmit}>
					<TextField onChange={this.handleChange} fullWidth label="Search..." />
				</form>
			</Paper>
		);
	}
}

export default SearchBar;
