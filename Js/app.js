function removeImage(){
    document.querySelector('.loading-image').style.display = 'none';
}

function showmessage(){
    successful = document.createElement('nav');
    text = document.createTextNode('La Informacion se ha enviado con exito');
    successful.appendChild(text);
    successful.id = 'navbar';
    successful.className = 'successful';
    successful.classList.add('logo')
    sibling = document.querySelector('.l-heading')
    document.querySelector('#contact-form .container').insertBefore(successful, sibling)
    console.log(successful)
    
    setTimeout(function(){
        successful.remove()
    }, 3000)

    elements = document.querySelectorAll('input')
    let newelements = Array.from(elements)
    newelements.forEach(function(element, index){
        element.value = '';
    })
    document.querySelector('textarea').value = ''
}

document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault()
    document.querySelector('.loading-image').style.display = 'block'
    setTimeout(function(){
        removeImage()
        showmessage()
    }, 2000)
})

console.log("Hello world")