import React from "react";
import PropTypes from "prop-types";
import "./messageHistory.style.css";

const MessageHistory = ({ msgs }) => {
	return (
		<>
			{msgs.map((msg, index) => {
				return (
					<div className="message-history mt-3" key={index}>
						<div className="send font-weight-bold text-secondary">
							<div className="sender">{msg.messageBy}</div>
							<div className="date">{msg.date}</div>
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
