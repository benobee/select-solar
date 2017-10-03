import module from "./src/modules/module";
import modernizr from "./src/modernizr/modernizr";

//build the site object
class Site_Build {
	constructor() {
		this.module = module;

		this.init();
	}
	init () {
		this.module.init();
	}
}

const Site = new Site_Build();