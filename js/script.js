// typing animation
var typed = new Typed(".typing", {
    strings:["","Web Designer", "Frontend Developer", "UI Designer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})
// aside
const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length,
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;
for(let i =0; i<totalNavList; i++) {
    // console.log(navList[i]);
    const a = navList[i].querySelector("a");
    // console.log(a);
    a.addEventListener("click", function() {
        removeBackSection();
        // console.log(this)
        for(let j = 0; j<totalNavList; j++) {
            if(navList[j].querySelector("a").classList.contains("active"))
             {
                addBackSection(j)
                // allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if(window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}
function showSection(element) {
    for(let i =0; i<totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    // console.log(target);
    document.querySelector("#" + target).classList.add("active");
}
function removeBackSection() {
    for(let i =0; i<totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num) {
    allSection[num].classList.add("back-section");
}
function updateNav(element) {
    // console.log(element.getAttribute("href").split("#")[1]);
    for(let i =0; i<totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }   
     }
}
document.querySelector(".hire-me").addEventListener("click", function() {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})

const navTogglerBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn() {
    aside.classList.toggle("openUp");
    navTogglerBtn.classList.toggle("openUp");
    for(let i = 0; i<totalSection; i++) {
        allSection[i].classList.toggle("openUp");
    }
}

// cursor events
let cursor1 = document.querySelector(".cursor-1");
let cursor2 = document.querySelector(".cursor-2");

window.onmousemove = (e) => {
    cursor1.style.top = e.pageY + "px";
    cursor1.style.left = e.pageX + "px";
    cursor2.style.top = e.pageY + "px";
    cursor2.style.left = e.pageX + "px";
}

document.querySelectorAll("a").forEach(links => {
    links.onmouseenter = () => {
        cursor1.classList.add("boom");
        cursor2.classList.add("boom");
    }
    links.onmouseleave = () => {
        cursor1.classList.remove("boom");
        cursor2.classList.remove("boom");
    }

})
