const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World',
        colores: [ //Objeto
            {nombre: 'Rojo', numero: 1},
            {nombre: 'Verde', numero: 2},
            {nombre: 'Amarillo', numero: 3},
            {nombre: 'Azul', numero: 4}
        ],
        lists: [ // Array
            'Sergio Villagomez',
            'Alexander Mc Gregor'
        ]
    }
})