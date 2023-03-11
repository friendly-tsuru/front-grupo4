import api from "../database/api";

export const App = {
    //Prof não vai ter getAll por que o doutor não pode ver os outros doutores
    getIdDoctor: async(id) => {
      const res = await api.get(`/doctor/${id}`)
      const resp = await res.data;
      return resp;
    },
    postDoctor: async (register) =>{
        const res = await api.post('/doctor', register)
        const resp = await res.data;
        return resp;
    },
    putDoctor : async(id,register) => {
        const res = await api.put(`/doctor/${id}`, register)
        const resp = await res.data;
        console.log(res)
        return resp;
    },
    deleteDoctor: async (id) => {
        const res = await api.delete(`/doctor/${id}`);
        const resp = await res.data;
        return resp;
    },
}