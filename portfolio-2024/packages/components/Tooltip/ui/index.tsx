import React, { useState } from "react";
import "./style.scss";

interface TooltipProps {
	text: string;
	children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
	const [visible, setVisible] = useState(false);

	return (
		<section
			className="tooltip__container"
			onMouseEnter={() => setVisible(true)}
			onMouseLeave={() => setVisible(false)}>
			{children}
			{visible && <section className="tooltip__text">{text}</section>}
		</section>
	);
};
