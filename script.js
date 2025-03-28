//Get element from the html file const header = document.queryselector('header');
const nav=document.querySelector('nav');
const main =document.querySelector('main');
const footer=document.querySelector(footer);
//add event listeners to the elements header.addeventlistener('mouseover',() => { Headers.style.backgroundcolor = '#555' ;});
nav.addEventListener('click', () => {console.log('navigation clicked!');});
main.addEventListener('scroll',()=> { console.log('main content scrolled!')});
footer.addEventlistener('mouseover', () => { footer.style.color = '#ccc';});
//Get elements from the HTML file const header = document.queryselector('header');
const navlinks = document.queryselectionall('nava');
//add event listeners to the elements navlinks.foreach((link) => {
    link.addEventListener('click', (e) => { e.preventDefault(); console.log('link clicked: $ {link.textcontent}');});
    //add a scroll event listener to the window window.addEventListener('scroll',() => {
        const scrollPosition = window.scrollY; console.log('scrolled to position: $ {scrollposition:}');
 //Get elements from the HTML file const featureMusicLinks = document.queryselectorAll('.featured-music a');
 const latestNewsLinks= document.querySelectorAll('.latest-news a');
 //add event listeners to the elements featuredMusicLinks.forEach(link) => { e.preventDefault();console.log('Featured music link clicked: $)};});
 latestNewsLinks.forEach((link) => { link.addEventListener('click', (e) =>{ e.preventDefault();console.log('Latest news link clicked: ${link.textcontent}');
 });
 });     