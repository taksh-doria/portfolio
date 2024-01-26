import emoji from "react-easy-emoji";

export const greetings = {
	name: "Taksh Doria",
	title: "Hello all, I am Taksh Doria",
	description:
		"I am a driven and innovative Software Developer with a passion for crafting meaningful solutions through technology. I thrive on taking up challenges and transforming ideas into reality. Exploring the intersection of Backend/Cloud Technologies, I am on a mission to make a positive impact in the world through my work.",
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
			"Develop highly interactive Front end / User Interfaces for mobile applications"
		),
		emoji(
			"Make Android and iOS applications using native development frameworks along with web applications on java spring framework"
		),
		emoji(
			"Integration of third party services such as Firebase/ AdMob / APIs"
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
		{
			skillName: "reactjs",
			fontAwesomeClassname: "logos:reactjs-icon",
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
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "90",
	},
];

export const educationInfo = [
	{
		schoolName: "Dalhousie University",
		subHeader: "Master of Applied Computer Science",
		duration: "July 2022 - May 2024",
	},
	{
		schoolName: "Dharmsinh Desai University",
		subHeader: "Computer Engineering",
		duration: "July 2018 - May 2022",
	}
// 	{
// 		schoolName: "Sarvodaya Highschool, Ankleshwar",
// 		subHeader: "12th Science-(GSHEB)",
// 		duration: "March 2018",
// 		descBullets: [
// 			"Percentage: 85%",
// 		],
// 	},
// 	{
// 		schoolName: "Shree Gattu Vidhyalaya, Ankleshwar",
// 		subHeader: "10th (SSC)",
// 		duration: "March 2016",
// 		descBullets: [
// 			"Percentage: 76%",
// 		],
// 	},
];

export const experience = [
	{
		role: "Software Developer Intern",
		company: "Indian Space Research Organisation",
		companylogo: "/img/icons/common/isro.svg",
		date: "Dec 2021 – Apr 2022",
	},
	{
		role: "Application Developer Student",
		company: "Koch Platform",
		companylogo: "/img/icons/common/Koch.jpeg",
		date: "Sep 2023 – present",
	}
	
];

export const projects = [
	{
		name: "xApeture - Stock Photography Platform",
		desc: "Led design and development of an Android stock photography platform with essential features, seamless login experience, and increased user retention. Implemented optimized image data management in Firebase Firestore, achieving 60% faster database response time. Incorporated Node.js cloud functions to compress images by 70%, improving platform performance and reducing image loading time by 30%.",
		github: "https://github.com/taksh-doria/xAperture.git",
	},
	{
		name: "FindMyFood - Help foodies find the best restaurants",
		desc: "An android application to find restaurants and navigate to nearby restaurants . Implemented using Zomato api and firebase for authentication and google maps api to navigate user to destination.",
		github: "https://github.com/taksh-doria/findmyfood.git",
	},
	{
		name: "Trivia Titans – AWS and GCP based Serverless Trivia Game",
		desc: "Crafted a cutting-edge game using AWS and GCP serverless Cloud Services: AWS API Gateway, Lambda, GCP CloudFunctions. The services were kept decoupled via AWS SQS, SNS, GCP Pub/Sub. DynamoDB, Firestore handled data, GCP NL API enriched question tags. User federation used AWS Cognito. For OLAP purposes, BigQuery, GCP Looker Studio, frontend hosted on GCP Cloud Run via Docker, ensuring a dynamic gaming experience.",
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
