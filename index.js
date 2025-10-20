// string => '' "" ``
// number => 0 1 2 3 4 5 6 7 8 9 || 1/2 || 2 + 2
// boolean => true false
// object

// document.querySelector('h1').innerHTML = 'Helooo'

document.querySelector('.h1').addEventListener('click',()=>{
document.querySelector('h1').innerHTML = 'Helooo'

})


console.log(document.querySelector('h1').innerHTML);




//  ------------------- 
document.querySelector('.img').addEventListener('click', ()=> {
  document.querySelector('img').outerHTML = '<img src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg" alt="Новая картинка" >';

});
console.log([ document.querySelector('.img-1')])



// --------------

document.querySelector('.list').addEventListener('click',() => {
  document.querySelector('li').innerHTML = 'banana'
})

// -----------------

document.querySelector('.link-bnt').addEventListener('click',()=> {
  document.querySelector('a').innerHTML = '565655655656565656'
})
// -----------------


document.querySelector('.img3').addEventListener('click', ()=> {
  document.querySelector('.images').outerHTML = '  <img src="https://i.pinimg.com/236x/c4/00/72/c40072f10a71a02eb44afe1436d1714f.jpg" alt="Новая картинка" >    '
})

// -----------------


document.querySelector('.text').addEventListener('click',()=>{
  document.querySelector('p').innerHTML = ' самый короткий текст'
})
