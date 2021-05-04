import movie from "../assets/images/projects/movie.svg";
import audio from "../assets/images/projects/audio.svg";
import game from "../assets/images/projects/game.svg";
import fitness from "../assets/images/projects/fitness.svg";

export default [
	{
		id: 1,
		title: "FreightNot",
		icon: movie,
		description:
			"A mobile application that enables users book trucks to transport goods as well as track their inventory upon delivery. The application includes a unique customer and driver interface.Mobile application built for Android and IOS using React Native as a frontend. Application uses Google API to predict distances, estimates times and autocomplete suggestions.The application includes a real-time location tracking feature for both customers and drivers. Deployed the backend API on Azure App service.Integrated with QR code scan & read features to enable effective inventory management. JWT Authentication using AsyncStorage. Styled using React Native Elements, React Native Paper, Vector Icons & React Native Paper. ",
		githubPath: "https://github.com/shreya-sridhar/FreightAppFrontend",
		demoPath: "",
		year: "2020",
		techUsed: "React-Native, Javascript, Ruby Backend, Google Cloud API, Postgresql, Android Dev tools, Mobile App development, Azure Devops tools",
	},
	{
		id: 2,
		title: "Vinyl MarketPlace",
		icon: audio,
		description:
			"Buy and Sell market place for Vinyl CDs/cassettes/records, allowing users to discover their music interests and potential vinyl cd sellers. Built with the ability to chat with buyers and sellers, deployed on Azure.Includes a pagination feature to reduce page load times. Chat application built using web sockets/action cable",
		githubPath: "https://github.com/shreya-sridhar/vinyl-mp-frontend",
		demoPath: "",
		year: "2020",
		techUsed: "React, Ruby, Rails, Websocket , Javascript, Postgresql, Rest API integration, JWT Authentication",
	},
	{
		id: 3,
		title: "TravelBug",
		icon: game,
		description:
			"Travel planning website to manage and plan for attractions, book hotels, explore about destination. Focus was to create best in the class user experience and design to motivate travel planning. Optimized website with custom CSS for mobile and desktop experience for large amount of data. Deployed on Heroku.Developed website using Ruby on Rails using MVC design practices.Integrated Google API for maps, photos & directions, OpenTripMap API for retrieving tourism attractions and Pixabay for getting videos.Frontend interface developed using Bootstrap",
		githubPath: "https://github.com/shreya-sridhar/TravelBug",
		demoPath: "https://guarded-mountain-09991.herokuapp.com/",
		year: "2020",
		techUsed: "React, Ruby, Rails, Javascript, Postgresql, Rest API integration, Cookies & Sessions",
	},
	{
		id: 4,
		title: "Spelling Bee",
		icon: fitness,
		description:
			"A single page web application designed combining the traditional spelling bee game with some strategic gameplay to optimize scoring.",
		githubPath: "https://github.com/danajackson2/spelling-bee",
		demoPath: "",
		year: "2019",
		techUsed: "Javascript, Postgresql, HTML5, CSS, Ruby on Rails, Cookies",
	}
];

