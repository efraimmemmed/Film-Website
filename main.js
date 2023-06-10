let body = document.querySelector("body");
let container = document.querySelector(".container")
let spn = document.querySelector("span");
let ul = document.querySelector(".navbar-menu ul")
let nav = document.querySelector(".navbar")
let side = document.querySelector(".sidebar");
let li = document.querySelectorAll("li");
let saveBar = document.querySelector(".save-bar");
let searchBar = document.querySelector(".search-bar");
let searchBarOn = document.querySelector(".search-bar-on");
let saveBarOn = document.querySelector(".save-bar-on");
let settingBar = document.querySelector(".setting-bar");
let settingBarOn = document.querySelector(".setting-bar-on");
let a = document.querySelectorAll("a");
let filmbar = document.querySelector(".film-menu-bar");
let sli = document.querySelectorAll("#sId");
let movie = document.querySelector(".most-viewed-movies")
let movieItem = document.querySelectorAll(".most-viewed-movied-item");
let nextBtn = document.querySelector(".next-slide");
let movieImg = document.querySelectorAll(".img");
let prevMovie = document.querySelector(".prev-slide")
let nextLatest = document.querySelector(".next-latest");
let prevLatest = document.querySelector(".prev-latest")
let latestItem = document.querySelectorAll(".latest-releases-item");
let movieViewedImg = document.querySelectorAll(".most-viewed-movies-img");
let sliderImg = document.querySelectorAll(".slider-images");
let latestHeader = document.querySelector(".latest-releases-header");
let movieHeader = document.querySelector(".most-viewed-movies-header");
let sliderNext = document.querySelector("#slider-next");
let save = document.querySelector(".save-icon");
let search = document.querySelector(".search-button");
let setting = document.querySelector(".setting-button");
let sun = document.querySelector("#mode-sun");
let slideImage1 = document.querySelector("#slide-img-1");

let slideTitle1 = document.querySelector("#slide-title-1");
let like = document.querySelectorAll(".fa-thumbs-up");
let childrenSection = document.querySelector(".cartoon-section");
let childrenSectionHead = document.querySelector(".cartoon-section-header");
let familySection = document.querySelector(".family-section");
const bookmarkIcons = document.querySelectorAll('.fa-sharp.fa-regular.fa-bookmark');
let account = document.querySelector(".account");
let footer = document.querySelector(".footer-section");
let menuOn = document.querySelector(".menu-on");
let menuOnn = document.querySelector(".left-ul");
let familyHeader = document.querySelector(".family-section-header");
let menuOnicon = document.querySelector(".fa-solid fa-bars")
//sliders
let homeSliersWidth = 100
let homeSliders = 0
setInterval(() => {
	homeSliders++
	sliderImg.forEach(aElement => {
		aElement.style.transition = "1s  ease-in-out";
		aElement.style.transform = `translateX(${-homeSliders * homeSliersWidth}vw)`;

		if (homeSliders == 4) {

			aElement.style.transform = `translateX(0)`;
			return homeSliders = 0
		}
	})


}, 4000);



let movieIndex = 0;
let moviePrevIndex = 0;
const movieWidth = 300;

nextBtn.addEventListener("click", () => {
	const movieViewedImgs = document.getElementsByClassName("most-viewed-movies-img");

	if (movieIndex === movieViewedImgs.length - 5) {
		movieIndex = 0;
	} else {
		movieIndex++;
	}

	Array.from(movieItem).forEach((element, index) => {
		element.style.transition = "1s";
		element.style.transform = `translateX(${-movieIndex * movieWidth}px)`;

		if (index === movieViewedImgs.length - 4 && movieIndex === 0) {
			element.style.transform = `translateX(0)`;
		}
	});
});

prevMovie.addEventListener("click", () => {
	const movieViewedImgs = document.getElementsByClassName("most-viewed-movies-img");

	if (movieIndex === 0) {
		movieIndex = movieViewedImgs.length - 5;
	} else {
		movieIndex--;
	}

	Array.from(movieItem).forEach((element, index) => {
		element.style.transition = "1s";
		element.style.transform = `translateX(${-movieIndex * movieWidth}px)`;

		if (index === movieViewedImgs.length - 1 && movieIndex === movieViewedImgs.length - 1) {
			element.style.transform = `translateX(0)`;
		}
	});
});





let latestIndex = 0;
let latestPrevIndex = 0;
const latestWidth = 300;


nextLatest.addEventListener("click", () => {
	const latestViewedImgs = document.getElementsByClassName("latest-releases-item");

	if (latestIndex === latestViewedImgs.length - 5) {
		latestIndex = 0;
	} else {
		latestIndex++;
	}

	Array.from(latestItem).forEach((element, index) => {
		element.style.transition = "1s";
		element.style.transform = `translateX(${-latestIndex * latestWidth}px)`;

		if (index === latestViewedImgs.length - 4 && latestIndex === 0) {
			element.style.transform = `translateX(0)`;
		}
	});
});

