// page to deploy rest API
import axios from "axios";

// connect 
const FRIES_API_BASE_URL= "http://localhost:8082/api/fries";

class FriesService {

    // create getFries method to call upon the API using axios: 
    getFries(){
        return axios.get(FRIES_API_BASE_URL);
    }

}

// exporting an object of this class: 
export default new FriesService;