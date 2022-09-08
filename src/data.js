import { v4 as uuidv4 } from "uuid";
function chillHop() {
	return [
		{
			name: "Unsainted",
			cover: "./images/slip.webp",
			artist: "Slipknot",
			audio: "./music/slipknot_unsainted.mp3",
			color: ["#b1a5ce", "#3b2d5b"],
			id: uuidv4(),
			active: true,
		},
		{
			name: "Fade to black",
			cover: "./images/met.webp",
			artist: "Metallica",
			audio: "./music/metallica_fadetoblack.mp3",
			color: ["#6081b3", "#1e153c"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "De mysteriis dom sathanas",
			cover: "./images/mayhem.webp",
			artist: "Mayhem",
			audio: "./music/mayhem_demysteriisdomsathanas.mp3",
			color: ["#353c5c", "#74817a"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Falling in reverse",
			cover: "./images/fz.webp",
			artist: "Zombified",
			audio: "./music/Falling_In_Reverse_-_Zombified_(musmore.com).mp3",
			color: ["#155467", "#7f0710"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Another brick in the wall",
			cover: "./images/pa.webp",
			artist: "Pink Floyd",
			audio: "./music/pink-floyd-pink-floyd-another-brick-in-the-wall.mp3",
			color: ["#e3e7c9", "#181712"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Highway to hell",
			cover:"./images/ha.webp",
			artist: "AC/DC",
			audio: "./music/ac-dc_-_highway-to-hell.mp3",
			color: ["#6c573e", "#181c1f"],
			id: uuidv4(),
			active: false,
		},
		//ADD MORE HERE
	];
}

export default chillHop;
