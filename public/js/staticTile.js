var baseURL = 'http://localhost:3000/static/images/tiles/';

exports.map = function(name) {
	return baseURL + name + '.png';
}