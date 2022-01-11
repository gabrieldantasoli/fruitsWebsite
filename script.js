let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let previewContainer = document.querySelector('.products-preview');
let previewContainer1 = document.querySelector('.products-preview1');
let previewContainer2 = document.querySelector('.products-preview2');
let previewContainer3 = document.querySelector('.products-preview3');
let previewBox = previewContainer.querySelectorAll('.preview');
let previewBox1 = previewContainer1.querySelectorAll('.preview');
let previewBox2 = previewContainer2.querySelectorAll('.preview');
let previewBox3 = previewContainer3.querySelectorAll('.preview');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

navbar.onclick = (e) => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
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

document.querySelectorAll('.box-container .prod2').forEach(product => {
    product.onclick = () => {
        previewContainer2.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox2.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target){
                preview.classList.add('active')
            }
        })
    }
})

document.querySelectorAll('.box-container .prod3').forEach(product => {
    product.onclick = () => {
        previewContainer3.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox3.forEach(preview => {
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

previewBox2.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active');
        previewContainer2.style.display = 'none';
    }
})

previewBox3.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active');
        previewContainer3.style.display = 'none';
    }
})