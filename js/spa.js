/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : true,
  white  : true
*/
/*global $, spa:ture */

var spa = (function () {
	var initModule = function ($container) {
	/*
		$container.html(
			'<h1 style="display:inline-block; margin:25px;">'
			+ 'Hello world!'
			+ '</h1>'
			);
	*/
		console.log('spa: ' + $container.toString() );
		spa.shell.initModule( $container );
	};

	return { initModule : initModule }
}());

