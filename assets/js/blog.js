// --------------    POSTS BREAKDOWN    ------------
// posts = [array of posts (objects) with day, date, and projects]
// project = [array of projects (objects) with title and array of info updates]

//var posts = require("./posts.js");
var posts = [
	{
		day: 1,
		date: "April 1, 2017", 
		projects: [
			{
				title: "Liri-Node-App",
				info: ["Finalized the project with the final additions of menu options and functions"]
			},{
				title: "D_D Project",
				info: ["Creation of a page that will enhance the user's Dungeons and Dragons experience"]
			}
		]
	},{
		day: 2,
		date: "April 2, 2017", 
		projects: [
			{
				title: "D_D Project",
				info: ["Addition of Firebase Database to allow for users to log-in and store their preferences",
						"Creation of a basic D and D Character Creator sheet that stores to Firebase"]
			}
		]
	},{
		day: 3,
		date: "April 3, 2017", 
		projects: [
			{
				title: "Blog-Personal-Portfolio",
				info: ["Creation of Blog Page to show my coding learning experience ",
						"Layout of Blog page and the first Blog post regarding HTML and CSS"]
			}
		]
	},{
		day: 4,
		date: "April 4, 2017", 
		projects: [
			{
				title: "Blog-Personal-Portfolio",
				info: ["Developing the styling for the Blog"]
			},{
				title: "Flashcard-Generator",
				info: ["Basic layout of the individual pages of the generator"]
			}
		]
	},{
		day: 5,
		date: "April 5, 2017", 
		projects: [
			{
				title: "Flashcard-Generator",
				info: ["Developing the Front/Back option .js and .txt files",
						"Creating the basic files for Cloze option"]
			}
		]
	},{
		day: 6,
		date: "April 6, 2017", 
		projects: [
			{
				title: "Flashcard-Generator",
				info: ["Developing the Cloze .js and .txt with simple functionality"]
			},{
				title: "Blog-Personal-Portfolio",
				info: ["Addition of the 100 Day Coding Challenge panel to the blog"]
			}
		]
	},{
		day: 7,
		date: "April 7, 2017", 
		projects: [
			{
				title: "Flashcard-Generator",
				info: ["Reformat Basic.tx to JSON object and addition of reader and writter",
						"Seperation of the constructors to files"]
			}
		]
	},{
		day: 8,
		date: "April 8, 2017", 
		projects: [
			{
				title: "Flashcard-Generator",
				info: ["Addition of options landing page with the npm inquirer"]
			},{
				title: "Bamazon, Node.js, MySQL",
				info: ["Creation of node application used to access local Database"]
			}
		]
	},{
		day: 9,
		date: "April 9, 2017", 
		projects: [
			{
				title: "Bamazon, Node.js, MySQL",
				info: ["Development of Bamazon Customer option",
						"Addition of Constructor and MySQL database with table 'products'"]
			}
		]
	},{
		day: 10,
		date: "April 10, 2017", 
		projects: [
			{
				title: "Bamazon, Node.js, MySQL",
				info: ["Creation and Development of Bamazon Manager option",]
			}
		]
	},{
		day: 11,
		date: "April 11, 2017", 
		projects: [
			{
				title: "Bamazon, Node.js, MySQL",
				info: ["Creation and Development of Bamazon Supervisor option",
						"Addition of Bamazon landing page 'Index'"]
			}
		]
	},{
		day: 12,
		date: "April 12, 2017", 
		projects: [
			{
				title: "Bamazon, Node.js, MySQL",
				info: ["Addition of MySQL table 'departments'",
						"Development and functionality to the Bamazon Sales Log"]
			}
		]
	},{
		day: 13,
		date: "April 13, 2017", 
		projects: [
			{
				title: "Blog-Personal-Portfolio",
				info: ["Updates to 100 Day Coding Challenge and start of Blog Post #2"]
			},{
				title: "Personal-Portfolio",
				info: ["Changes to portfolio style sheet to add functionailty and compatable styles across all pages"]
			}
		]
	}
];



$(document).ready(function(){

	console.log("Connected.");
	console.log(posts);



	for (i=0; i<posts.length; i++){
		var challengePost = $("<div>");
				challengePost.addClass("challenge-div");
				challengePost.attr("id", "challenge-div"+i);
				$("#inner-challenge-col").append(challengePost);

		var challengeTitle = $("<h3>Day "+ posts[i].day + " - " + posts[i].date + "</h3>");
			challengeTitle.addClass("challenge-title");
			$("#challenge-div"+i).append(challengeTitle);

		for (k=0; k<posts[i].projects.length; k++){
			var challengeProjTitle = $("<h4> "+ posts[i].projects[k].title + "</h4>");
			challengeProjTitle.addClass("challenge-proj-title");
			$("#challenge-div"+i).append(challengeProjTitle);

			for (m=0; m<posts[i].projects[k].info.length; m++){
				var challengeProjPar = $("<p> "+ posts[i].projects[k].info[m] + "</p>");
				challengeProjPar.addClass("challenge-proj-par");
				$("#challenge-div"+i).append(challengeProjPar);
			}
		}
	}
	
});



// <div class="challenge-div">
// 	<h3 class="challenge-title">Day 12 - April 12, 2017</h3>
// 	<h4 class="challenge-proj-title">Bamazon, Node.js, MySQL</h4>
// 	<p class="challenge-proj-par">Addition of MySQL table "departments"</p>
// 	<p class="challenge-proj-par">Development and functionality to the Bamazon Sales Log</p>
// </div>
// <div class="challenge-div">
// 	<h3 class="challenge-title">Day 13 - April 13, 2017</h3>
// 	<h4 class="challenge-proj-title">Blog-Personal-Portfolio</h4>
// 	<p class="challenge-proj-par">Updates to 100 Day Coding Challenge and start of Blog Post #2</p>
// 	<h4 class="challenge-proj-title">Personal-Portfolio</h4>
// 	<p class="challenge-proj-par">Changes to portfolio style sheet to add functionailty and compatable styles across all pages</p>
// </div>










