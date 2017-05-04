function UploadFile(file, url)
{
	url = url || '/File/Upload';

	if (window.FormData !== undefined)
	{
		var data = new FormData();
		data.append("file" + 0, file);

		return $.ajax({
			type: "POST",
			url: url,
			contentType: false,
			processData: false,
			data: data
		});
	}
	else
	{
		var result = new $.Deferred();
		result.reject("Browser doesnt' support HTML5 file upload!");

		return result;
	}
};