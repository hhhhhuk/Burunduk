import massprof  from "./profession.js";
import massname from "./name.js";


let btngen = document.querySelector(".burunduker")
console.log(btngen);
let title = document.querySelector(".person__title")
console.log(title);
let desc = document.querySelector(".person__description")
console.log(desc);
let person = {
    vozrast: 20,
    Imya: 'Fon Shnizhyelli',
    Proffesia: 'Bughalter',
    Stashz: 120,
}

let aud = document.querySelector('.btn__vaud')
let mus = document.querySelector('.audiooo')
let musplay = true

let range = document.querySelector('#range')
console.log(range);

range.addEventListener('change',function () {
    mus.volume = range.value/100
    console.log(mus.volume);
})

aud.onclick = () => {
    mus.pause()
    if (musplay === true) {
        mus.pause()
        musplay = false
        console.log('dwd');
    }
    else {
        mus.play()
        musplay = true
        console.log('dwwww');
    }
}

function random(min,max) {
    return Math.ceil(Math.random()*(max + min)+min)
}

console.log(person.Imya);
let personlist = document.querySelectorAll('.description__character')


btngen.onclick = function genBurunduk() {
    title.style.opacity = 0;
    setTimeout(() => {
       title.style.display = 'none';
       desc.style.display = 'flex'
       setTimeout(() => {
           desc.style.opacity =  100
       }, 500);
    }, 500);
    person.vozrast = Math.ceil(Math.random()*(80-10)+10)
    person.Proffesia = massprof[Math.floor(Math.random() * (massprof.length))]
    person.Imya = massname[Math.floor(Math.random() * (massname.length))]
    console.log(person.Proffesia);
    person.Stashz = random(-1,person.vozrast/1.2)
    
    if (person.Stashz==0) {
        person.Proffesia = "Bezrabotniy"
    }
    personlist[1].innerHTML = person.vozrast
    personlist[3].innerHTML = person.Stashz
    personlist[2].innerHTML = person.Proffesia
    personlist[0].innerHTML = person.Imya

    
}



