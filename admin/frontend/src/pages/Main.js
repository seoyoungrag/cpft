import React from "react";
import MainStructure from "../components/structure/MainStructure";
import NoteContainer from "../containers/NoteContainer";

const Main = () => {
	React.useEffect(() => {
		attachJiraIssueColletor();

		return () => {};
	}, []);

	return (
		<MainStructure>
			{/*<NoteContainer />*/}
			hello
		</MainStructure>
	);
};

export default Main;
