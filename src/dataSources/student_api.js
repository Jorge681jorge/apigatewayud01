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


    async createStudents(s){
        s = new Object(JSON.parse(JSON.stringify(s)));
        return await this.post('/alumnos/', s);
    }

    async deleteStudentByID(id){
        return await this.delete(`/alumnos/${id}`);
    }

    /*async updateStudent(s){
        s = new Object(JSON.parse(JSON.stringify(s)));
        return await this.patch(`/alumnos/${s.id}`, s);
    }*/
}

module.exports = StudentAPI;
