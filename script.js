let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let previewContainer = document.querySelector('.products-preview');
let previewBox = previewContainer.querySelectorAll('.preview');


menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

document.querySelectorAll('.box-container .prod').forEach(product => {
    product.onclick = () => {
        previewContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target){
                preview.classList.add('active')
            }
        })
    }
})

previewBox.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    }
})