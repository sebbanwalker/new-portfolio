import React, { useState } from "react";
import "./style.scss";

interface TooltipProps {
	text: string;
	children: React.ReactNode;
	theme: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ text, children, theme }) => {
	const [visible, setVisible] = useState(false);

	return (
		<section
			className={`tooltip__container ${theme}`}
			onMouseEnter={() => setVisible(true)}
			onMouseLeave={() => setVisible(false)}>
			{children}
			{visible && (
				<section className={`tooltip__text ${theme}`}>{text}</section>
			)}
		</section>
	);
};
