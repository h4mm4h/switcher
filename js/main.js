;(function() {
	"use strict";


	var parent = document.getElementById('ba-body');
	var input = document.getElementById('ba-input');
	var view = document.getElementById('ba-view');
	var activeClass = 'active';

	function handleView(e){
	  // ctrl + e
	  if (e.ctrlKey && e.keyCode === 69)  showEditor();
	  // ctrl + s
	  if (e.ctrlKey && e.keyCode === 83) saveInputText();
	  // esc
	  if (e.keyCode === 27) exitEditor();
	}

	function saveInputText() {
	  parent.classList.remove(activeClass);
	  view.innerHTML = input.value;
	}

	function showEditor() {
	  parent.classList.add(activeClass);
	  input.value = view.innerHTML;
	}

	function exitEditor() {
	  parent.classList.remove(activeClass);
	}


	document.addEventListener('keydown', handleView, function(event){
		event.preventDefault();
	} );



})();

