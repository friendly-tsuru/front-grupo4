import api from "./api";

const App = {
    getAllDoctor: async () =>{
        const res = await api.get('/doctor')
        const resp = await res.data;
        return resp;
    },
    postDoctor: async (data) =>{
        const res = await api.post('/doctor', data)
        const resp = await res.data;
        return resp;
    }
}