import axios from "../custom-axios/axios";

// Defining a module called FileService
const FileService = {

    // Method to upload a file
    uploadFile: (id, files) => {
        return axios.post(`/file/${id}`, files); // Making an HTTP POST request to '/file/{id}' endpoint
    },

    // Method to find files
    findFiles: (id) => {
        return axios.get(`/file/${id}`); // Making an HTTP GET request to '/file/{id}' endpoint
    },

    // Method to delete a file
    deleteFile: (id) => {
        return axios.delete(`/file/${id}`); // Making an HTTP DELETE request to '/file/{id}' endpoint
    },

    // Method to get a file
    getFile: (id) => {
        return axios.get(`/file/get/${id}`); // Making an HTTP GET request to '/file/get/{id}' endpoint
    },

    approveFile:(id)=>{
        return axios.get(`/file/approve/${id}`)
    },

    declineFile:(id)=>{
        return axios.get(`/file/decline/${id}`)
    },
    // Method to download a file
    downloadFile: (id) => {
        return axios.get(`/file/downloadFile/${id}`, {
            headers: {
                "Content-disposition": "attachment; filename=response; charset=UTF-8",
            },
            responseType: 'blob'
        }); // Making an HTTP GET request to '/file/downloadFile/{id}' endpoint with specific headers and response type
    },

    // Method to get pending files
    getPendingFiles: (id) => {
        return axios.get(`/file/pending`); // Making an HTTP GET request to '/file/pending' endpoint
    },
};

// Exporting the FileService module as the default export
export default FileService;
