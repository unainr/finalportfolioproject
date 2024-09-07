import React from "react";
import { FaReact, FaHtml5, FaBootstrap, FaJsSquare } from "react-icons/fa";
import {
	SiTailwindcss,
	SiNextdotjs,
	SiTypescript,
	SiJquery,
    SiShadcnui
} from "react-icons/si";

const MainCard = ({
	cardimg1,
	title,
	projectlink,
	reacticons = false,
	bootstrapicons = false,
	jqicons = false,
	nextjsicons = false,
	jsicons = false,
	htmlicons = false,
	typescripticons = false,
	tailwindicons = false,
    shadcnuicons= false
}) => {
	return (
		<div className="col-lg-6 col-md-12 mb-4">
			<div className="card p-0 portfolio-card">
				<img
					src={cardimg1}
					className="img-fluid portfolio-image"
					alt="portfolio"
				/>
				<div className="card-overlay">
					<div className="card-content">
						<h5 className="card-title">{title}</h5>
						<a
							href={projectlink}
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-danger ripple-effect">
							View Project
						</a>
						{/* Icon container inside the overlay */}
						<div className="icon-container">
							{reacticons ? (
								<FaReact className="icon react-icon" title="React" />
							) : (
								""
							)}
                            {nextjsicons ? (
								<SiNextdotjs className="icon nextjs-icon" title="Next.js" />
							) : (
								""
							)}
							{htmlicons ? (
								<FaHtml5 className="icon html-icon" title="HTML" />
							) : (
								""
							)}
							{bootstrapicons ? (
								<FaBootstrap
									className="icon bootstrap-icon"
									title="Bootstrap"
								/>
							) : (
								""
							)}
							{tailwindicons ? (
								<SiTailwindcss
									className="icon tailwind-icon"
									title="Tailwind CSS"
								/>
							) : (
								""
							)}
							
							{jsicons ? (
								<FaJsSquare className="icon js-icon" title="JavaScript" />
							) : (
								""
							)}
							{jqicons ? (
								<SiJquery className="icon jquery-icon" title="jQuery" />
							) : (
								""
							)}
							{typescripticons ? (
								<SiTypescript
									className="icon typescript-icon"
									title="TypeScript"
								/>
							) : (
								""
							)}
                            {shadcnuicons ? (
								 <SiShadcnui className="icon shadcnui-icon"
                                 title="shadcnui-icon"/>
							) : (
								""
							)}
                           
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainCard;
