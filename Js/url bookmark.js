function SetUrlBookmark(value)
{
	location.replace(location.href.split('#')[0] + '#' + value);
};

function GetUrlBookmark()
{
	var urlParts = location.href.split('#');	
	return urlParts.length == 1 ? "" : urlParts[1];
};