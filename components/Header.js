export default function Header({titulo}){
    const header = document.createElement('header')
    header.innerHTML = `
        <h1 class="title">${titulo}</h1>
    `
    return header;
}

