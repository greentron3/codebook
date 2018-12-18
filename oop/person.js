let person  = {
    name: 'Behruze', // string
    age: 13,    // integer
    likessPie: true,  //boolean

    games: [   // array (list)
        'Robloox',
        'fork_knife'
    ],

    pet:{        // object (dictionary, map)
        name: 'Gizmo',
        type: 'cat'
        sit() {
            console.log('cat sits')
        }
    },

    //sit: function () { // method (function ref)
    sit() {    // method (function)
        console.log('person sits')
        this.pet.sit()
    }
}