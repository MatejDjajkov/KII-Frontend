import axios from "../custom-axios/axios";

const ProfessorService = {
    getAllProfessors: () => {
        return axios.get(`professor/all`)
    }
}

export default ProfessorService
