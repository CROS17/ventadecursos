(function(){
	"use strict";

	var regalo = document.getElementById('regalo');

	document.addEventListener('DOMContentLoaded', function(){
		//Datos usuario
		var nombre=document.getElementById('nombre');
		var apellido=document.getElementById('apellido');
		var email=document.getElementById('email');
		//campo pases
		var pase_dia = document.getElementById('pase_dia');
		var pase_dosdias= document.getElementById('pase_dosdias');
		var pase_completo= document.getElementById('pase_completo');

		//botones y div
		var calcular = document.getElementById('calcular');
		var errorDiv = document.getElementById('error');
		var botonRegistro = document.getElementById('btnRegistro');
		var lista_productos = document.getElementById('lista-productos');
		var suma = document.getElementById('suma-total');

		//Extras
		var camisas = document.getElementById('camisa_evento');
		var etiquetas=document.getElementById('etiquetas');

		calcular.addEventListener('click', calcularMontos);

		pase_dia.addEventListener('blur', mostrarDias);
		pase_dosdias.addEventListener('blur', mostrarDias);
		pase_completo.addEventListener('blur', mostrarDias);

		nombre.addEventListener('blur', validarCampos);
		apellido.addEventListener('blur', validarCampos);
		email.addEventListener('blur', validarCampos);
		email.addEventListener('blur', validarMail);

		function validarCampos(){
			if(this.value==''){
				errorDiv.style.display='block';
				errorDiv.innerHTML="este campo es obligatorio";
				this.style.border='1px solid red';
				errorDiv.style.border='1px solid red';
			}else{
				errorDiv.style.display='none';
				this.style.border='1px solid #cccccc';
			}
		}

		function validarMail(){
			if(this.value.indexOf("@")>-1){
				errorDiv.style.display='none';
				this.style.border='1px solid #cccccc';
			}else{
				errorDiv.style.display='block';
				errorDiv.innerHTML="debe tener un @";
				this.style.border='1px solid red';
				errorDiv.style.border='1px solid red';
			}
		}

		function calcularMontos(event){
			event.preventDefault();
			//para que calcule con regalo
			if(regalo.value == ''){
				alert("Debes elegir un regalo");
				regalo.focus();
			}else{
				var boletosDia = parseInt(pase_dia.value,10)||0,
					boleto2Dias = parseInt(pase_dosdias.value,10)||0,
					boletoCompleto = parseInt(pase_completo.value,10)||0,
					cantCamisas=parseInt(camisas.value,10)||0,
					cantEtiquetas = parseInt(etiquetas.value,10)||0;

					var totalPagar = (boletosDia * 30)+(boleto2Dias*60)+(boletoCompleto*90) + ((cantCamisas*10)*.93)+(cantEtiquetas*2);

					var listadoProductos = [];

					if(boletosDia >= 1){
						listadoProductos.push(boletosDia+'Pases por dia');
					}
					if(boleto2Dias >= 1){
						listadoProductos.push(boleto2Dias+'Pases por 2 dias');						
					}
					if(boletoCompleto >= 1){
						listadoProductos.push(boletoCompleto+'Pases completos');
					}
					if(cantCamisas >= 1){
						listadoProductos.push(cantCamisas+'Camisas');
					}
					if(cantEtiquetas >= 1){
						listadoProductos.push(cantEtiquetas+'Etiquetas');						
					}

					lista_productos.style.display="block";
					lista_productos.innerHTML = '';
					for(var i=0; i<listadoProductos.lenght; i++){
						lista_productos.innerHTML += listadoProductos[i]+'<br/>'
					}

					suma.innerHTML = "$ "+ totalPagar.toFixed(2);

			}
		}

		function mostrarDias(){
			var boletosDia = parseInt(pase_dia.value,10)||0,
				boleto2Dias = parseInt(pase_dosdias.value,10)||0,
				boletoCompleto = parseInt(pase_completo.value,10)||0,

				var diasElegidos =[];
				if(boletosDia >0){
					diasElegidos.push('viernes');
				}
				if(boleto2Dias>0){
					diasElegidos.push('viernes','sabado');
				}
				if(boletoCompleto>0){
					diasElegidos.push('viernes','sabado','domingo');
				}
				for(var i=0; i<diasElegidos.lenght; i++){
					document.getElementById(diasElegidos[i].style.display='block');
				}				
		}		
	});//DOMCOntent loaded
})();


$(function(){

	$('.programa-evento .info-curso:first').show();
	$('.menu-programa a:first').addClass('activo');

	$('.menu-programa a').on('click', fucntion){
		
		$('.menu-programa a').removeClass('activo');
		$(this).addClass('activo');
		$('.ocultar').hide( );
		var enlace = $(this).attr('href');
		$(enlace).fadeIn(1000);
		return false;

	}
});