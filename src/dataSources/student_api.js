const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require("../server");

class StudentAPI extends RESTDataSource {

    constructor(){
        super();
        this.baseURL = serverConfig.student_api_url;
    }

    async getStundentById(id){
        this.get(`/alumnos/${id}`);
    }

}

module.exports = StudentAPI;
