const button = document.querySelector('.show-cat');
//console.log(button);
const cat = document.querySelector('.cat');
console.log(cat);

button.addEventListener('click', function(){
    cat.classList.add('show');
});