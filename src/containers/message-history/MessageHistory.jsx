import React from "react";
import PropTypes from "prop-types";
import "./messageHistory.style.css";

const MessageHistory = ({ msgs }) => {
	if (!msgs) return null;

	return (
		<>
			{msgs.map((msg, index) => {
				return (
					<div className="message-history mt-3" key={index}>
						<div className="send font-weight-bold text-secondary">
							<div className="sender">{msg.sender}</div>
							<div className="date">{msg.messagedAt}</div>
						</div>
						<div className="message text-right">{msg.message}</div>
					</div>
				);
			})}
		</>
	);
};

export default MessageHistory;

MessageHistory.propsTypes = {
	msgs: PropTypes.array.isRequired,
};
