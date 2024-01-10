import axios from "axios";

const loginUser = async (userId) => {
  console.log('Fetching user data for userId:', userId);

  const userIdInt = parseInt(userId, 10);
  try {
    const response = await axios.get(`https://globaleducomm.com/api/users/user/${userIdInt}`);
    console.log('User data fetched successfully:', response.data);
    return response.data;
  } catch (error) {
    console.log('Error fetching user data:', error);
    throw new Error('Failed to fetch user data');
  }
};


export default loginUser;



