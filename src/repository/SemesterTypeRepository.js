import axios from "../custom-axios/axios";

const SemesterTypeService = {
  // Method to get all semestar types
  getAllSemesterTypes: () => {
    return axios.get(`/semester/type/all`);
  },
  // Method to get a specific semester
  getSemesterType: (index) => {
    return axios.get(`/semester/type/${index}`);
  },
};

export default SemesterTypeService;