prevLatest.addEventListener("click", () => {
	const latestViewedImgs = document.getElementsByClassName("latest-releases-item");

	if (latestIndex === 0) {
		latestIndex = latestViewedImgs.length - 5;
	} else {
		latestIndex--;
	}

	Array.from(latestItem).forEach((element, index) => {
		element.style.transition = "1s";
		element.style.transform = `translateX(${-latestIndex * latestWidth}px)`;

		if (index === latestViewedImgs.length - 1 && latestIndex === latestViewedImgs.length - 1) {
			element.style.transform = `translateX(0)`;
		}
	});
});



//?Dark mode

let btn = document.querySelector(".mode");
let isWhite = true;
btn.addEventListener("click", () => {
	if (sun.style.color == "white" || isWhite) {
		nav.style.backgroundColor = "white";
		account.style.color = "black";
		familySection.style.color = "black";
		familySection.style.transition = "0.3s ease-in-out";
		body.style.backgroundColor = "white"
		body.style.transition = "0.3s ease-in-out";
		nav.style.transition = "0.3s  ease-in-out";
		latestHeader.style.color = "black";
		movieHeader.style.color = "black";
		familyHeader.style.color = "black";
		familyHeader.style.transition = "0.3s  ease-in-out";
		a.forEach(element => {
			element.style.color = "black";
			element.style.transition = "0.3s ease-in-out";
		});

		side.classList.remove("sidebar-menu-black");
		side.classList.add("sidebar-menu-white");
		filmbar.style.backgroundColor = "white";
		filmbar.style.transition = "0.3s  ease-in-out";
		sli.forEach(x => {
			x.style.color = "black"
			x.style.transition = "0.3s"
		})
		sun.style.color = "black";
		sun.className = "fa fa-moon";
		isWhite = false;
	} else {

		account.style.color = "white";
		filmbar.style.backgroundColor = "black";
		filmbar.style.transition = "0.3s  ease-in-out";
		nav.style.backgroundColor = "black";
		body.style.backgroundColor = "black"
		body.style.transition = "0.3s ease-in-out";
		nav.style.Color = "white";
		nav.style.transition = "0.3s  ease-in-out";
		latestHeader.style.color = "white"
		latestHeader.style.transition = "0.3s ease-in-out"
		movieHeader.style.color = "white";
		movieHeader.style.transition = "0.3s"
		side.classList.remove("sidebar-menu-white");
		side.classList.add("sidebar-menu-black");
		familyHeader.style.color = "white";
		familyHeader.style.transition = "0.3s  ease-in-out";
		a.forEach(element => {
			element.style.color = "white";
			element.style.transition = "0.3s ease-in-out"
		});

		sli.forEach(x => {
			x.style.color = "white"
			x.style.transition = "0.3s ease-in-out"
		})
		sun.style.color = "white";
		sun.className = "fa fa-sun"
		familySection.style.color = "white";
		familySection.style.transition = "0.3s ease-in-out";
	}
})
let imageURL;

//fetch(Api)
const apiKey = "648f0e5";
const apiUrl = "http://www.omdbapi.com/";

const searchMovies = async (keyword) => {
	const url = `${apiUrl}?apikey=${apiKey}&s=${encodeURIComponent(keyword)}`;

	try {
		const response = await fetch(url);
		const data = await response.json();

		if (data.Response === "True") {
			const movies = data.Search;

			const movieViewedImgs = document.getElementsByClassName("most-viewed-movies-img");
			const movieTitle = document.getElementsByClassName("title");

			for (let i = 0; i < movies.length; i++) {
				if (i < movieViewedImgs.length) {
					const img = movieViewedImgs[i];
					img.src = movies[i].Poster;
				}
			}
			for (let i = 0; i < movies.length; i++) {
				if (i < movieTitle.length) {
					const title = movieTitle[i];
					// console.log(movieTitle[i]);
					title.innerHTML = movies[i].Title;
				}
			}

		}
	} catch (error) {
		console.log("Hata:", error);
	}
};

