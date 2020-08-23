import axios from 'axios';
import cheerio from 'cheerio';

const getHtml = async () => {
	try {
		return await axios.get('https://www.google.co.kr');
	} catch (error) {
		console.error(error);
	}
};

const getGoolgeLogoUrl = async () => {
	let html = await getHtml();
	const $ = cheerio.load(html.data);
	return 'https://www.google.co.kr' + $('img')[0]['attribs']['src'];
};

getGoolgeLogoUrl().then((res) => console.log(res));
