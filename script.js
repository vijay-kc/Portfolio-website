const togglebtn = document.getElementsByClassName('toggle-button')[0];
const sidebar = document.getElementsByClassName('nscroll')[0];
const hamburger = document.getElementsByClassName('ham')[0];



// Hamburger Menu

hamburger.addEventListener('click', function(e){
  e.stopPropagation();
  togglebtn.classList.toggle('clicked');
  sidebar.classList.toggle('active');
});

togglebtn.addEventListener('click', function(e){
  e.stopPropagation();
  togglebtn.classList.toggle('clicked');
  sidebar.classList.toggle('active');
});

document.onclick = function(e) {
  if (!e.target.classList.contains('nscroll') && !e.target.classList.contains('ham') && !e.target.classList.contains('toggle-button')) {
    togglebtn.classList.remove('clicked');
    sidebar.classList.remove('active');
  }
};


//for theme

const theme = document.getElementById("theme");
const icon = document.getElementsByClassName("fa-solid")[0];

theme.onclick = function() {
    document.body.classList.toggle("light-theme");
    if(icon.classList.contains('fa-sun')){
        icon.classList.replace('fa-sun','fa-moon');
    }
    else{
        icon.classList.replace('fa-moon','fa-sun');
    }
};

//for home text


var typed = new Typed('#element', {
    strings: ['developer', 'designer','programmer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});

//for language


const tskill = document.querySelector(".h-skill");
const tlang = document.querySelector(".h-lang");
const skill = document.querySelector(".skill");
const lang = document.querySelector(".lang");
const hlang = document.querySelector(".h4lang");
const hskill = document.querySelector(".h4skill");
const dskill = document.querySelector(".skill-us");
const dlang = document.querySelector(".skill-ul");




tlang.addEventListener('click', function() {
  skill.classList.add('active');
  lang.classList.add('active');
});


tskill.addEventListener('click', function() {
  skill.classList.remove('active');
  lang.classList.remove('active');
});

hlang.addEventListener('click', function() {
  dlang.classList.add('active-skill');
  dskill.classList.remove('active-skill');
});

hskill.addEventListener('click', function() {
  dlang.classList.remove('active-skill');
  dskill.classList.add('active-skill');
});



//for form reset


function resetForm(){
  const form = document.getElementById("form");
  setTimeout(function(){
      form.reset();
  }, 5000);
}