//makes request
function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.open( "GET", theUrl, false )
    xmlHttp.send(null)
    return xmlHttp.responseText
}
//get infos from api
const res = JSON.parse(httpGet('http://127.0.0.1:5000/api/info'))


//edit banner images
let banners = res.banners
banners.forEach((element, index) => {
    let banner_img = document.createElement('img')
    banner_img.setAttribute('class', 'banner_img')
    banner_img.src = element
    let carousel = document.getElementsByClassName('carousel_banners')[0]
    carousel.appendChild(banner_img)
})


//edit team members
let team = res.team
team.forEach((element, index) => {
    //member div
    let member_div = document.createElement("div")
    member_div.classList.add('member')
    //member img
    let member_img = document.createElement("img")
    member_img.src = element.img
    member_div.appendChild(member_img)
    //member description
    let member_text = document.createElement("p")
    member_text.innerText = element.desc
    member_text.classList.add('member_text')
    member_div.appendChild(member_text)
    //put it all together
    let team_box = document.getElementsByClassName('team_box')[0]
    team_box.appendChild(member_div)
});


//edit linkedin
let linkedin = document.getElementsByClassName('linkedin')[0]
linkedin.src = res.linkedin


//edit insta posts
let posts = res.instagram
posts.forEach((element, index) => {
    //post div
    let post_div = document.createElement("div")
    post_div.classList.add('post')
    //post description
    let post_link = document.createElement("a")
    post_link.href = element.link
    post_link.target = '_blank'
    post_div.appendChild(post_link)
    //post img
    let post_img = document.createElement("img")
    post_img.src = element.img
    post_link.appendChild(post_img)
    //put it all together
    let team_box = document.getElementsByClassName('posts')[0]
    team_box.appendChild(post_div)
    //add aos animation
    for(let element of document.getElementsByClassName('post')){
        element.setAttribute('data-aos', 'zoom-in')
    }
});


//sponsors_box
    //<div class="sponsor">
        //<img src="https://media.discordapp.net/attachments/962786684532039691/968711600905257010/Sesi_Senai.png" alt="patrocinador" data-aos="zoom-in">
        //<p class="sponsor_text" data-aos="zoom-out-up" >Hoje instituições consolidadas nacional e internacionalmente, o SESI e o SENAl há décadas, ajudam a elevar o nível da formação educacional dos brasileiros e são instrumentos fundamentais para o desenvolvimento de uma indústria mais inovadora e competitiva.</p>
    //</div>
//edit sponsors
let sponsors = res.sponsors
sponsors.forEach((element, index) => {
    // div
    let sponsors_div = document.createElement("div")
    sponsors_div.classList.add('sponsor')
    // img
    let sponsors_img = document.createElement("img")
    sponsors_img.src = element.img
    sponsors_div.appendChild(sponsors_img)
    // description
    let sponsors_link = document.createElement("p")
    sponsors_link.classList.add('sponsor_text')
    sponsors_link.innerText = element.desc
    sponsors_div.appendChild(sponsors_link)
    //put it all together
    let sponsors_box = document.getElementsByClassName('sponsors_box')[0]
    sponsors_box.appendChild(sponsors_div)
    //add aos animation
    for(let element of document.getElementsByClassName('sponsor')){
        element.setAttribute('data-aos', 'zoom-in')
    }
    //add aos animation
    for(let element of document.getElementsByClassName('sponsor_text')){
        element.setAttribute('data-aos', 'zoom-in')
    }
});