const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const profession = document.getElementById("profession");
const description = document.getElementById("description");
// const surpriseMeBtn = document.getElementById("surpriseMeBtn");
// const chicken = document.querySelector(".chicken");


let isChickenVisible;

let people = [
	{
		photo:
		"url('https://i.ibb.co/R0Y23GQ/Maniraj-Testimonial.jpg')",
		name: "Maniraj Sivasubbu",
		profession: "Oracle",
		description:
			"I learned fundamental knowledge of Java and Python programming from Telusko YouTube channel during my undergraduate. It helped me to get a job in PwC and then I learned Spring Boot. Thank you sir ."
	},

	{
		photo:
			"url('https://i.ibb.co/Lxydrtb/Hemanth-Anumala-Testimonial.jpg')",
		name: "Hemanth Anumala",
		profession: "Cisco Systems",
		description:
			"Telusko is the channel which helped me in shaping my career.  In the initial days of my college days i started learning java from the channel and soon with that one video of how API works has changed my whole life. The way naveen sir explains things in a curious way helped me to dig up things in learning a particular technology.No wonder the whole india watches telusko python playlist. I have followed the old playlist of packet tracer from naveen sir and thats where my networking journey has started up. I was exposed to blockchain later in my 3rd year and made myself confident today to make a career over the same line. Telusko has its mark on each step of my career and today life is easy because of a man like naveen sir. Thank you so much for providing valuable content for free till date."
	},
    
	{
		photo:
			"url('https://i.ibb.co/k9nSZf7/Gokhul-Testimonial.jpg')",
		name: "Gokhul",
		profession: "Galvanize Global Education",
		description:
			"My coding journey on the internet started with Telusko, and I began to see coding as problem-solving. Java became my go-to programming language through his teachings, and it continues strong."
	},

	{
		photo:
		"url('https://i.ibb.co/vXJD9g4/puttu-navya-Testimonial.jpg')",
		name: "Navya Puttu",
		profession: "Student",
		description:
			"I got into a product based company only by watching and following your path, Sir!"
	},
	{
		photo:
		"url('https://i.ibb.co/NT64mjG/DANIEL-NJAMA-Testimonial.jpg')",
		name: "Daniel Wangari",
		profession: "Dynamic Technologies",
		description:
			"Telusko has played a crucial role in providing me with the essential skills needed for transitioning into the tech industry. Specifically, I have acquired extensive knowledge in web development and coding, focusing on Python and the Django framework through this channel. Navin's ability to articulate his ideas and explain various concepts has consistently facilitated my understanding. I am grateful to Navin for serving as an inspiration as well."
	},
	{
		photo:
		"url('https://i.ibb.co/BPRd16j/vamshi-krishna-testimonial.jpg')",
		name: "Vamshi Nallavalli ",
		profession: "student",
		description:
			"I took java with Spring Course last year from Udemy after completing my final year exams before I used to watch in YouTube. Actually i have knowledge in Java but not clear means why we use objects, classes, methods, collections etc,. After completing the course I am able to clear technical rounds like piece of cake but due to internal hirings and not fresher job posting trying to get a chance as a fresher."
	}
];

imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
profession.innerText = people[0].profession;
description.innerText = people[0].description;
let currentPerson = 0;

//Select the side where you want to slide
function slide(whichSide, personNumber) {
	let reviewWrapWidth = reviewWrap.offsetWidth + "px";
	// let descriptionHeight = description.offsetHeight + "px";
	let side1symbol = whichSide === "left" ? "" : "-";
	let side2symbol = whichSide === "left" ? "-" : "";

	let tl = gsap.timeline();

	if (isChickenVisible) {
		tl.to(chicken, {
			duration: 0.4,
			opacity: 0
		});
	}

	tl.to(reviewWrap, {
		duration: 0.4,
		opacity: 0,
		translateX: `${side1symbol + reviewWrapWidth}`
	});

	tl.to(reviewWrap, {
		duration: 0,
		translateX: `${side2symbol + reviewWrapWidth}`
	});

	setTimeout(() => {
		imgDiv.style.backgroundImage = people[personNumber].photo;
	}, 400);
	setTimeout(() => {
		description.style.height = descriptionHeight;
	}, 400);
	setTimeout(() => {
		personName.innerText = people[personNumber].name;
	}, 400);
	setTimeout(() => {
		profession.innerText = people[personNumber].profession;
	}, 400);
	setTimeout(() => {
		description.innerText = people[personNumber].description;
	}, 400);

	tl.to(reviewWrap, {
		duration: 0.4,
		opacity: 1,
		translateX: 0
	});

	if (isChickenVisible) {
		tl.to(chicken, {
			duration: 0.4,
			opacity: 1
		});
	}
}

function setNextCardLeft() {
	if (currentPerson === 5) {
		currentPerson = 0;
		slide("left", currentPerson);
	} else {
		currentPerson++;
	}

	slide("left", currentPerson);
}

function setNextCardRight() {
	if (currentPerson === 0) {
		currentPerson = 5;
		slide("right", currentPerson);
	} else {
		currentPerson--;
	}

	slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);

