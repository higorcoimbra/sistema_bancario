# Sistema Simulador de Transações Bancárias

## Processo seletivo IBM 2018/2

* Autor: Higor Coimbra Amorim
* Data limite de entrega: 30/07/2018

# Execução

Vá ao diretório raiz do projeto.

Abra dois terminais, no primeiro, instale os módulos e execute o cliente com:

```sh
npm install
cd client
npm start
```

No segundo instale os módulos e execute o servidor com:

```sh
npm install
cd server/bin
nodemon server.js
```

# Características gerais

* Ambiente de desenvolvimento: **Linux**.
* Front-end desenvolvido em **React JS**.
* Back-end desenvolvido em **Node JS**.
* Banco de dados utilizado: **MongoDB**.

# Ambiente de desenvolvimento

O software foi desenvolvido utilizando o sistema operacional **Ubuntu 15.10**, editor de texto **Sublime Text 3** com testes realizados no navegador **Mozila Firefox, versão 61.0.1 (64-bit)**. Além disso, tanto o lado cliente como o lado servidor da aplicação foram executados com o auxílio do **Terminal**.

# Front-end

O front-end da aplicação foi desenvolvido utilizando o framework **React JS**. Tal framework permite a criação de **componentes JavaScript** em que se podem inserir a renderização de **elementos HTML**. As componentes mais relevantes do software desenvolvido foram:

### *Signup Form**

Componente responsável pelo requisito de **cadastro dos clientes**, contém um formulário com os campos nome, idade, endereço e número da conta associado. **É a componente principal do sistema** por proporcionar o uso adequado das outras ferramentas da aplicação.

### Extratos

Componente responsável pelo requisito de **construção do extrato bancário de um cliente**. Contém um formulário com uma entrada para o **número da conta em que se deseja obter um extrato**. Quando submetido, o formulário dispara a **exibição do extrato bancário associado**, em formato de tabela, com a **identificação do nome do cliente e o seu saldo atual**. 

Cada linha da tabela do extrato contém uma transação realizada pelo cliente consultado. Em detalhes, **para uma transação, cada linha contém as informações de: tipo, saldo anterior e posterior e data**.

### Relatórios

Componente responsável pelo requisito de **relatórios de todas as transações do dia**. Contém uma **tabela em que cada linha representa uma transação**, contendo informações de : Número de conta de um cliente, tipo de operação, saldo anterior e atual e data.

### Saldos

Componente responsável pelo requisito de **saldo da conta de todos os clientes**. Contém uma **tabela em que cada linha representa um cliente**, com informações de: número da conta, nome e saldo atual.

## Back-end

O back-end da aplicação foi desenvolvido utilizando o framework **Node JS**, fato que permitiu a **criação de um servidor** que disponibilizasse as informações necessárias a exibição das telas no front-end.

Para o **armazenamento dos dados, foi utilizado o banco de dados Mongo DB**. O acesso ao banco de dados via back-end foi feito utilizando o **módulo npm *Mongoose***.

A modularização do código do servidor foi feita seguindo o padrão MVC, entretanto somente com os Models e os Controllers, visto que as Views são responsabilidade do front-end desenvolvido. 

Os **Models** desenvolvidos para o servidor são:

### Cliente

Model responsável pelo **armazenamento das informações do formulário de cadastro** citado na seção do front-end. Portanto armazena as informações de nome, idade, endereço e número da conta de um cliente.

### Conta

Model responsável pelo **armazenamento de uma conta associada à um cliente**. Contém informações do número da conta e do saldo atual. A criação desse Model foi necessária para separar as informações pessoais do cliente do seu saldo bancário.

### Transação

Model responsável pelo **armazenamento de uma transação associada à um cliente**. Uma transação consiste em um número de conta, o tipo de operação (saque, depósito ou transferência), o saldo anterior a transação, o saldo posterior a transação e data de realização da operação.

Os **Controllers** desenvolvidos para o servidor são:

### Cliente-controller

O controller processa uma **requisição *POST*** proveniente do front-end, contendo as informações de cadastro de um cliente, cria um novo documento no banco de dados com o **novo cliente** e um **novo documento para uma conta** associada ao cliente recém criado. 

Caso não seja possível criar o cliente é respondido ao lado cliente da aplicação uma mensagem de erro, caso contrário uma mensagem de sucesso é enviada como resposta.

### Conta-controller

Responsável por enviar uma resposta a uma requisição GET do lado cliente com **todas os documentos 'Conta' do banco de dados**. É o controller fundamental para a tela de saldos.

### Transacao-controller

Contém dois tipos de processamento possíveis: um para uma **requisição *GET*** proveniente do lado cliente, quando **para criar a tabela com as transaçõs do dia da tela de relatórios** e um para uma **requisição *POST*, para criar a tabela de transações do extrato bancário de um cliente.**

A requisição GET é processada e respondida ao lado cliente com uma lista de transações criadas no banco de dados no dia da requisição. Já a requisição POST verifica e responde ao lado cliente a lista de transações do banco de dados que estão associadas ao número de conta passados pela requisição pelo lado cliente.

# Observações gerais

## Principais desafios

A falta de contato prévio com as tecnologias utilizadas foi o principal desafio para este projeto. Foi percebido que a curva de aprendizado de todos os frameworks e o banco de dados utilizada é bem rápida, ainda assim a falta de prática influenciou no tempo de produção do código.

\* *Assim como no nome deste componente como em diversas partes do código, o uso do inglês para nomear partes do sistema é justificado por práticas pessoais prévias em desenvolvimento, onde se utilizava a língua inglesa no código. A mistura de português e inglês é feita de forma prudente, onde foi visto em que situação se adequava melhor cada língua.*

## Agradecimentos

Agradeço a toda equipe de recrutamento da IBM e ao gerente de projetos Miguel Angelo pela oportunidade de fazer parte deste processo seletivo, independente do resultado. Vejo a IBM como uma grande empresa, com funcionários extremamente competentes.

*Fim do documento*







