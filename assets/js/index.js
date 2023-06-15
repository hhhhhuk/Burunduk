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
    personlist[1].innerHTML = Math.ceil(Math.random()*(80-10)+10)
}



