import SetModal from 'components/Modal/SetModal'
import React, {useState} from 'react'

const Contact = () => {
    const datos = [
        {
          documento: 100202033,
          tipoDocumento: "CC",
          nombre: "sebastian",
          apellido: "alvarez",
          celular: "32233322",
          descripcion: "hola mundo",
          totalVentas: 1000,
          estado: "activo",
        },
        {
          documento: 100202033,
          tipoDocumento: "CC",
          nombre: "sebastian",
          apellido: "Perez",
          celular: "322354322",
          descripcion: "Soy grande",
          totalVentas: 1000,
          estado: "activo",
        },
      ];

      const [data, setData] = useState(datos)



    return (
        <>
        <div>
            <h1 className="text-3xl text-red-500">Soy el Contact</h1>

            <br/>
            <br/>
            <SetModal Nombre="Contact"/>
        </div>

        <div className="col flex-auto">
            {
                data.map((datos, i) =>{
                    return(
                    <div className="flex row-span-1 mx-2">
                        <div className="mx-2">
                            {i}
                        </div>
                        <div>
                            {datos.documento}
                        </div>
                        <div className="mx-2">{datos.nombre}</div>
                        <div className="mx-2">{datos.apellido}</div>
                        <div className="mx-2">{datos.celular}</div>
                        <div className="mx-2">{datos.descripcion}</div>
                        <div className="mx-2">{datos.totalVentas}</div>
                        <div className="mx-2">{datos.estado}</div>
                    </div>
                )})
            }

        </div>
    </>
    )
}

export default Contact
