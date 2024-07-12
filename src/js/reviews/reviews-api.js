import axios from 'axios';

const URL = 'https://portfolio-js.b.goit.study/api/reviews';

export const fetchDataAndInitializeSwiper = async () => {
  try {
    const response = await axios.get(URL);

    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return response.data;
  } catch (error) {
    throw new Error(
      iziToast.error({
        message: msg,
        class: 'error-notification',
        timeout: 5000,
        titleColor: '#fff',
        position: 'topRight',
        backgroundColor: '#EF4040',
        messageColor: '#fff',
        progressBarColor: '#B51B1B',
        close: true,
      })
    )
  };
} 
 

