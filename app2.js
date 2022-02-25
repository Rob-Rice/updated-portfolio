

// ===================== about me tabs ===================== 
const aboutMeAbout = document.querySelector('.a-first-btn')
const portfolioAbout = document.querySelector('.a-second-btn')
const contactAbout = document.querySelector('.a-fourth-btn')



const aboutMeHidden = document.getElementById('about')
const portfolioHidden = document.getElementById('portfolio')
const contactHidden = document.getElementById('contact')


aboutMeAbout.addEventListener('click', appearAboutPage)
// // about tab
function appearAboutPage (e) {
    e.preventDefault()
    // console.log(e.currentTarget);
    const btn = e.currentTarget;
    // if (btn) {
//     //     hiddenContact.classList.remove('contact')
//     //     hiddenPort.classList.remove('projects')
//     //     hiddenResume.classList.remove('resume')
//     //     setTimeout(() => {
    aboutMeHidden.classList.add('a-about')
    portfolioHidden.classList.remove('a-projects')
    contactHidden.classList.remove('a-contact')
//     //         hiddenHome.style.visibility = 'visible'
//     //     }, 100)
    
}

portfolioAbout.addEventListener('click', appearPortAbout)

function appearPortAbout (event) {
    event.preventDefault()
    const btn = event.currentTarget    
    portfolioHidden.classList.add('a-projects')
    aboutMeHidden.classList.remove('a-about')
    contactHidden.classList.remove('a-contact')
}



contactAbout.addEventListener('click', appearContactAbout)

function appearContactAbout(ev) {
    ev.preventDefault()
    contactHidden.classList.add('a-contact')
    aboutMeHidden.classList.remove('a-about')
    portfolioHidden.classList.remove('a-projects')

}


// ===================== gsap ===================== 
// pageTransition = () => {
//     const width =  window.innerWidth
//     if(width < 824) {
//         return undefined
//     } 

//     var timeline = gsap.timeline()
//     timeline.set('body', {
//         // top: '-100%'
//         visibility: 'hidden'
//     })

//     timeline.to('main, .btn-container', {
//         zIndex: 900
//     })

//     timeline.to('.page-transition', {
//         duration: .5,
//         height: '100%',
//         top: '0%'
//     })


//     timeline.to('.page-transition', {
//         duration: .1,
//         height: '100%',
//         top: '100%',
//         // delay: .1
//     })
//     timeline.set('body', {
//         // top: '-100%'
//         visibility: 'hidden'
//     })

//     timeline.set('.page-transition', {
//         // top: '-100%'
//         opacity: '.1'
//     })


// }

// mainAnimation = () => {

//     const width =  window.innerWidth
//     if(width < 824) {
//         return undefined
//     } 
//     var timeline = gsap.timeline()
//     // timeline.from('.container, .btn-container', {
//     // timeline.from('.name, .what-it-do, .smaller, .img, .btn-container', {
//     timeline.from('.main, .a-main', {
//         duration: 1,
//         y: 30,
//         opacity: 0,
//         stagger: {
//             amount: .4
//         },
//         delay: 1
//     })
// }

// delay = (n) => {
//     n = n || 1000
//     return new Promise((done) => {
//         setTimeout(() => {
//             done()
//         }, n)
//     })
// }

// ===================== barba ===================== 
// barba.init({
//     sync: true,
//     transitions: [
//         {
//             async leave(data) {
//                 const done = this.async()
//                 pageTransition()
//                 await delay(1000)
//                 // setTimeout(() => {
//                     location.reload()
//                 // }, 800);
//                 done()
//             },
//             async once(data) {
//                 mainAnimation()
//             }
//         }
//     ]
// })



