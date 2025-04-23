import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return res.data;
};

const useFetchData = () => {
  return useQuery({
    queryKey: ['posts'],       
    queryFn: fetchPosts,
    refetchOnWindowFocus: false, 
  });
};

export default useFetchData;
