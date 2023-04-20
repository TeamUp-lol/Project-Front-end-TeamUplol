import axios from 'axios';
import { useState, useEffect } from 'react';

const useGetClanList = () => {
  const [clanList, setClanList] = useState([]);

  useEffect(() => {
    const getClanList = async () => {
      try {
        const response = await axios.get('/assets/data/Mockdata-clanlist.json');
        setClanList(response.data);
      } catch (error) {
        console.log(error);
        setClanList([]);
      }
    };
    getClanList();
  }, []);

  return clanList;
};

export default useGetClanList;
