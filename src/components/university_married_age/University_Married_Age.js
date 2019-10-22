import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUniversitariosCasadosEdad } from '../../redux/Store';

function University_Married_Age() {

    var universitariosCasadosEdad = useSelector(state => state.universitariosCasadosEdad);
    // const[members, setMembersRacing] = useState([])
    const dispatch = useDispatch();
    // Un listado con las 100 primeras personas casadas, con estudios
    // Universitarios, ordenadas de menor a mayor según su edad. Por
    // cada persona, mostrar: nombre, edad y equipo.
    const getUniversitariosCasadosEdad2 = () => {
        dispatch(getUniversitariosCasadosEdad())
    }
    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={() => getUniversitariosCasadosEdad2()}>Universitarios Casados Edad</button>
            {
                universitariosCasadosEdad.map((member, i) => {
                    return(
                        <div key={i}>
                            {member.nombre} - {member.edad} - {member.equipo}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default University_Married_Age
