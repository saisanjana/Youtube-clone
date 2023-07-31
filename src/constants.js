export const API_KEY = 'AIzaSyDJc2X7iUGoVAFb9bbtqry_V8U5LOiPChk'
export const LIST_VIDEOS_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key='+API_KEY
export const SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
export const LIST_VIDEOS_BY_QUERY_API = `https://www.googleapis.com/youtube/v3/search?regionCode=IN&part=snippet&maxResults=50&key=${API_KEY}&q=`