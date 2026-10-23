const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("🚀 TrendCraft AI Backend Running Successfully!");
});
app.get("/ideas", (req, res) => {

res.json({

ideas: [
"5 Morning Habits For A Fitter You",
"Workout Mistakes Beginners Make",
"7-Day Fitness Challenge",
"Fat Loss Myths Busted",
"Healthy Diet Hacks",
"Home Workout Tips",
"Beginner Fitness Roadmap",
"Fitness Trends 2026",
"Smart Workout Techniques",
"Best Foods For Muscle Growth"
],

hooks: [
"Nobody Talks About These Fitness Secrets!",
"7 Days Challenge That Changed Everything",
"Stop Making These Workout Mistakes",
"Fitness Tips That Actually Work",
"The Truth About Fat Loss"
]

});
});
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});