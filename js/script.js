'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');


    //   box.style.backgroundColor = 'red';
    //   box.style.width = '500px';

      btns[1].style.borderRadius = '100%';
      circles[0].style.backgroundColor = 'red';

      box.style.cssText = `background=color: blue; width: 500px`;

    //   for (let i = 0; i < hearts.length; i++) {
    //     hearts[i].style.backgroundColor = 'blue';
    //   }

    hearts.forEach(item => {
        item.style.backgroundColor = 'blue';
    });

    const div = document.createElement('div'); //элемент создан, сущ только внутри js

    //текстовые узлы(ноды) - элементы без оболочки тега
    const text = document.createTextNode('Тут был я'); // используется очень редко

    div.classList.add('black'); // свойство classList и метод add()

    document.body.append(div); // добавляет элемент во внутрь в конец body

//    wrapper.append(div); // добавляет элемент в конец wrapper
// wrapper.appendChild(div); // устаревший метод
//    wrapper.prepend(div); // добавляет жлемент в начало wrapper

// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[1]); // устаревшее вместо prepend, before, after

// circles[0].remove(); // удаляет элемент со страницы
// wrapper.removeChild(hearts[1]); // устаревший метод

// hearts[0].replaceWith(circles[0]); // кружочек вместо сердечка
// // один элемент заменяется другим, второй элемент переместился
// wrapper.replaceChild(circles[0], hearts[0]); // устаревший метод

div.innerHTML = "<h1>Hello World</h1>";
// div.textContent = "Hello";

div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>'); // вставить соседний HTML
