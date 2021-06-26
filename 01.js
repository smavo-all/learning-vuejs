const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World',
        colores: [ //Objeto
            {nombre: 'Rojo', numero: true},
            {nombre: 'Verde', numero: true},
            {nombre: 'Amarillo', numero: true},
            {nombre: 'Azul', numero: false}
        ],
        lists: [ // Array
            'Sergio Villagomez',
            'Alexander Mc Gregor'
        ]
    }
})