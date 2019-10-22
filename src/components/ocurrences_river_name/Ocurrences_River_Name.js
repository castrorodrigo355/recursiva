import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOcurrencesNameRiver } from '../../redux/Store';

function Ocurrences_River_Name() {

    // Un listado con los 5 nombres más 
    // comunes entre los hinchas de River
    var jsonRiverName = useSelector(state => state.ocurrencesNameRiver);
    const[members, setMembers] = useState([])
    const dispatch = useDispatch();

    const getOcurrencesNamesRiver2 = () => {
        dispatch(getOcurrencesNameRiver())
        var array = []
        for (var i in jsonRiverName) {
            const elemento = {nombre: i, cantidad: jsonRiverName[i]}
            array.push(elemento)
        }
        setMembers(array.sort((a, b) => (b.cantidad - a.cantidad)))
    }
    return (
        <div>
            <hr/>
            <button type="button" className="btn btn-primary" onClick={() => getOcurrencesNamesRiver2()}>Nombres River</button>
            {
                members.map((member, i) => {
                    return(
                        <div key={i}>
                            {member.nombre} - {member.cantidad}
                        </div>
                    )
                })
            }
            <hr/>
            LOS 5 MAS UTILIZADOS SON:
            {
                members.slice(0, 5).map((member, i) => {
                    return(
                        <div key={i}>
                            {member.nombre} - {member.cantidad}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Ocurrences_River_Name
