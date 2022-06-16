import axios from 'axios';

async function getUser() {
    try {
        const response = await axios.get('https://62aa3cf53b31438554448672.mockapi.io/users');
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}

getUser();