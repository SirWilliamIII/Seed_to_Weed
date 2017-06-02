const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());

const strains = [{
	name: "Blue Dream",
	flowering_time: "9 to 10 weeks",
	yield: "High",
	difficulty: "A vigorous plant that allows for a large margin of error, Blue Dream is an easy strain to cultivate.",
	climate: "Thrives in most climates and handles cold nightly temperatures well. Blue Dream’s ideal temperature ranges between 65-85 degrees Fahrenheit."
}, {
	name: "OG Kush",
	flowering_time: "10 to 12 weeks",
	yield: "Moderate",
	difficulty: "Hard. Slightly sensitive and susceptible to powdery mildew, it can also be the victim of bugs and disease due to its low resistance.",
	climate: "OG Kush, when carefully tended to and grown in an outdoor setting can yield around 16 ounces per plant. It is ready for harvest sometime in early October."
}, {
	name: "Sour Diesel",
	flowering_time: "10 to 11 weeks",
	yield: "Moderate. If you can control the stretching and feed the plant accordingly, heavier yields are possible.",
	difficulty: "Moderate to hard",
	climate: "Mild to warm climate preferred, with temperatures between 68 and 85 degrees Fahrenheit."
}];


app.get('/', (req, res) => {
	res.json(strains);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
