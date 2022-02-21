var caixaDeEntrada=document.querySelector("#input-texto");
var botaoCriptografar=document.querySelector("#btn-cripto");
var caixaDeSaida=document.querySelector("#msg");
var botaoCopiar=document.querySelector("#btn-copy");
var botaoDescriptografar=document.querySelector("#btn-descripto");
var teste=false;

botaoCriptografar.onclick=mostraMensagemCriptografada;

botaoCopiar.onclick=copiaMensagemCriptografada;

botaoDescriptografar.onclick=mostraMensagemDescriptografada;

function validaMensagem(mensagem){
	if(mensagem.match(/[^a-z ]/g)){
		teste=true;
	}else{
		teste=false;
	}
	return teste;
}

function mostraMensagemCriptografada(event){
	event.preventDefault();
	teste=validaMensagem(caixaDeEntrada.value);
	if(teste==true){
		alert("Apenas letras minúsculas, sem caracteres especiais ou números");
	}else{
	caixaDeSaida.value=criptografa(caixaDeEntrada.value);
	}
}

function copiaMensagemCriptografada(){
	caixaDeSaida.select();
	document.execCommand("copy");
	caixaDeSaida.value="";
	caixaDeEntrada.value="";
}

function mostraMensagemDescriptografada(event){
	event.preventDefault();
	caixaDeSaida.value=descriptografa(caixaDeEntrada.value);
}

function criptografa(mensagem){
	var mensagemCriptografada=[];
	for(var i=0;i<mensagem.length;i++){
		if(mensagem[i]=="e"){
			mensagemCriptografada[i]="enter";
		}else if(mensagem[i]=="i"){
			mensagemCriptografada[i]="imes";
		}else if(mensagem[i]=="a"){
			mensagemCriptografada[i]="ai";
		}else if(mensagem[i]=="o"){
			mensagemCriptografada[i]="ober";
		}else if(mensagem[i]=="u"){
			mensagemCriptografada[i]="ufat";
		}
		else{
			mensagemCriptografada[i]=mensagem[i];
		}
	}
	return mensagemCriptografada.join("");
}

function descriptografa(mensagem){
		var mensagemDescriptografada=
		mensagem.replace(/enter/g,"e")
		.replace(/imes/g,"i")
		.replace(/ai/g,"a")
		.replace(/ober/g,"o")
		.replace(/ufat/g,"u");
		return mensagemDescriptografada;
}

/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/