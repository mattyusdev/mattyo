//Headers

const h1s = document.querySelectorAll("h1.pageheader");
const slash1 = document.querySelectorAll(".slash1header");
const slash2 = document.querySelectorAll(".slash2header");
const hrs = document.querySelectorAll("hr.pageheader");
const h2s = document.querySelectorAll("h2.pageheader");


let oberserverH1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = "fade 1s";
            entry.target.style.opacity = "1";
        }

    })
});

let oberserverSlash1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = "slash1 0.7s";
            entry.target.style.opacity = "1";
        }

    })
});

let oberserverSlash2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = "slash2 0.7s";
            entry.target.style.opacity = "1";
        }

    })
});

let oberserverHr = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if (entry.intersectionRatio > 0) {
            entry.target.style.width = "70px";
            entry.target.style.opacity = "1";
        }

    })
});

let oberserverH2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = "fadeslow 1s";
            entry.target.style.opacity = "1";
        }

    })
});

h1s.forEach(h1 => {
    h1.style.opacity = "0";
    oberserverH1.observe(h1);
})

slash1.forEach(slash => {
    slash.style.opacity = "0";
    oberserverSlash1.observe(slash);
})

slash2.forEach(slash => {
    slash.style.opacity = "0";
    oberserverSlash2.observe(slash);
})

hrs.forEach(hr => {
    hr.style.opacity = "0";
    oberserverHr.observe(hr);
})

h2s.forEach(h2 => {
    h2.style.opacity = "0";
    oberserverH2.observe(h2);
})

//Page2
const aboutMe = document.querySelector('ul.aboutme')
const aboutMeImg = document.querySelector('div.rowpage2 div.col-lg-4')

let oberserverAboutMe = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = "faderight 0.7s";
            entry.target.style.opacity = "1";
        }

    })
});

let oberserverAboutMeImg = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = "fadeup 1s";
            entry.target.style.opacity = "1";
        }

    })
});


oberserverAboutMe.observe(aboutMe);
aboutMe.style.opacity = "0";
oberserverAboutMeImg.observe(aboutMeImg);
aboutMeImg.style.opacity = "0";

//Page3
const insideBars = document.querySelectorAll('div.insidebar')

let oberserverInsideBar = new IntersectionObserver(entries => {
    let delay = 0.7;
    entries.forEach(entry => {

        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `slideright ${delay}s`;
            entry.target.style.opacity = "1";
            delay += 0.1;
        }

    })
});

insideBars.forEach(bar => {
    bar.style.opacity = "0";
    oberserverInsideBar.observe(bar);
})
