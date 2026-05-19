window.addEventListener("load", () => {
    document.body.classList.add("loaded");
    revealOnScroll();
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 140;

        if(window.scrollY >= sectionTop){
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if(link.getAttribute("href") === `#${currentSection}`){
            link.classList.add("active");
        }
    });

    revealOnScroll();
});

const revealItems = document.querySelectorAll(
    ".about-box, .contact-box, .project-card, .skills span, .project-category"
);

function revealOnScroll(){
    revealItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;

        if(itemTop < window.innerHeight - 80){
            item.classList.add("show");
        }
    });
}

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {
    card.addEventListener("mousemove", e => {
        const popup = document.getElementById("projectPopup");

        if(popup && popup.classList.contains("active")) return;

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 18;
        const rotateY = (centerX - x) / 18;

        card.style.transform =
            `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform =
            "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
    });
});

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("mousemove", e => {
        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        button.style.transform =
            `translate(${x * 0.15}px, ${y * 0.15}px) scale(1.04)`;
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translate(0,0) scale(1)";
    });
});

const photoCard = document.querySelector(".photo-card");

if(photoCard){
    photoCard.addEventListener("mousemove", e => {
        const rect = photoCard.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = (y - rect.height / 2) / 18;
        const rotateY = (rect.width / 2 - x) / 18;

        photoCard.style.transform =
            `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    photoCard.addEventListener("mouseleave", () => {
        photoCard.style.transform =
            "perspective(900px) rotateX(0deg) rotateY(0deg)";
    });
}

const typingText = document.querySelector(".home-left h2");

if(typingText){
    const text = typingText.textContent;
    typingText.textContent = "";

    let index = 0;

    function typeEffect(){
        if(index < text.length){
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 70);
        }
    }

    setTimeout(typeEffect, 600);
}

const particleContainer = document.createElement("div");
particleContainer.className = "particles";
document.body.appendChild(particleContainer);

for(let i = 0; i < 35; i++){
    const particle = document.createElement("span");

    particle.style.left = Math.random() * 100 + "vw";
    particle.style.top = Math.random() * 100 + "vh";
    particle.style.animationDuration = 4 + Math.random() * 8 + "s";
    particle.style.animationDelay = Math.random() * 5 + "s";
    particle.style.opacity = Math.random();

    particleContainer.appendChild(particle);
}

const particleStyle = document.createElement("style");

particleStyle.innerHTML = `
    body{
        opacity:0;
        transition:opacity 0.8s ease;
    }

    body.loaded{
        opacity:1;
    }

    .particles{
        position:fixed;
        inset:0;
        pointer-events:none;
        overflow:hidden;
        z-index:-1;
    }

    .particles span{
        position:absolute;
        width:5px;
        height:5px;
        background:#c29b6b;
        border-radius:50%;
        animation:particleMove linear infinite;
        filter:blur(1px);
    }

    @keyframes particleMove{
        0%{
            transform:translateY(0) scale(1);
        }
        100%{
            transform:translateY(-120vh) scale(0);
        }
    }

    .about-box,
    .contact-box,
    .skills span,
    .project-category{
        opacity:0;
        transform:translateY(40px);
        transition:0.8s ease;
    }

    .about-box.show,
    .contact-box.show,
    .skills span.show,
    .project-category.show{
        opacity:1;
        transform:translateY(0);
    }

    .project-card{
        transform-style:preserve-3d;
        will-change:transform;
    }
`;

document.head.appendChild(particleStyle);

const projectsData = {
    fortquest: {
        title: "FortQuest",
        desc: "FortQuest is a major Android project based on Maharashtra historical forts. It includes fort information, animated videos, quiz system, 360° fort view concept and historical themed UI.",
        images: [
            "fortquest1.jpg",
            "fortquest2.jpg",
            "fortquest3.jpg",
            "fortquest4.jpg"
        ],
apk: "apk-fortquest.apk"    },

    careercraft: {
        title: "CareerCraft AI",
        desc: "CareerCraft AI is a major Android app for resume building and interview preparation with ATS checker and portfolio generator.",
        images: [
            "careercraft1.jpg",
            "careercraft2.jpg",
            "careercraft3.jpg",
            "careercraft4.jpg"
        ],
        apk: "apk-careercraft.apk"
    },

    irctc: {
        title: "IRCTC App Redesign",
        desc: "IRCTC App Redesign improves railway booking experience with clean navigation, better dashboard and modern UI.",
        images: [
            "irctc1.jpg",
            "irctc2.jpg",
            "irctc3.jpg",
            "irctc4.jpg"
        ],
        apk: "apk-irctc.apk"
    },

    citybus: {
        title: "Nashik City Bus App",
        desc: "Nashik City Bus App is a UI enhancement project for local transport with route search, tracking concept and ticket screen.",
        images: [
            "citybus1.jpg",
            "citybus2.jpg",
            "citybus3.jpg",
            "citybus4.jpg"
        ],
        apk: "apk-citybus.apk"
    },

    jarvis: {
        title: "Jarvis AI Assistant",
        desc: "Jarvis AI Assistant is a voice-based mini Android project for smart commands and automation.",
        images: [
            "jarvis1.jpg",
            "jarvis2.jpg",
            "jarvis3.jpg"
        ],
        apk: "apk-jarvis.apk"
    },

    food: {
        title: "Food Delivery App",
        desc: "Food Delivery App is a mini Android UI project with categories, restaurant cards and cart screen.",
        images: [
            "food1.jpg",
            "food2.jpg",
            "food3.jpg",
            "food4.jpg"
        ],
        apk: "apk-food.apk"
    },

    attendance: {
        title: "Student Attendance App",
        desc: "Student Attendance App manages student attendance with simple record management UI.",
        images: [
            "attendance1.jpg",
            "attendance2.jpg",
            "attendance3.jpg",
            "attendance4.jpg"
        ],
        apk: "apk-attendance.apk"
    }
};

function openProject(projectId){
    const project = projectsData[projectId];

    if(!project){
        alert("Project data not found.");
        return;
    }

    document.getElementById("popupTitle").textContent = project.title;
    document.getElementById("popupDesc").textContent = project.desc;

    const imageBox = document.getElementById("popupImages");
    imageBox.innerHTML = "";

    project.images.forEach(imagePath => {
        const img = document.createElement("img");
        img.src = imagePath;
        img.alt = project.title;

        img.onerror = function(){
            this.style.display = "none";
        };

        imageBox.appendChild(img);
    });

    const apkBtn = document.getElementById("apkBtn");
    apkBtn.href = project.apk;
    apkBtn.setAttribute("download", "");

    document.getElementById("projectPopup").classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeProject(){
    document.getElementById("projectPopup").classList.remove("active");
    document.body.style.overflow = "auto";
}

const popup = document.getElementById("projectPopup");

if(popup){
    popup.addEventListener("click", function(e){
        if(e.target === this){
            closeProject();
        }
    });
}

document.addEventListener("keydown", e => {
    if(e.key === "Escape"){
        closeProject();
    }
});