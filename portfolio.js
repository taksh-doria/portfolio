import emoji from "react-easy-emoji";

export const greetings = {
	name: "Taksh Doria",
	title: "Hello all, I am Taksh Doria",
	description:
		"I am a final-year computer engineering student at Dharmsinh Desai University. I am tech enthusiast, with an inclination towards backend technologies. I am good at Java and Spring-framework. I like to discuss technologies. I am good at using popular web frameworks such as spring-boot and .Net Core MVC and also at developing mobile applications in Android as well as IOS using native development frameworks.",
	resumeLink: "https://www.taksh-doria.codes/Taksh_Doria.pdf",
};

export const openSource = {
	githubUserName: "taksh-doria",
};

export const contact = {};

export const socialLinks = {
	instagram: "https://www.instagram.com/taakkksssshhhhh",
	twitter: "https://twitter.com/taksh_doria",
	github: "https://github.com/taksh-doria",
	linkedin: "https://www.linkedin.com/in/taksh-doria/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for mobile applications"
		),
		emoji(
			"⚡ Make Android and iOS applications using native development frameworks along with web applications on java spring framework"
		),
		emoji(
			"⚡ Integration of third party services such as Firebase/ AdMob / APIs"
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "java",
			fontAwesomeClassname: "logos:java",
		},
		{
			skillName: "ios",
			fontAwesomeClassname: "logos:ios",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "android",
			fontAwesomeClassname: "logos:android",
		},
		{
			skillName: "swift",
			fontAwesomeClassname: "vscode-icons:file-type-swift",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "docker",
			fontAwesomeClassname: "logos:docker-icon",
		},
	],
};

export const SkillBars = [
	{
		Stack: "Backend", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Frontend",
		progressPercentage: "50",
	},
	{
		Stack: "Programming",
		progressPercentage: "70",
	},
];

export const educationInfo = [
	{
		schoolName: "Dharmsinh Desai University",
		subHeader: "Computer Engineering",
		duration: "July 2018 - May 2022",
		descBullets: [
			"CPI 8.23(till 7th sem)",
			"currently in 8th semester",
		],
	},
	{
		schoolName: "Sarvodaya Highschool, Ankleshwar",
		subHeader: "12th Science-(GSHEB)",
		duration: "March 2018",
		descBullets: [
			"Percentage: 85%",
		],
	},
	{
		schoolName: "Shree Gattu Vidhyalaya, Ankleshwar",
		subHeader: "10th (SSC)",
		duration: "March 2016",
		descBullets: [
			"Percentage: 76%",
		],
	},
];

export const experience = [
	{
		role: "Project Intern",
		company: "ISRO SAC",
		companylogo: "/img/icons/common/isro.svg",
		date: "Dec 2021 – Present",
		desc: "Working on making a Vehicle Tracking System for ISRO under NAD division SAC.",
	
	},
	
];

export const projects = [
	{
		name: "xApeture - Stock Photography Platform",
		desc: "An stock photography sharing platform used to share stock photos accross the internet and also to use liscence free photos shared by others on platform free of cost. Built using native android framework along with firebase for authentication and maintaining required database and storage.",
		github: "https://github.com/taksh-doria/xAperture.git",
	},
	{
		name: "FindMyFood - Help foodies find the best restaurants",
		desc: "An android application to find restaurants and navigate to nearby restaurants . Implemented using Zomato api and firebase for authentication and google maps api to navigate user to destination.",
		github: "https://github.com/taksh-doria/findmyfood.git",
	},
	{
		name: "E-voting Portal",
		desc: "A blockchain-based voting portal made using solidity language for scripting smart contract and deploying it on Rinkeby test network providing utmost security and accurate calculation of votes with transparency The backend web application use spring framework, MySQL, with frontend in Html/CSS along with web3j library for Ethereum.",
		github: "https://github.com/taksh-doria/VotersPortal",
	},
	{
		name: "Shipment Management System",
		desc: "A shipment Management web application made on Spring Web MVC framework. The application uses the Spring Security framework for user authentication and authorisation and Hibernate framework for storing data into the database. The system provided real-time updates on shipment status and increased supply chain efficiency.",
		github: "https://github.com/taksh-doria/Courier_Management_System_CE037.git",
	},
	{
		name: "Weather - Climate app",
		desc: "A simple native iOS application to show weather data based on geographic location. Uses open weather api to retrieve weather data and Apple Core-location library to access user location.",
		github: "https://github.com/taksh-doria/findmyfood.git",
	},
	{
		name: "Maps",
		desc: "An ios loction based app which uses apple's core location and mapkit frame work and provide user navigation to their desired destination.",
		github: "https://github.com/taksh-doria/MapKit.git",
	},
];

export const feedbacks = [
	/*{
		name: "Hassan Mehmood",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
	},
	{
		name: "Maheen Altaf",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},*/
];
