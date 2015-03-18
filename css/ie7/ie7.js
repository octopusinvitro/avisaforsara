/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'avisaforsara\'">' + entity + '</span>' + html;
	}
	var icons = {
		'im-quotes': '&#x22;',
		'im-office': '&#xe600;',
		'im-profile': '&#xe601;',
		'im-file': '&#xe605;',
		'im-file2': '&#xe606;',
		'im-phone': '&#xe607;',
		'im-screen': '&#x78;',
		'im-airplane': '&#xe602;',
		'im-happy': '&#xe603;',
		'im-sad': '&#xe604;',
		'im-angry': '&#xe609;',
		'im-wondering': '&#xe60a;',
		'im-question': '&#xe60b;',
		'im-close': '&#xe60c;',
		'im-arrow-right': '&#xe60d;',
		'im-tab': '&#xe608;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/im-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
