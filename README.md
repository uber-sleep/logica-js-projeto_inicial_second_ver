# Documentação do Jogo do Número Secreto

## Variáveis Globais
- `secretNumberArray`: Um array vazio utilizado para armazenar os números secretos já escolhidos.
- `arrayLimitNumber`: Limite máximo para a escolha de números secretos.
- `elementHTML`: Função que recebe uma tag HTML e um texto, seleciona o elemento correspondente e define o seu conteúdo como o texto fornecido.

## Inicialização
- `secretNumber`: Armazena o número secreto gerado aleatoriamente.
- `index`: Contador de tentativas, inicializado em 1.

- ## Função `loader()`
    - Função de inicialização que exibe o título e instruções do jogo.

## Função `randomNumber()`
- Gera um número aleatório dentro do limite especificado.
- Limpa o array `secretNumberArray` se atingir o limite.
- Evita repetição de números secretos.

## Função `checkGuess()`
- Verifica a tentativa do usuário em relação ao número secreto.
- Se a suposição for correta, exibe uma mensagem de vitória e habilita o botão de reiniciar.
- Se a suposição for incorreta, fornece pistas sobre se o número secreto é maior ou menor, incrementa o índice de tentativas e limpa o input.

## Função `reloader()`
- Reinicia o jogo gerando um novo número secreto, redefinindo o índice de tentativas e reexibindo as instruções.
- Desabilita o botão de reiniciar.

## Função `inputClear()`
- Limpa o campo de input após cada tentativa.

**Observações:**
- O código utiliza recursos do DOM para manipulação da interface do usuário.
- O código possui duas funções onclick (`checkGuess` e `reloader`) associadas a elementos HTML.
