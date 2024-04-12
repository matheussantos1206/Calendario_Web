# Calendario_Web


# 🚧código para construção do projeto 
## HTML
``1``°[codigo](https://github.com/matheussantos1206/Calendario_Web/blob/main/calendario.html)

![calendario](/imagens%20e%20gifs/Captura%20de%20tela%202024-04-12%20100756.png)

> 💾para uma página que exibe um calendário e algumas opções para interação. Vou explicar cada elemento e        função  presentes no código para uma documentação README:
 Calendário
A tabela &lt;table id="calendar"&gt; representa um calendário com os dias do mês atual.
# ``Elementos:``
 >&lt;tr&gt;: Define uma linha na tabela.
  &lt;th&gt;: Define uma célula de cabeçalho (primeira linha) ou uma célula de dados (outras linhas).
  &lt;td&gt;: Define uma célula de dados na tabela.

# ``Funcionalidades:``

>💾Cada célula &lt;td&gt; contém um número que representa um dia do mês.
 A classe domingo é usada para destacar os domingos na tabela.
 Opções de Interatividade
 Seleção de Cor:
 &lt;select&gt;: Cria um menu suspenso para selecionar uma cor.
 &lt;option&gt;: Define as opções disponíveis para seleção de cor.
 Seleção de Dia:
 &lt;input type="number"&gt;: Cria um campo de entrada para inserir o número do dia.
 min e max: Limitam o valor mínimo e máximo que podem ser selecionados no campo.
 Botão de Submissão:
 &lt;input type="submit"&gt;: Cria um botão de submissão para enviar os dados selecionados.
 Legenda
 A &lt;div class="legenda"&gt; exibe uma legenda para os veículos associados às cores selecionadas.

# ``Elementos:``
>💾&lt;span&gt;: Define um trecho de texto ou conteúdo em linha dentro de um bloco.
 Classes CSS:
 azul, verde, rosa, roxo: As classes CSS associadas às cores dos veículos na legenda.
# 📱css utilizado 

![css código](/imagens%20e%20gifs/Gravando%202024-04-12%20104833.gif)


# ``javascript``

![funcionalidades](/imagens%20e%20gifs/Gravando-2024-04-12-111814.gif)

## ``Variável colorCounts``
* Objetivo: Essa variável é um objeto usado para armazenar as contagens de cores selecionadas.
* Tipo: É um objeto JavaScript.
* Uso: É utilizado para controlar quantas vezes uma determinada cor foi selecionada.

# ``Função colorirDia()``
* Objetivo: Esta função é chamada quando o usuário seleciona uma cor e um dia para colorir no calendário.
* Parâmetros: Nenhum.
Retorno: Nenhum (void).
* # ``Funcionamento:``
 1 Obtém o valor do dia e da cor selecionada pelo usuário.

 2 Verifica se o número do dia é válido (não pode ser maior que 30).

 3 Calcula o índice correto para o dia selecionado no calendário.

 4 Verifica se o índice está dentro do intervalo válido de dias.

 5 Verifica se a cor selecionada já foi utilizada três vezes.

 6 Atualiza o contador da cor selecionada.

 7 Altera a cor de fundo da célula correspondente no calendário.

* Interatividade: Se ocorrerem erros durante o processo, a função exibirá alertas para informar o usuário sobre o problema.