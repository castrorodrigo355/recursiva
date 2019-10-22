import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMembersAction } from '../../redux/Store';

function Members() {

    var members = useSelector(state => state.members);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getMembersAction())
    }, []);

    // Cantidad total de personas registradas
    const getCantidadSocios = () => {
        console.log(members.length)
    }

    return (
        <div>
            <button onClick={() => getCantidadSocios()} type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Cantidad</button>
            
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Size members list</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {members.length}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                        </div>
                    </div>
                </div>
            </div>

            {
                members.map((s, i) => {
                    return(
                        <div key={i}>
                        {s.nombre} - {s.edad} - {s.equipo} - {s.estado} - {s.estudios}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Members
