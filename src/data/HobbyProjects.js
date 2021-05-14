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
			"A React Native mobile apps for booking trucks to transport goods & tracking inventory. The apps has a unique customer and driver interface.It uses Google API to predict distances, estimates times and autocomplete suggestions.The app includes a real-time location tracking feature for both customers and drivers.Integrated with QR code scan & read features to enable effective inventory management. ",
		githubPath: "https://github.com/shreya-sridhar/FreightAppFrontend",
		demoPath: "",
		videoPath:"",
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
		demoPath: "https://vinyl-marketplace.herokuapp.com/",
		videoPath:"https://www.youtube.com/watch?v=wMpuqB--8tk",
		year: "2020",
		techUsed: "React, Ruby, Rails, Websocket , Javascript, Postgresql, Rest API integration, JWT Authentication",
	},
	{
		id: 3,
		title: "TravelBug",
		icon: game,
		description:
			"Travel planning website to make itineraries from attractions, hotels & explore about destination. Developed website using Ruby on Rails using MVC design practices.Integrated Google API for maps, photos & directions, OpenTripMap API for retrieving tourism attractions and Pixabay for getting videos.",
		githubPath: "https://github.com/shreya-sridhar/TravelBug",
		demoPath: "http://travellerbug.herokuapp.com/",
		videoPath:"https://www.youtube.com/watch?v=y4_sh7RIJ5g&feature=youtu.be",
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
		demoPath: "travellerbug.herokuapp.com",
		videoPath:"",
		year: "2019",
		techUsed: "Javascript, Postgresql, HTML5, CSS, Ruby on Rails, Cookies",
	}
];

