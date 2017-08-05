console.log("wysiwyg.js");
let finalOutput = document.getElementById("cardOutput");
let textInputArea = document.getElementById("theTextArea");

var famousPeople = [

{
  title: "Astrophysicist",
  name: "Neil deGrasse Tyson",
  bio: "Neil is an American astrophysicist, author, and science communicator.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Tyson_-_Apollo_40th_anniversary_2009.jpg/500px-Tyson_-_Apollo_40th_anniversary_2009.jpg",
  lifespan: {birth: 1958, death: "still alive"}
},

{
  title: "Basketball Great",
  name: "Michael Jordan",
  bio: "Jordan played 15 seasons in the National Basketball Association (NBA) for the Chicago Bulls and Washington Wizards. His biography on the NBA website states that, by acclamation, he is the greatest basketball player of all time.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Jordan_Lipofsky.jpg/170px-Jordan_Lipofsky.jpg",
  lifespan: {birth: 1963, death: "still alive"}
},

{
  title: "Golf Great",
  name: "Arnold Palmer",
  bio: "Nicknamed The King, he was one of golf's most popular stars and its most important trailblazer, the first superstar of the sport's television age, which began in the 1950s.",
  image: "https://s-media-cache-ak0.pinimg.com/originals/3b/25/cf/3b25cff487056b65c9708487a2a89f3b.jpg",
  lifespan: {birth: 1929, death: 2016}
},

{
  title: "First President",
  name: "George Washington",
  bio: "George was an American politician and soldier who served as the first President of the United States from 1789 to 1797 and was one of the Founding Fathers of the United States.",
  image: "http://cdn.history.com/sites/2/2013/11/George_Washington-AB.jpeg",
  lifespan: {birth: 1732, death: 1799}
}

];

var i = 0
for (; i < famousPeople.length; i++) {

let cardNumber = famousPeople.length;

 finalOutput.innerHTML +=      
      `<person id="singlecard${i}" class="cardStyling">
          <header>
               <h2>${famousPeople[i].name} - ${famousPeople[i].title}</h2>
          </header>
          <section>
               <p>${famousPeople[i].bio}</p> <img src="${famousPeople[i].image}">
          </section>
          <footer>
               <p>${famousPeople[i].lifespan.birth} -  ${famousPeople[i].lifespan.death}</p>
          </footer>
      </person>`
}

// Now containerEl will have elements in it
var containerEl = document.getElementsByClassName("cardStyling");

// Event listeners are created
for (var i = 0; i < containerEl.length; i++) {
  containerEl[i].addEventListener("click", handleClick)
};


var myExactTarget = "";

textInputArea.addEventListener("keyup", (event) => {
  myExactTarget.innerText = textInputArea.value;
  if (event.keyCode == 13) {
    textInputArea.value = "";
  }
  console.log ("myExactTarget", myExactTarget);
});



function handleClick(event) {
  myExactTarget = event.currentTarget.children[1].children[0];
  console.log ("myExactTarget", myExactTarget);
  event.currentTarget.classList.toggle("dottedoutline");
  textInputArea.focus();


  console.log ("event.currentTarget", event.currentTarget);

}



