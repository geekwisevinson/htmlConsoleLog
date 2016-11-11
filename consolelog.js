if (typeof console != "undefined") {
	if(typeof console.log != 'undefined'){ console.olog = console.log;} else {console.olog = function() {
	};}

	console.log = (function(old_function, div_log) {
		return function(text) {
			old_function(text);

			var ttext = text;

			if(typeof text == "string") {
				if(ttext.indexOf("erRoR") == 0) {
					ttext = '<span style="color:red">' + ttext.substr(5) + '</span>';
				}else{
					ttext = '<span style="color:blue">' + ttext + '</span>';
				}

			}else{

				ttext = '<span style="color:blue">' + ttext + '</span>';

			}

			div_log.innerHTML += ttext + "<hr/>";
		};
	}(console.log.bind(console), document.getElementById("error-log")));


}