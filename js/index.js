var name;
function getname(){
	var form = document.getElementById('name');
	name = form.value;
	var url = "js/main.html"+"?"+"name="+(encodeURI(name));
	location.assign(url);
}


