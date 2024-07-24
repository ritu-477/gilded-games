
function openNav() {
    document.querySelector(".menuList").classList.toggle("start-0");
    document.body.classList.toggle("overflowhidden");
    document.querySelector(".menuIcon").classList.toggle("cross");
}

// timer
const timeData = document.getElementById("times");
function countdownTimer(timeString) {
    let [days, hours, minutes, seconds] = timeString.split(":").map(Number);
    let totalSeconds =
        days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;
    const interval = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(interval);
            alert("Timer has ended");
            return;
        }
        days = Math.floor(totalSeconds / (24 * 60 * 60));
        hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
        minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        seconds = totalSeconds % 60;
        const timeLeft = `<span class="text-[#1BABFE]">${days}d</span> : ${hours}hr : ${minutes}min : ${seconds}sec`;
        timeData.innerHTML = timeLeft;
        totalSeconds--;
    }, 1000);
}
countdownTimer("19:10:2:55");

// slider
$('.responsive_2').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 3000,
    autoplaySpeed: 0,
    slidesToShow: 3,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 720,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],

});



// // scroll-to -top-button////
const mybutton = document.querySelector(".topBtn");
const show = document.querySelector(".show")

window.addEventListener("scroll", function () {
    if (window.scrollY > 600) {
        mybutton.classList.add("show")
    }
    else {
        mybutton.classList.remove("show")
    }
})
mybutton.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;

});
