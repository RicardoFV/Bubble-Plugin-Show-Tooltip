function(instance, properties, context) {
	// pega o id do elemento
	let elemento = document.getElementById(properties.id)
    // guarda a posição que foi selecionada pelo o usuario
    let posicao; 
  	// define a cor da seta
    let posicao_css;
    // guarda a osição da mensagem
    let posicao_mensagem;
    // define a borda do elemento
    let borda = ''
    
    // trata a seleção das opções do elemento
    switch(properties.posicao){
        case "Topo":
            posicao = 'top';
            posicao_css = 'top';
            break;
            
        case "Rodapé":
            posicao = 'bottom';
            posicao_css = 'bottom';
            break;
                     
        case "Esquerda":
            posicao = "left";
            posicao_css = 'start';
            break;
            
        default:
            posicao = 'right';
            posicao_css = 'end';
        }
    
    // trata a seleção das opções da posição da mensagem
    switch(properties.posicao_mensagem){      
        case "Centro":
            posicao_mensagem = 'center' 
            break;
            
        case "Direita":
            posicao_mensagem = 'end'
            break;
            
        default:
            posicao_mensagem = 'start'
        }
    
    // verfiica se a borda esta marcado como sim ou não
    properties.borda == true ? borda = '1px solid rgba(0, 0, 0, .2)' : borda = 'none'
     
    // trata o tamanho da fonte e a sua opacidade
    let style = $(`<style> 
		.popover{
			font-size:${properties.tamanho_fonte_corpo}px;
			line-height: 0.1;
			text-align: ${posicao_mensagem};
			border-radius: .5rem;
			border: ${borda}
		}
		.popover-header {
			font-size:${properties.tamanho_fonte_titulo}px;
			background-color:${properties.cor_cabecalho}
		}
		.popover-body {
			background-color:${properties.cor_conteudo}
		}
		.bs-popover-auto[data-popper-placement^=${posicao_css}]>.popover-arrow::before,
		.bs-popover-${posicao_css}>.popover-arrow::after {
    		border-${posicao}-color: ${properties.cor_seta};
		}
	</style>`)
    
    // insere o estilo
    $(style).appendTo('head')
	// cria as options
    let options = {
        title :properties.titulo , 
        content : properties.mensagem,
        placement : posicao 
    }
    
    // insere no elemento o que foi configurado como ação
	let popover = new bootstrap.Popover(elemento, options)
    // seleciona a ação que sera feita
    switch(properties.acao){
        case "click": 
            	// aparece a mensagem quando o mouse é passado em cima do elemento
    			elemento.addEventListener('onClick', function(){
        		popover.show()    
    			})
            	// retira a mensagem quando o mouse é retira de cima do elemento
    			elemento.addEventListener('mouseout', function(){
        		popover.hide()    
    			})
        		break
        default :
        		// aparece a mensagem quando o mouse é passado em cima do elemento
    			elemento.addEventListener('mouseover', function(){
        		popover.show()    
        		})
    			// retira a mensagem quando o mouse é retira de cima do elemento
    			elemento.addEventListener('mouseleave', function(){
        		popover.hide()    
    			})
    	}    
}