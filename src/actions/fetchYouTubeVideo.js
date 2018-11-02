// possible delete??

// dependencies
import axios from "axios";
import YTSearch from 'youtube-api-search';

// user files
import { FETCH_VIDEO } from '../constants';
import { API_KEY } from '../config.js';

const search = YTSearch({key: API_KEY, term: 'carbon footprint and climate change'}, (returnedSearchData) => {
  console.log(returnedSearchData[0]);
})

export const fetchVideo = () => {


  const request = axios.get(search);

  console.log('Youtube Request: ', search);

  return {
    type: FETCH_VIDEO,
    payload: search
  };
}
