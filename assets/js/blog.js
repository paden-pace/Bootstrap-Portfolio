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
	}
];




$(document).ready(function(){

	console.log("Connected.");
	console.log(posts);




	// var friendSection = $("<div>");
	// 		friendSection.addClass("results");
	// 		friendSection.addClass("panel");
	// 		friendSection.attr("id", "bestFriend");
	// 		$("#bestFriendDiv").html(friendSection);
	// 		$("#bestFriend").html("<h3>Your New Best Food Friend: " + members[least].name + "</h3>");
	// 		$("#bestFriend").append('<img src ="' + members[least].photo + '" alt="bestfriend-photo" class="best_pic">');

});



