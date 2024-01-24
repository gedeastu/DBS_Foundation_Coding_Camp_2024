// const input = prompt("Who are you? ");
// alert(`Welcome ${input}`)

// const ageInput = prompt("Silahkan masukan umur anda...");
// const parseValue = Number(ageInput);
// console.log(`Tipe data dari \`pesanInputConvertedToNumber\` adalah ${parseValue} with type data is ${typeof parseValue}`)

const headHTML = document.head
console.log(headHTML)

const bodyHTML = document.body
console.log(bodyHTML)

const textContent = document.getElementById('hello');
const myName = document.querySelector('#hello');
console.log(`${textContent} + ${myName}`);

const buttons = document.querySelectorAll('.button');
for (const item of buttons) {
    console.log(item)
}

const buttonsCube = document.querySelectorAll('.button-item');
const buttonChildren = buttonsCube[0]
const buttonItem = buttonChildren.children[0].setAttribute('type','submit')
console.log(buttonChildren.children[0])

const buttonsCubeClass = document.getElementsByClassName('button-item')
for (const item of buttonsCubeClass) {
    console.log(item.children[0]);
    item.children[0].style.borderRadius = '6px';
}

const image = document.getElementById('image')
image.setAttribute("src","https://picsum.photos/200/300")
image.setAttribute("alt","Cubic")
image.setAttribute("height",215)

const div = document.createElement('div')
const copyright = document.createElement('p')
copyright.innerHTML = '<i>©Copyright Gede Astu Nugraha 2024</i>';

const dicodingLink = document.getElementById('dicodingLink');
dicodingLink.innerText = "Belajar Programming di Dicoding"
dicodingLink.innerHTML = "<i>Belajar Programming di Dicoding</i>"
