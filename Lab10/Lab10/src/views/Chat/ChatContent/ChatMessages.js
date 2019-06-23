import React from 'react';

import getAvatar from '../../../utils/avatar';

const ChatMessages = props => {
	let email = 'alexmemo35@gmail.com';
	let classMessage = 'd-flex justify-content-end mb-4';
	if (props.self === 1) {
		email = 'willy.baldeon@tecsup.edu.pe';
		classMessage = 'd-flex justify-content-start mb-4';
	}
	return (
		<div className={classMessage}>
			<div className="img_cont_msg">
				<img
					src={getAvatar(email)}
					alt={email}
					className="rounded-circle user_img_msg"
				/>
			</div>
			<div className="msg_container">
				{props.line}
				<span className="msg_time">11:00 AM, Hoy</span>
			</div>
		</div>
	);
};

export default ChatMessages;
