function bookSearch(){
	var search = document.getElementById('search').value
	document.getElementById('results').innerHTML = ""
	console.log(search)

	$.ajax({
		url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
		dataType: "json",

		success: function(data) {
			for(i = 0; i < data.items.length; i++){
				results.innerHTML += "<h2>" + data.items[i].volumeInfo.title + "<br>" + " Author : " + data.items[i].volumeInfo.authors + "<br>" + "Published : " + data.items[i].volumeInfo.publishedDate + "<br>" + '<img src="' + data.items[i].volumeInfo.imageLinks.smallThumbnail + '" />';  + "</h2>"
			}
		},

		type: 'GET'
	});
}

document.getElementById('button').addEventListener('click', bookSearch, false)