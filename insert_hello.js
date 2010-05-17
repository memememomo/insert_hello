function getItem(key) { return getStorage().getItem(key); }
function setItem(key, map) { return getStorage().setItem(key, map); }
function removeItem(key) { return getStorage().removeItem(key); }
function getStorage() { return window.localStorage; }


chrome.extension.sendRequest({"action": "getName"}, function(response) {
			   var name = response;
			   if (name == '' || name == null) {
			       name = 'guest';
			   }
			   var hello = document.createElement('div');
			   hello.innerText = "Hello, " + name;
		           var d = document.getElementsByTagName('body')[0];
		           var dp = d.parentNode;		 
			   dp.insertBefore(hello, d);	
		       });
