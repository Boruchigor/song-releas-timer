import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
	  adapter: adapter(),
	  paths: {
		assets: '',
		base: '',
	  }
	}
  };  

export default config;
