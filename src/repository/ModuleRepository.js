import axios from "../custom-axios/axios";

const ModuleService = {
    getAllModules: () => {
        return axios.get(`module/all`)
    }
}

export default ModuleService
