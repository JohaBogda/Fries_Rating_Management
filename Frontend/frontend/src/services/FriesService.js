// page to deploy rest API
import axios from "axios";

// connect 
const FRIES_API_BASE_URL= "http://localhost:8082/api/fries";

class FriesService {

    // create getFries method to call upon the API using axios: 
    getFries(){
        return axios.get(FRIES_API_BASE_URL);
    }

    // send the created fries to the rest API: 
    createFries(fries){
        return axios.post(FRIES_API_BASE_URL, fries);
    }

    getFriesById(friesId){
        return axios.get(FRIES_API_BASE_URL + "/" + friesId);
    }

    updateFries(fries,friesId){
        return axios.put(FRIES_API_BASE_URL + '/' + friesId, fries);
    }

    deleteFries(friesId){
        return axios.delete(FRIES_API_BASE_URL + "/" + friesId);
    }
}

// exporting an object of this class: 
export default new FriesService();