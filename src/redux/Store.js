import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import sociosData from "../csvjson.json";
import { GET_MEMBERS, GET_MEMBERS_RACING, GET_MEMBERS_UNIVERSITARIOS_CASADOS_EDAD, GET_OCURRENCES_NAME_RIVER, GET_DATA_TEAM } from "./Actions"
// *********************************************************************************************************
const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

// *********************************************************************************************************
// Store
export const store = createStore(
  reducer, { 
              members: [],
              dataRacing: {size: 0, sumAge: 0, average: 0},
              universitariosCasadosEdad: [],
              ocurrencesNameRiver: {},
              dataTeam: {}
            },
            applyMiddleware(logger, thunk),
            // window.devToolsExtension && window.devToolsExtension()
);
// Reducer
export default function reducer(state, action) {
    switch (action.type) {

        case 'GET_DATA_TEAM':
        return {
            ...state,
            dataTeam : state.members
                            .reduce((acc, currentMember) => {
                                const equipo = currentMember.equipo;
                                const counter = acc[equipo] ? acc[equipo].counter + 1 : 1;
                                const sumAge = acc[equipo] ? acc[equipo].sumAge + currentMember.edad : currentMember.edad;
                                const average = sumAge / counter
                                return { ...acc, [equipo]: {counter, sumAge, average } }
                                }, {})                    
        };

        case 'GET_MEMBERS_RACING':
        return {
            ...state,
            dataRacing: {
                            size: state.members.filter(member => member.equipo === action.payload).length,
                            sumAge: state.members.reduce((acum, member) => member.equipo === action.payload ? acum + member.edad : acum + 0, 0),
                            average: state.members.reduce((acum, member) => member.equipo === action.payload ? acum + member.edad : acum + 0, 0) 
                                        / 
                                    state.members.filter(member => member.equipo === action.payload).length
                        }
        };
        
        case 'GET_MEMBERS':
        return {
            ...state,
            members: action.payload
        };

        case 'GET_MEMBERS_UNIVERSITARIOS_CASADOS_EDAD':
        return {
            ...state,
            universitariosCasadosEdad : state.members
                                        .filter((member, i) => 
                                            member.estudios === action.payload.estudios && member.estado === action.payload.estado)
                                        .slice(0,100)
                                        .sort((a, b) => (a.edad - b.edad))
        };

        case 'GET_OCURRENCES_NAME_RIVER':
        return {
            ...state,
            ocurrencesNameRiver : state.members
                                    .filter((member, i) => member.equipo === action.payload)
                                    .reduce((acc, currentMember) => {
                                        const name = currentMember.nombre;
                                        const counter = acc[name] ? acc[name] + 1 : 1
                                        return { ...acc, [name]: counter }
                                        }, {})
                                    
        };

        default:
        return state;
    }
}

// *********************************************************************************************************
// Actions

export const getMembersAction = () => {
    return dispatch => {
        dispatch({
            type: GET_MEMBERS,
            payload: sociosData
        })
  };
}

export const getMembersRacing = () => {
    return dispatch => {
        dispatch({
            type: GET_MEMBERS_RACING,
            payload: "Racing"
        })
  };
}

export const getUniversitariosCasadosEdad = () => {
    return dispatch => {
        dispatch({
            type: GET_MEMBERS_UNIVERSITARIOS_CASADOS_EDAD,
            payload: {estudios: "Universitario", estado: "Casado"}
        })
  };
}

export const getOcurrencesNameRiver = () => {
    return dispatch => {
        dispatch({
            type: GET_OCURRENCES_NAME_RIVER,
            payload: "River"
        })
  };
}

export const getDataTeam = () => {
    return dispatch => {
        dispatch({
            type: GET_DATA_TEAM,
            // payload: "River"
        })
  };
}