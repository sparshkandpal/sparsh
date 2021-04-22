import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi',
  params: {
    q: '{query}-!{syear},{eyear}-!{snfrate},{enfrate}-!{simdbrate},{eimdbrate}-!{genreid}-!{vtype}-!{audio}-!{subtitle}-!{imdbvotes}-!{downloadable}',
    t: 'ns',
    cl: '{clist}',
    st: 'adv',
    ob: '{sortby}',
    p: '{page}',
    sa: '{andor}'
  },
  headers: {
    'x-rapidapi-key': '30fbbc1001msh55aaa9e1828ec94p1be749jsn195c14fe5c37',
    'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});