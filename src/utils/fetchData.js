export const exerciseOptions   = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '86d2b5d777msh59861b14afa885ep1393f2jsn965e38fa8f0a',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };

export const youtubeOptions = {
    method: 'GET',
  
    headers: {
      'x-rapidapi-key': '86d2b5d777msh59861b14afa885ep1393f2jsn965e38fa8f0a',
      'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) =>{
    const response = await fetch(url, options);
    const data = await response.json();

    return data
}