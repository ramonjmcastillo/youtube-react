import React, { Component } from 'react';

import { Paper, TextField } from '@material-ui/core';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: '',
		};
	}
	render() {
		return (
			<Paper elevation={6} style={{ padding: '25px' }}>
				<form>
					<TextField fullWidth label="Search..."></TextField>
				</form>
			</Paper>
		);
	}
}

export default SearchBar;
