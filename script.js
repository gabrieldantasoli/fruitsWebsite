let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let previewContainer = document.querySelector('.products-preview');
let previewContainer1 = document.querySelector('.products-preview1');
let previewBox = previewContainer.querySelectorAll('.preview');
let previewBox1 = previewContainer1.querySelectorAll('.preview');

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

document.querySelectorAll('.box-container .prod1').forEach(product => {
    product.onclick = () => {
        previewContainer1.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox1.forEach(preview => {
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

previewBox1.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active');
        previewContainer1.style.display = 'none';
    }
})