const searchLatest = async (keyword) => {
	const url = `${apiUrl}?apikey=${apiKey}&s=${encodeURIComponent(keyword)}`;

	try {
		const response = await fetch(url);
		const data = await response.json();

		if (data.Response === "True") {
			const movies = data.Search;

			const latestRealesesImgs = document.getElementsByClassName("latest-realeses-img");
			const latestTitle = document.getElementsByClassName("titles");
			for (let i = 0; i < movies.length; i++) {
				if (i < latestRealesesImgs.length) {
					const imgs = latestRealesesImgs[i];
					imgs.src = movies[i].Poster;
				}
			}
			for (let i = 0; i < movies.length; i++) {
				if (i < latestTitle.length) {
					const title = latestTitle[i];
					title.innerHTML = movies[i].Title;
				}
			}
		}
	} catch (error) {
		console.log("Hata:", error);
	}
};

searchMovies("marvel");
searchLatest("harry");

let cartoon1 = document.querySelector("#cartoon1")
let cartoon2 = document.querySelector("#cartoon2")
let cartoon3 = document.querySelector("#cartoon3")
let cartoon4 = document.querySelector("#cartoon4")
let cartoon5 = document.querySelector("#cartoon5")
let cartoon6 = document.querySelector("#cartoon6")
let cartoon7 = document.querySelector("#cartoon7")
let cartoon8 = document.querySelector("#cartoon8")


const searchCartoon1 = async (keyword) => {
	const url = `${apiUrl}?apikey=${apiKey}&s=${encodeURIComponent(keyword)}`;

	try {
		const response = await fetch(url);
		const data = await response.json();

		if (data.Response === "True") {
			const movies = data.Search;

			cartoon1.src = movies[0].Poster


		}
	} catch (error) {
		console.log("Hata:", error);
	}
};

searchCartoon1("Despicable");


const searchCartoon2 = async (keyword) => {
	const url = `${apiUrl}?apikey=${apiKey}&s=${encodeURIComponent(keyword)}`;

	try {
		const response = await fetch(url);
		const data = await response.json();

		if (data.Response === "True") {
			const movies = data.Search;

			cartoon2.src = movies[1].Poster


		}
	} catch (error) {
		console.log("Hata:", error);
	}
};

searchCartoon2("frozen");


const searchCartoon3 = async (keyword) => {
	const url = `${apiUrl}?apikey=${apiKey}&s=${encodeURIComponent(keyword)}`;

	try {
		const response = await fetch(url);
		const data = await response.json();

		if (data.Response === "True") {
			const movies = data.Search;

			cartoon3.src = movies[0].Poster


		}
	} catch (error) {
		console.log("Hata:", error);
	}
};
searchCartoon3("coco");


const searchCartoon4 = async (keyword) => {
	const url = `${apiUrl}?apikey=${apiKey}&s=${encodeURIComponent(keyword)}`;

	try {
		const response = await fetch(url);
		const data = await response.json();

		if (data.Response === "True") {
			const movies = data.Search;

			cartoon4.src = movies[0].Poster



		}
	} catch (error) {
		console.log("Hata:", error);
	}
};

searchCartoon4("zootopia");


const searchCartoon5 = async (keyword) => {
	const url = `${apiUrl}?apikey=${apiKey}&s=${encodeURIComponent(keyword)}`;

	try {
		const response = await fetch(url);
		const data = await response.json();

		if (data.Response === "True") {
			const movies = data.Search;

			cartoon5.src = movies[0].Poster

		}
	} catch (error) {
		console.log("Hata:", error);
	}
};

searchCartoon5("moana");


const searchCartoon6 = async (keyword) => {
	const url = `${apiUrl}?apikey=${apiKey}&s=${encodeURIComponent(keyword)}`;

	try {
		const response = await fetch(url);
		const data = await response.json();

		if (data.Response === "True") {
			const movies = data.Search;

			cartoon6.src = movies[2].Poster


		}
	} catch (error) {
		console.log("Hata:", error);
	}
};

searchCartoon6("How to Train Your Dragon");


const searchCartoon7 = async (keyword) => {
	const url = `${apiUrl}?apikey=${apiKey}&s=${encodeURIComponent(keyword)}`;

	try {
		const response = await fetch(url);
		const data = await response.json();

		if (data.Response === "True") {
			const movies = data.Search;

			cartoon7.src = movies[0].Poster



		}
	} catch (error) {
		console.log("Hata:", error);
	}
};

searchCartoon7("Toy Story 4");


const searchCartoon8 = async (keyword) => {
	const url = `${apiUrl}?apikey=${apiKey}&s=${encodeURIComponent(keyword)}`;

	try {
		const response = await fetch(url);
		const data = await response.json();

		if (data.Response === "True") {
			const movies = data.Search;

			cartoon8.src = movies[1].Poster


		}
	} catch (error) {
		console.log("Hata:", error);
	}
};

searchCartoon8("Panda");

