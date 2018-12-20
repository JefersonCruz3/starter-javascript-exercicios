var idade = document.querySelector('#textIdade');
var buttonElement = document.querySelector('#buttonEnviar');

buttonElement.onclick = function (){
	function checaIdade(idade) {
 		return new Promise(function(resolve, reject) {
    		setTimeout(function() {
      			return idade >= 18 ? resolve() : reject();
    		}, 2000);
  		});
	}
	checaIdade(idade.value)
	  .then(function() {
	    console.log("Maior ou igual a 18");
	  })
	  .catch(function() {
	    console.log("Menor que 18");
  	});
}
