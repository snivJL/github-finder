import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import gitHubContext from "../../context/github/gitHubContext";
import AlertContext from "../../context/alert/AlertContext";

const Search = ({ setAlert }) => {
	const githubContext = useContext(gitHubContext);
	const alertContext = useContext(AlertContext);

	const [text, setText] = useState("");

	const onChange = (event) => setText(event.target.value);
	const onSubmit = (e) => {
		e.preventDefault();

		if (text === "") {
			alertContext.setAlert("Please enter something", "light");
		} else {
			githubContext.searchUsers(text);
			setText("");
		}
	};

	return (
		<div>
			<form onSubmit={onSubmit} action="" className="form">
				<input
					type="text"
					name="text"
					placeholder="Search users..."
					value={text}
					onChange={onChange}
				/>
				<input
					type="submit"
					value="Search"
					className="btn btn-dark btn-block"
				/>
			</form>
			{githubContext.users.length > 0 && (
				<button
					className="btn btn-light btn-block"
					onClick={githubContext.clearUsers}
				>
					Clear
				</button>
			)}
		</div>
	);
};

Search.propTypes = {
	setAlert: PropTypes.func.isRequired,
};

export default Search;