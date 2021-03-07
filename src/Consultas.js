/*Una asociación de perros para el apoyo emocional dedea saber que perros tenemos en tienda disponibles*/

db.animales.aggregate([
    { $match: { Especie: "Perro", Disponible: true } },
    {
        $project: {
            _id: 0,
            id: "$_id_animales",
            Especie: "$Especie",
            Raza: "$Raza",
            Disponibilidad: "$Disponible",
            Precio: "$Precio"            
        }
    }
]).pretty()

/*Ahora queremos solventar la escasez de algunos de nuestros animales con nuestro proveedor, 
por lo que le mandaremos un listado de los animales que nos faltan*/

db.animales.aggregate([
    { $match: { Disponible: false } },
    {
        $group: {
            _id: {
                Raza: "$Raza",
                Animal: "$Especie"
            }
        }
    }
]).pretty()
/*Para gestionar mejor los horarios de los trabajadores queremos saber que trabajadores trabajan el viernes,
para prevenir y hablar con ellos del blackfriday y como se va a gestionar*/

db.trabajador.aggregate([
    {
        $match: {
            Horario: "Viernes"
        }
    },
    {
        $project: {
            _id: 0,
            Nombre: "$Nombre",
            Apellidos: "$Apellidos",
            Horario: "$Horario"
        }
    }
]).pretty()
/*Queremos saber que animales han comprado cada cliente a lo largo de la historia de la tienda*/

db.facturas.aggregate([
    {
        $lookup: {
            from: "animales",
            localField: "Compra._id_animales",
            foreignField: "_id_animales",
            as: "Detalles del animal"
        }
    },
    {
        $project: {
            _id: 0,
            Cliente: "$Cliente",
            Detalles: "$Detalles del animal"
        }
    }
]).pretty()
/*Nos gustaria saber que clientes han comprado en la tienda antes de que llegase el confinamiento en España*/

db.facturas.aggregate([
    {
        $match: {
            "Fecha_factura": { $lt: new Date("2020-03-15") }
        }
    },
    {
        $group: {
            _id: {
                Cliente: "$Cliente",
                dia: { $dayOfMonth: "$Fecha_factura" },
                mes: { $month: "$Fecha_factura" },
                año: { $year: "$Fecha_factura" },
            },
        }
    },
    {
        $project: {
            _id: 1,
            Cliente: "$Cliente",
            Año: "$año",
            Mes: "$mes",
            Día: "$dia"
        }
    }
]).pretty()
/*Queremos una media de los sueldos que se ganan en los puestos de trabajo de nuestra empresa,
ya que nos lo solicita el Instituto Nacional de Estadística (INE)*/

db.trabajador.aggregate([
    {
        $group: {
            _id: { Puesto: "$Puesto" },
            Media_Sueldo: { $avg: "$Sueldo" }
        }
    }
]).pretty()
/*En este apartado queremos ver las ventas que corresponden a cada cajero*/
db.trabajador.aggregate([
    {
        $match: {
            Puesto: "Cajero"

        }
    },
    {
        $lookup: {
            from: "facturas",
            localField: "_id_empleado",
            foreignField: "Cajero",
            as: "Ha vendido"
        }
    }
]).pretty()