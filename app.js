const aboutMe = document.querySelector('.first-btn')
const portfolio = document.querySelector('.second-btn')
const resume = document.querySelector('.third-btn')
const contact = document.querySelector('.fourth-btn')

const orange = document.querySelector('.orange')
const smaller = document.querySelector('.smaller')
const hiddenAboutMe = document.querySelector('.hidden')
const hiddenPort = document.querySelector('.port-hidden')
const hiddenResume = document.querySelector('.resume-hidden')
const hiddenContact = document.querySelector('.contact-hidden')

const aboutPage = document.querySelector('.about')

aboutMe.addEventListener('click', appearAbout)

function appearAbout (e) {
    e.preventDefault()
    const btn = e.currentTarget;
    if (btn) {
        orange.classList.add('change-size')
        smaller.classList.add('change-font')
        hiddenContact.classList.remove('contact')
        hiddenPort.classList.remove('projects')
        hiddenResume.classList.remove('resume')
        setTimeout(() => {
            hiddenAboutMe.classList.add('about')
        }, 100)
    } 
}


portfolio.addEventListener('click', appearPort)

function appearPort(event) {
    event.preventDefault()
    const portfolioBtn = event.currentTarget
    if(portfolioBtn){
        orange.classList.add('change-size')
        smaller.classList.add('change-font')
        hiddenContact.classList.remove('contact')
        hiddenAboutMe.classList.remove('about')
        hiddenResume.classList.remove('resume')
        setTimeout(() => {
            hiddenPort.classList.add('projects')
        }, 300)
    } 
}

resume.addEventListener('click', appearResume)

function appearResume(ev) {
    ev.preventDefault()
    const resumeBtn = ev.currentTarget
    if(resumeBtn){
        orange.classList.add('change-size')
        smaller.classList.add('change-font')
        hiddenAboutMe.classList.remove('about')
        hiddenContact.classList.remove('contact')
        hiddenPort.classList.remove('projects')
        setTimeout(() => {
            hiddenResume.classList.add('resume')
        }, 300)
    }
}

contact.addEventListener('click', appearContact)

function appearContact(even) {
    even.preventDefault()
    const contactBtn = even.currentTarget
    if(contactBtn){
        orange.classList.add('change-size')
        smaller.classList.add('change-font')
        hiddenAboutMe.classList.remove('about')
        hiddenResume.classList.remove('resume')
        hiddenPort.classList.remove('projects')
        setTimeout(() => {
            hiddenContact.classList.add('contact')
        }, 300)
    }
}

