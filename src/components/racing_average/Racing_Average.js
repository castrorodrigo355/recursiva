import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMembersRacing /* , deleteStudentAction, updateStudentAction */ } from '../../redux/Store';

function Racing_Average() {

    var members = useSelector(state => state.dataRacing);
    const[dataRacing, setMembersRacing] = useState(0)
    const dispatch = useDispatch();

    // El promedio de edad de los socios de Racing
    async function getRacingSocios(){
        await dispatch(getMembersRacing())
        setMembersRacing(members)
    }

    return (
        <div>
            <button onClick={() => getRacingSocios()} type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Racing</button>
            
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
                            Cantidad: {dataRacing.size} / Age: {dataRacing.sumAge} / Promedio: {dataRacing.average}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Racing_Average
