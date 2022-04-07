const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require("../server");

class StudentAPI extends RESTDataSource {

    constructor(){
        super();
        this.baseURL = serverConfig.student_api_url;
    }

    async getStudentById(id){
        return await this.get(`/alumnos/${id}`);
    }

    async allStudents(){
        return await this.get(`/alumnos`)
    }
}

module.exports = StudentAPI;
