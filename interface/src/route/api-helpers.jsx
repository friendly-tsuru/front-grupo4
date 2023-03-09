import api from "../database/api";

export const App = {
    postDoctor: async (register) =>{
        const res = await api.post('/doctor', register)
        const resp = await res.data;
        console.log(res)
        return resp;
    }
}