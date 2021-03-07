db.facturas.drop()
db.facturas.insertMany([
    {
        _id_factura: 1,
        Cliente: "Ricardo Entrena Quiles",
        Compra: [{
            _id_animales: 29,
            Cantidad: 2
        },
        {
            _id_animales: 24,
            Cantidad: 2
        }],
        Fecha_factura: new Date("2020-12-15"),
        Cajero: 4
    },
    {
        _id_factura: 2,
        Cliente: "Manuel Rojas Esquina",
        Compra: [{
            _id_animales: 21,
            Cantidad: 4
        },
        {
            _id_animales: 24,
            Cantidad: 2
        },
        {
            _id_animales: 23,
            Cantidad: 2
        }
    ],
        Fecha_factura: new Date("2015-08-16"),
        Cajero: 4
    },
    {
        _id_factura: 3,
        Cliente: "Laura Lebrel Jimenez",
        Compra: [{
            _id_animales: 4,
            Cantidad: 1
        }],
        Fecha_factura: new Date("2016-01-11"),
        Cajero: 6
    },
    {
        _id_factura: 4,
        Cliente: "Tokisaki Kurumi",
        Compra: [{
            _id_animales: 15,
            Cantidad: 1
        },
        {
            _id_animales: 11,
            Cantidad: 1
        }],
        Fecha_factura: new Date("2016-04-12"),
        Cajero: 4
    },{
        _id_factura: 5,
        Cliente: "Ana Medina Molina",
        Compra: [{
            _id_animales: 15,
            Cantidad: 1
        },
        {
            _id_animales: 17,
            Cantidad: 1
        }],
        Fecha_factura: new Date("2020-12-15"),
        Cajero: 6
    },
    {
        _id_factura: 6,
        Cliente: "Artorias Caballero Perez",
        Compra: [{
            _id_animales: 2,
            Cantidad: 1
        },
        {
            _id_animales: 9,
            Cantidad: 1
        }],
        Fecha_factura: new Date("2018-03-15"),
        Cajero: 4
    },
    {
        _id_factura: 7,
        Cliente: "Bernardo Sotogrande Almendor",
        Compra: [{
            _id_animales: 11,
            Cantidad: 1
        },
        {
            _id_animales: 12,
            Cantidad: 1
        }],
        Fecha_factura: new Date("2019-08-27"),
        Cajero: 4
    },
    {
        _id_factura: 8,
        Cliente: "Tokisaki Kurumi",
        Compra: [{
            _id_animales: 18,
            Cantidad: 2
        },
        {
            _id_animales: 20,
            Cantidad: 1
        }],
        Fecha_factura: new Date("2017-01-16"),
        Cajero: 6
    },
    {
        _id_factura: 9,
        Cliente: "Felipe Belazquez Isoria",
        Compra: [{
            _id_animales: 25,
            Cantidad: 2
        },
        {
            _id_animales: 26,
            Cantidad: 2
        },{
            _id_animales: 27,
            Cantidad: 1
        }],
        Fecha_factura: new Date("2019-03-6"),
        Cajero: 6
    },
    {
        _id_factura: 10,
        Cliente: "Ricardo Entrena Quiles",
        Compra: [{
            _id_animales: 25,
            Cantidad: 1
        },
        {
            _id_animales: 16,
            Cantidad: 1
        },{
            _id_animales: 6,
            Cantidad: 1
        }],
        Fecha_factura: new Date("2019-11-10"),
        Cajero: 4
    },
    {
        _id_factura: 11,
        Cliente: "Ana Medina Molina",
        Compra: [{
            _id_animales: 1,
            Cantidad: 1
        },
        {
            _id_animales: 2,
            Cantidad: 1
        },{
            _id_animales: 12,
            Cantidad: 1
        }, 
        {
            _id_animales: 20,
            Cantidad: 1
        }],
        Fecha_factura: new Date("2020-03-3"),
        Cajero: 4
    },
    {
        _id_factura: 12,
        Cliente: "Ruben Mirafloeres Benitez",
        Compra: [{
            _id_animales: 3,
            Cantidad: 1
        },
        {
            _id_animales: 8,
            Cantidad: 1
        },
        {
            _id_animales: 10,
            Cantidad: 1
        }],
        Fecha_factura: new Date("2020-12-24"),
        Cajero: 6
    },
    {
        _id_factura: 13,
        Cliente: "Tokisaki Kurumi",
        Compra: [{
            _id_animales: 5,
            Cantidad: 1
        },
        {
            _id_animales: 10,
            Cantidad: 1
        }],
        Fecha_factura: new Date("2021-01-23"),
        Cajero: 6
    },
    {
        _id_factura: 14,
        Cliente: "Jesica Cruz Romero",
        Compra: [{
            _id_animales: 2,
            Cantidad: 2
        },
        {
            _id_animales: 28,
            Cantidad: 6
        }],
        Fecha_factura: new Date("2021-02-01"),
        Cajero: 6
    },
    {
        _id_factura: 15,
        Cliente: "Manuel Rojas Esquina",
        Compra: [{
            _id_animales: 19,
            Cantidad: 3
        }],
        Fecha_factura: new Date("2017-01-16"),
        Cajero: 4
    },
])