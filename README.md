#Ajude-a

## Índice

*[1. Prefácio](#1-prefácio)
*[2. Resumo do projeto](#2-resumo-do-projeto)
*[3. Linguagem utilizada](#3-linguagem-utilizada)
*[4.Considerações Finais](#5-considerações-finais)

***

## Prefácio

A [Cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos primeiros
tipos de criptografias conhecidas na história. O imperador romano Júlio César
utilizava essa cifra para enviar ordens secretas aos seus generais no campo de
batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.
Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunição, mas a cifra de César
muitas vezes pode fazer parte de um sistema mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Resumo do Projeto

O projeto é voltado para pessoas que sofrem com relacinamento abusivos, porém não sabem identificar. Então o texto que se encontra no "Sobre" fala um pouco sobre o tema para que o usuário possa identificar que está vivendo um relaciomento abusivo, e tente sair dele. Após a leitura do texto, tem o campo onde o usário irá colocar seu nome, número de telefone da pessoa para ser seu apoio emocional, decidir qual a chave de descolamento da cifra e após a mensagem. Este receberá a mensagem cifrada, com o nome do usuário que o enviou com uma mensagem: " -username- está pedindo seu apoio neste momento para procurar ajuda e sair de um relacionamento abusivo para isso ela te mandou uma mensagem criptografada, para mante-la confidencial, que será decodificada no link enviado", a mensagem criptografada, o link do site para que o número de apoio será redirecionado e a chave do deslocamento.

O produto foi pensado de acordo com vivência de pessoas próximas, que com auxilio conseguiram sair da situação de um relacionamento abusivo e hoje conseguem viver e ajudar a outras pessoas que vivem o mesmo tipo de relacionamento.

## 3. Linguagem utilizadas

Foram utilizadas HTML 5, CSS 3 e JavaScript, sendo este separado em index.js e cipher.js, onde index.js foram colocadas as funções de botão e o cipher as funções para codificação de decodificação.

## 4. Consideraçõs Finais


