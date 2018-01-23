var table = document.getElementById('star_table');
var stars = table.getElementsByTagName('img');
var url = '/collaboration';
var params;
var id;
var status;

table.onclick = function(event) {
	
  if(event.target.tagName !== 'IMG') return;
    for(var i = 0; i<100; i++){
      if(event.target === stars[i]){
      id = i;
      el = event.target;
      }
    }
     if(el.getAttribute('SRC') === "star_off.gif"){
     	console.log(event.target.getAttribute('scr'));
      status = 1;
     }
       else {
         status = 0;
       }
   params = url+'?n='+id+'&s='+status;
   var xhr = new XMLHttpRequest();
	xhr.open('GET', params, true);
	console.log(params);
	xhr.send();
	console.log(xhr);
	xhr.onreadystatechange = function() {
  	  if (this.readyState != 4) return;
	  if (this.status != 200) {
	    alert( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался'));
	    return;
	  }
	  console.log(xhr.responseText[id]);
	  if(xhr.responseText[id] == 0){
	  	el.setAttribute ("src", "star_on.gif");
	  }
	  if(xhr.responseText[id] == 1){
	  	el.setAttribute ("src", "star_off.gif");
	  }
  }
  
}

