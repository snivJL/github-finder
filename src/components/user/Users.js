import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import gitHubContext from "../../context/github/gitHubContext";

const Users = () => {
	const githubContext = useContext(gitHubContext);

	const { loading, users } = githubContext;
	return loading ? (
		<Spinner />
	) : (
		<div style={userStyle}>
			{users.map((user) => (
				<UserItem key={user.id} user={user} />
			))}
		</div>
	);
};

const userStyle = {
	display: "grid",
	gridTemplateColumns: "repeat(3,1fr)",
	gridGap: "1rem",
};

export default Users;
