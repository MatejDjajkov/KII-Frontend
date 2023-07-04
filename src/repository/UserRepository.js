import axios from "../custom-axios/axios";

const UserService = {
  // Method to log in a user, by making a post request
  login: (request) => {
    return axios.post(
      `/rest/user/login`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + request,
        },
      }
    );
  },
  // Method to register/save a new user
  register: (email, password, body) => {
    return axios.post(`/user/register`, body, {
      headers: {
        email: email,
        password: password,
      },
    });
  },
  // Method to logout a user
  logout: () => {
    return axios.get(`/user/logout`);
  },
  // Methot to get all the details about a user
  userDetails: () => {
    return axios.get(`/user/details`);
  },
  // Methot to get all the favourite subjects for a given student
  takeFavoriteSubjects: (id) => {
    return axios.get(`/user/${id}/subjects`);
  },
  // Method to add a new favourite subject for a given student
  addFavoriteSubject: (sId, uId) => {
    return axios.get(`/user/takeSubject`, {
      params: { userId: uId, subjectId: sId },
    });
  },
  // Method to remove a favourite subject for a given student
  removeFavoriteSubject: (uId, sId) => {
    return axios.get(`/user/removeSubject`, {
      params: { userId: uId, subjectId: sId },
    });
  },
};

export default UserService;
