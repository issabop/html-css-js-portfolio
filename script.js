function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

const portfolioText = {
    nav: {
        logo: "Muhammad Issa Umer",
        links: {
            about: { text: "About", link: "#about" },
            experience: { text: "Experience", link: "#experience" },
            projects: { text: "Projects", link: "#projects" },
            contact: { text: "Contact", link: "#contact" }
        }
    },
    profile: {
        greeting: "Hello, I'm",
        name: "M. Issa Umer",
        profession: "Personal Tutor & Student",
        buttons: {
            downloadCV: { text: "Download CV", link: "./assets/CV.pdf" },
            contactInfo: { text: "Contact Info", link: "#contact" }
        },
        socials: {
            linkedIn: { alt: "My LinkedIn profile", link: "https://www.linkedin.com/in/issa-umer-6772a522a/" },
            github: { alt: "My Github profile", link: "https://github.com/issabop" }
        }
    },
    about: {
        sectionIntro: "Get To Know More",
        sectionTitle: "About Me",
        experience: {
            iconAlt: "experience icon",
            title: "Experience",
            text: "6+ years<br>Personal Tutor"
        },
        education: {
            iconAlt: "education icon",
            title: "Education",
            text: "Bachelors of Computer Science<br>O/A Levels"
        },
        description: "Determined Young Entrepreneur, Experienced Educator. Eager to Learn, Grow, and Build. My Strong Character, Communication Skills, and Sharp Creative Mindset make me the king."
    },
    experience: {
        sectionIntro: "Explore My",
        sectionTitle: "Experience",
        programmingLanguages: {
            title: "Programming Languages",
            languages: [
                { name: "C++", level: "Experienced" },
                { name: "Python", level: "Experienced" },
                { name: "C", level: "Intermediate" },
                { name: "HTML", level: "Beginner" },
                { name: "CSS", level: "Beginner" },
                { name: "JavaScript", level: "Beginner" }
            ]
        },
        spokenLanguages: {
            title: "Languages",
            languages: [
                { name: "English", level: "Experienced" },
                { name: "اردو", level: "Experienced" },
                { name: "عربي", level: "Beginner" },
                { name: "German", level: "Beginner" }
            ]
        }
    },
    /*Not Used Yet*/
    projects: {
        sectionIntro: "Browse My Recent",
        sectionTitle: "Projects",
        projectList: [
            {
                name: "Vertigo Clothing",
                imageAlt: "Project 1",
                buttons: {
                    linkedin: { text: "Linkedin", link: "https://www.linkedin.com/in/vertigo-clothing-3b301a22a/" },
                    instagram: { text: "Instagram", link: "https://www.instagram.com/vertigo_clothing_online/" }
                }
            },
            {
                name: "EdConnect",
                imageAlt: "Project 2",
                buttons: {
                    playStore: { text: "Play Store", link: "https://github.com/issabop" },
                    appStore: { text: "App Store", link: "https://github.com/issabop" }
                }
            },
            {
                name: "Block Builder",
                imageAlt: "Project 3",
                buttons: {
                    website: { text: "Website", link: "https://github.com/issabop" },
                    github: { text: "Github", link: "https://github.com/issabop" }
                }
            }
        ]
    },
    /*Not Used Yet*/
    contact: {
        sectionIntro: "Get In Touch",
        sectionTitle: "Contact Me",
        contactInfo: {
            email: {
                iconAlt: "email icon",
                label: "Email",
                link: "mailto:issaumer125@gmail.com"
            },
            linkedIn: {
                iconAlt: "linkedin icon",
                label: "LinkedIn",
                link: "https://www.linkedin.com/in/issa-umer-6772a522a/"
            }
        }
    },
    /*Not Used Yet*/
    footer: {
        copyright: "Copyright © 2024 Muhammad Issa Umer, All Rights Reserved",
        navLinks: {
            about: { text: "About", link: "#about" },
            experience: { text: "Experience", link: "#experience" },
            projects: { text: "Projects", link: "#projects" },
            contact: { text: "Contact", link: "#contact" }
        }
    }
};