import axios from "../custom-axios/axios";

const SubjectService = {
  // Method to get all paginated subjects
  getPaginatedSubjects: (pageNo, pageSize) => {
    return axios.get(`/subject/page/${pageNo}/${pageSize}`);
  },
  // Method to get the total subjects
  getTotalSubjects: () => {
    return axios.get(`subject/totalSubjects`);
  },
  // Method to get all subjects by ID
  getSubjectById: (id) => {
    return axios.get(`/subject/${id}`);
  },
  // Method to get all subjects by year and semester
  getAllSubjectsByYearAndSemester: (year, semester) => {
    return axios.get(`/subject/filter/semester`, {
      params: { yearId: year, semesterId: semester },
    });
  },
  // Method to get all subjects from a search query
  getAllSubjectsWithSearch: (value) => {
    return axios.get(`/subject/search`, { params: { value: value } });
  },
  // Method to add a subject
  addSubject: (form) => {
    return axios.post(`/subject/add`, form);
  },
  // Method to delete a subject
  deleteSubject: (id) => {
    return axios.get(`/subject/delete/${id}`);
  },
  // Method to get subjects filtered
  getFilteredSubjects: (semesterTypeId, yearId, moduleId, professorId) => {
    return axios.get("/subject/filter", {
      params: {
        semesterTypeId: semesterTypeId,
        yearId: yearId,
        moduleId: moduleId,
        professorId: professorId,
      },
    });
  },
};

export default SubjectService;
