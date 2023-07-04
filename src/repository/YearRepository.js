import axios from "../custom-axios/axios";

// Defining a module called YearService
const YearService = {

    // Method to get all years
    getAllYears: () => {
        return axios.get(`/year/all`); // Making an HTTP GET request to '/year/all' endpoint
    },

    // Method to get a specific year by index
    getYear: (index) => {
        return axios.get(`/year/${index}`); // Making an HTTP GET request to '/year/{index}' endpoint
    },
};

// Exporting the YearService module as the default export
export default YearService;
