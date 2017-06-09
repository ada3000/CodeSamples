function PostForm(location, args, newWindow)
{
	var form = $('<form></form>');
	form.attr("method", "post");
	form.attr("action", location);

	if (newWindow)
		form.attr("target", "_blank");

	$.each( args, function( key, value ) {
		if (Array.isArray(value))
			for(var i=0;i<value.length;i++)
			{
				var field = $('<input></input>');

				field.attr("type", "hidden");
				field.attr("name", key + "[" + i + "]");
				field.attr("value", value[i]);

				form.append(field);
			}
		else
		{
			var field = $('<input></input>');

			field.attr("type", "hidden");
			field.attr("name", key);
			field.attr("value", value);

			form.append(field);
		}
	});
	$(form).appendTo('body').submit();
}