//sidebar js
save.addEventListener("click", () => {
	if (saveBar.classList == ("save-bar")) {
		saveBar.classList.add("save-bar-on");
		searchBar.classList.remove("search-bar-on");
		settingBar.classList.remove("setting-bar-on")


	} else {
		saveBar.classList.remove("save-bar-on");
		saveBar.classList.add("save-bar");
	}


})


search.addEventListener("click", () => {
	if (searchBar.classList == ("search-bar")) {
		searchBar.classList.add("search-bar-on");
		saveBar.classList.remove("save-bar-on");
		settingBar.classList.remove("setting-bar-on")

	} else {
		searchBar.classList.remove("search-bar-on");
		searchBar.classList.add("search-bar");
	}
})


setting.addEventListener("click", () => {
	if (settingBar.classList == ("setting-bar")) {
		settingBar.classList.add("setting-bar-on");
		saveBar.classList.remove("save-bar-on");
		searchBar.classList.remove("search-bar-on");
	} else {
		settingBar.classList.remove("setting-bar-on");
		settingBar.classList.add("setting-bar");
	}
})



let searchBtn = document.querySelector(".input-btn");
let searchInput = document.querySelector(".search-bar-input");
let searchFilmAdd = document.querySelector(".search-film");
let myInpData;
let dislike = document.querySelectorAll(".fa-thumbs-down")

const searchFilm = async (keyword) => {
	const url = `${apiUrl}?apikey=${apiKey}&s=${encodeURIComponent(keyword)}`;

	try {
		const response = await fetch(url);
		const data = await response.json();

		if (data.Response === "True") {
			const movies = data.Search;

			searchFilmAdd.innerHTML = "";

			movies.forEach((element) => {
				const movieDiv = document.createElement("img");
				movieDiv.classList.add("search-film-item");
				movieDiv.src = element.Poster;
				searchFilmAdd.appendChild(movieDiv);
			});
		}
	} catch (error) {
		console.log("Hata:", error);
	}
};

searchBtn.addEventListener("click", () => {
	searchInput.value = "";
	searchFilmAdd.innerHTML = "";
});

searchInput.addEventListener("input", () => {
	myInpData = searchInput.value;

	if (myInpData.trim() === "") {
		searchFilmAdd.innerHTML = "";
	} else {
		searchFilm(myInpData);
	}
});

//like-dislike 

like.forEach(likeBtn => {
	likeBtn.addEventListener("click", () => {
		if (likeBtn.classList.contains("blueBtn") == false) {
			likeBtn.classList.add("blueBtn");
			dislike.forEach(dislikeBtn => {
				dislikeBtn.classList.remove("redBtn");
			});

		} else {
			likeBtn.classList.remove("blueBtn");

		}
	});
});


dislike.forEach(dislikeBtn => {
	dislikeBtn.addEventListener("click", () => {
		if (dislikeBtn.classList.contains("redBtn") == false) {
			dislikeBtn.classList.add("redBtn");
			like.forEach(likeBtn => {
				likeBtn.classList.remove("blueBtn");
			});

		} else {
			dislikeBtn.classList.remove("redBtn");

		}
	});
});







const bookmarkIconsLatest = document.querySelectorAll('.latest-releases-item .fa-bookmark');
const bookmarkIconsMost = document.querySelectorAll('.most-viewed-movied-item .fa-bookmark');

bookmarkIconsLatest.forEach(icon => {
	icon.addEventListener('click', () => {
		const latestItem = icon.closest('.latest-releases-item');
		const imgSrc = latestItem.querySelector('.latest-realeses-img').getAttribute('src');

		const movieDiv = document.createElement("div");
		movieDiv.classList.add("save-film-item");

		const imgElement = document.createElement("img");
		imgElement.classList.add("save-film-img");
		imgElement.src = imgSrc;

		const titleElement = document.createElement("div");

		movieDiv.appendChild(imgElement);
		movieDiv.appendChild(titleElement);

		const saveBar = document.querySelector('.save-bar');
		saveBar.appendChild(movieDiv);
	});
});


bookmarkIconsMost.forEach(icon => {
	icon.addEventListener('click', () => {
		const mostItem = icon.closest('.most-viewed-movied-item');
		const mostImgSrc = mostItem.querySelector('.most-viewed-movies-img').getAttribute('src');

		const movieDiv = document.createElement("div");
		movieDiv.classList.add("save-film-item");

		const imgElement = document.createElement("img");
		imgElement.classList.add("save-film-img");
		imgElement.src = mostImgSrc;

		const titleElement = document.createElement("div");
		movieDiv.appendChild(imgElement);
		movieDiv.appendChild(titleElement);

		const saveBar = document.querySelector('.save-bar');
		saveBar.appendChild(movieDiv);
	});
});
let is = true;
menuOn.addEventListener("click", () => {
	ul.classList.toggle("top");
  });
  
  










