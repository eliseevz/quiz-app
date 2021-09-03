import axios from "axios";

export default axios.create({
    baseURL: "https://react-quiz-23700-default-rtdb.europe-west1.firebasedatabase.app"
})