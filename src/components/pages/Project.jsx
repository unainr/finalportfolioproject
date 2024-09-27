import React from "react";
import "../css/Project.css";
import "../css/Respon.css";
import MainCard from "./MainCard";
const Project = () => {
	return (
		<div className="py-5">
			<section id="portfolio" className="portfolio_wrapper">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 text-center mb-4">
							<span className="subtitle">My Complete project</span>
							<h2>My Latest Project</h2>
							<p>
								Just finished my latest project, and I'm thrilled to share it
								with you
							</p>
						</div>
					</div>
					<div className="row">
						<MainCard cardimg1 = "/portfolio/11.png" title= "Fusion Style  " projectlink = {"https://unfusion.netlify.app/"} reacticons = {true} bootstrapicons= {true}/>

						<MainCard cardimg1 = "/portfolio/decor.png" title= "Home Decor  " projectlink = {"https://decorvs.vercel.app/"} nextjsicons = {true} mongodb = {true} stripe = {true} typescripticons= {true} tailwindicons= {true} shadcnuicons= {true}/>

						<MainCard cardimg1 = "/portfolio/sol.png" title= "Sonic Blend" projectlink={"https://sonicblend.vercel.app/"} nextjsicons = {true} bootstrapicons= {true}/>
						
						<MainCard cardimg1 = "/portfolio/moive.png" title= "Nexuscinema" projectlink={"https://nexuscinema.vercel.app/"} nextjsicons typescripticons= {true} tailwindicons= {true} shadcnuicons= {true}/>

						<MainCard cardimg1 = "/portfolio/3.png" title= "Luxury-Jewelry" projectlink={"https://unainr.github.io/luxury-jewelry/"} htmlicons = {true} jsicons= {true} jqicons= {true} bootstrapicons= {true}/>

						<MainCard cardimg1 = "/portfolio/eshope.png" title= "Eshope  " projectlink = {"https://uneshop.netlify.app/"} reacticons = {true} bootstrapicons= {true}/>

						<MainCard cardimg1 = "/portfolio/juju.png" title= "Netflix Clone  " projectlink = {"https://unclone.netlify.app/"} reacticons = {true} bootstrapicons= {true}/>

						<MainCard cardimg1 = "/portfolio/1.png" title= "Fast Food Restaurant" projectlink={"https://unainr.github.io/burgerwebsite/"} htmlicons = {true} jsicons= {true} jqicons= {true} bootstrapicons= {true}/>

						<MainCard cardimg1 = "/portfolio/mini.jpg" title= "Furniture-Store" projectlink={"https://github.com/unainr/"} htmlicons = {true} jsicons= {true} jqicons= {true} bootstrapicons= {true}/>

						<MainCard cardimg1 = "/portfolio/app.png" title= "Neshot" projectlink={"https://github.com/unainr/"} htmlicons = {true} jsicons= {true} jqicons= {true} bootstrapicons= {true}/>

						<MainCard cardimg1 = "/portfolio/plant.png" title= "Plant Palace" projectlink={"https://github.com/unainr/"} htmlicons = {true} jsicons= {true} jqicons= {true} bootstrapicons= {true}/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Project;
