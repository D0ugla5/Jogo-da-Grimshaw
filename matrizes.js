    // let alunos = [[], [], []]

    // alunos[0][0] = "Douglas"
    // alunos[0][1] = "Red"
    // alunos[1][0] = "Dead"
    // alunos[2][0] = "Gean"
        
    // for(let i=0; i < alunos.length; i++){
    //     for(let j = 0; j<alunos[i].length; j++){
    //         console.log(alunos[i][j])
    //     }
    // }
    
       let rdr2, quebraLinha, jogada = 1;
        let tabuleiro = new Array(3);
        const tabuleiroDiv = document.getElementById('tabuleiro');

        for(let i = 0; i < tabuleiro.length; i++){
            tabuleiro[i] = new Array(3);
        }

        for(let i = 0; i < tabuleiro.length; i++){
            quebraLinha = document.createElement('br');
            tabuleiroDiv.append(quebraLinha);
            for(let j = 0; j < tabuleiro[i].length; j++){
                rdr2 = document.createElement('button');
                rdr2.setAttribute('type', 'button');
                rdr2.setAttribute('id', 'bt' + i + "" + j);
                rdr2.setAttribute('class', 'btjogo');
                rdr2.setAttribute('onclick', 'marca(' + i + ',' + j + ')');
                rdr2.append(document.createTextNode(''));
                tabuleiroDiv.append(rdr2);
            }
        }
    
        function marca(linha, coluna){
            marcarCasa('bt' + linha + '' + coluna);
        }

        function marcarCasa(nomeBotao){
            const botao = document.getElementById(nomeBotao);
            if(jogada % 2 == 0){
                botao.innerText = 'O';
                botao.classList.add('O');
            } else {
                botao.innerText = 'X';
                botao.classList.add('X');
            }
            document.getElementById(nomeBotao).disabled = true;
            jogada++;
            if(jogada >= 5){
                encerraJogo()
            }
        }
        function encerraJogo(){
            //linha 0
            if(document.getElementById("bt00").innerText == document.getElementById("bt01").innerText && document.getElementById("bt01").innerText == document.getElementById("bt02").innerText && document.getElementById("bt00").innerText != ""){
                alert("Jogo finalizado\nVencedor: " + document.getElementById("bt00").innerText)
                return(marca)
            }
            //linha 1
            if(document.getElementById("bt10").innerText == document.getElementById("bt11").innerText && document.getElementById("bt11").innerText == document.getElementById("bt12").innerText && document.getElementById("bt10").innerText != ""){
                alert("Jogo finalizado\nVencedor: " + document.getElementById("bt10").innerText)
            }
            //linha 2
            if(document.getElementById("bt20").innerText == document.getElementById("bt21").innerText && document.getElementById("bt21").innerText == document.getElementById("bt22").innerText && document.getElementById("bt20").innerText != ""){
                alert("Jogo finalizado\nVencedor: " + document.getElementById("bt20").innerText)
            }
            //coluna 0
            if(document.getElementById("bt00").innerText == document.getElementById("bt10").innerText && document.getElementById("bt10").innerText == document.getElementById("bt20").innerText && document.getElementById("bt00").innerText != ""){
                alert("Jogo finalizado\nVencedor: " + document.getElementById("bt00").innerText)
            }
                //coluna 1
            if(document.getElementById("bt01").innerText == document.getElementById("bt11").innerText && document.getElementById("bt11").innerText == document.getElementById("bt21").innerText && document.getElementById("bt01").innerText != ""){
                alert("Jogo finalizado\nVencedor: " + document.getElementById("bt01").innerText)
            }
                //coluna 2
            if(document.getElementById("bt02").innerText == document.getElementById("bt12").innerText && document.getElementById("bt12").innerText == document.getElementById("bt22").innerText && document.getElementById("bt02").innerText != ""){
                alert("Jogo finalizado\nVencedor: " + document.getElementById("bt02").innerText)
            }
                //diogonal 0
            if(document.getElementById("bt00").innerText == document.getElementById("bt11").innerText && document.getElementById("bt11").innerText == document.getElementById("bt22").innerText && document.getElementById("bt00").innerText != ""){
                alert("Jogo finalizado\nVencedor: " + document.getElementById("bt00").innerText)
            }
                //diagonal 1
            if(document.getElementById("bt02").innerText == document.getElementById("bt11").innerText && document.getElementById("bt11").innerText == document.getElementById("bt20").innerText && document.getElementById("bt02").innerText != ""){
                alert("Jogo finalizado\nVencedor: " + document.getElementById("bt02").innerText)
            }
        }