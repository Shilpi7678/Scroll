

// set date

const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// close link\\

const newToggle =document.querySelectorAll('.nav-toggle');
const linksContainer =document.querySelectorAll('.linksContainer')
const links = document.querySelectorAll('.links')

navToggle.addEventListener('click', function(){
    // linksContainer.classList.toggle("show-links");
    const containerHeigth = linksContainer.getBoundingClientRect().heigth;

    const linksHeight =links.getBoundingClientRect().heigth;
    console.log(linksHeight)
    if (containerHeigth === 0 ){
        linksContainer.style.heigth=`${linksHeight}px`
    }
    else{
        linksContainer.style.heigth=0;
    }
});
 const navber = document.getElementById("nav");
 const topLink =document.querySelector(".top-link");

// fixed navber

window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    const navHegiht = navber.getBoundingClientRect().height;
    if (scrollHeight > navHegiht){
        navber.classList.add("fixed-nav");
    }else{
        navber.classList.remove("fixed-nav");
    }
    
    if(scrollHeight > 500 ){
        topLink.classList.add("show-link");
    }else{
        topLink.classList.remove("show-link");
    }
});
// select links

const scrollLinks =document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function (link){
    link.addEventListener("click", function(e){
        // prevent default
        e.preventDefault();
        // navigate to specific spot

        const id= e.currentTarget.getAttribute('href').slice(1);
        const element = document .getElementById(id);

        // calcuate the heights
        const navHegiht =navber.getBoundingClientRect().height;
        const containerHeigth =linksContainer.getBoundingClientRect().height;

        const fixedNav =navber.classList.contains("fixed-nav");
        let position = element.offsetTop-navHegiht;
        if(!fixedNav){
            position = position -navHegiht;
        }

        if (navHegiht > 82){
            position = position + containerHeigth;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });

        linksContainer.style.height=0;

    });
});
















