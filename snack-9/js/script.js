// Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.

const listaZucchine = [

    {
        'type':'zucchine',
        'weigth':50,
        'length':'2cm'
    },
    {
        'type':'zucchine',
        'weigth':70,
        'length':'7cm'
    },
    {
        'type':'zucchine',
        'weigth':52,
        'length':'1cm'
    },
    {
        'type':'zucchine',
        'weigth':120,
        'length':'9cm'
    },
    {
        'type':'zucchine',
        'weigth':30,
        'length':'23cm'
    },
    {
        'type':'zucchine',
        'weigth':44,
        'length':'18cm'
    },
    {
        'type':'zucchine',
        'weigth':6,
        'length':'13cm'
    },
    {
        'type':'zucchine',
        'weigth':67,
        'length':'34cm'
    },
    {
        'type':'zucchine',
        'weigth':56,
        'length':'6cm'
    },
    {
        'type':'zucchine',
        'weigth':99,
        'length':'29cm'
    },
]

let totalWeigth = 0


for (i = 0; i < listaZucchine.length; i++){
    const zucchinaAttuale = listaZucchine[i]
    totalWeigth = totalWeigth + zucchinaAttuale.weigth;
}

console.log(totalWeigth)