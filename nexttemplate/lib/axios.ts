import Axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

const axiosInstance = Axios.create({
    withCredentials: true,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    baseURL: baseURL,
});

export const csrf = async () => {
    try {
        const response = await axiosInstance.get(baseURL + '/sanctum/csrf-cookie');
        console.log('CSRF Token Response:', response); // Log the entire response object

        // Extract CSRF token from the response headers
        const csrfToken = response.headers['XSRF-TOKEN']; // Assuming the CSRF token is returned in a header named 'XSRF-TOKEN'

        console.log('CSRF Token:', csrfToken); // Log the retrieved CSRF token

        axiosInstance.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken; // Set the CSRF token in the default headers
    } catch (error) {
        console.error('Error fetching CSRF token:', error);
    }
};


export default axiosInstance;
