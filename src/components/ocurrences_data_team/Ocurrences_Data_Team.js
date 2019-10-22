import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataTeam } from '../../redux/Store';

function Ocurrences_Data_Team() {

    // Un listado, ordenado de mayor a menor según la cantidad de
    // socios, que enumere, junto con cada equipo, el promedio de edad de sus socios, 
    // la menor edad registrada y la mayor edad registrada.
    var jsonDataTeam = useSelector(state => state.dataTeam);
    const[members, setMembers] = useState([])
    const dispatch = useDispatch();

    const getDataTeam2 = () => {
        dispatch(getDataTeam())
        var array = []
        for (var i in jsonDataTeam) {
            const elemento = 
                    {
                        nombre: i, 
                        cantidad: jsonDataTeam[i].counter, 
                        sumaEdad: jsonDataTeam[i].sumAge,
                        average: jsonDataTeam[i].average
                    }
            array.push(elemento)
        }
        setMembers(array)

    }
    
    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={() => getDataTeam2()}>Data For Team</button>
            <hr/>
                {
                    members.map((member, i) => {
                        return(
                            <div key={i}>
                                Equipo: {member.nombre} - Socios: {member.cantidad} - Promedio Edad {member.average}
                            </div>
                        )
                    })
                }
        </div>
    )
}

export default Ocurrences_Data_Team
