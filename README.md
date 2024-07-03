# Weather App

![Weather App](img.png)

## Descrição

Este é um projeto pessoal de um aplicativo de clima desenvolvido com React e utilizando a API da OpenWeatherMap para obter dados meteorológicos em tempo real.

## Funcionalidades

- Busca de informações meteorológicas por cidade.
- Exibição de temperatura, umidade, velocidade do vento e descrição do clima.
- Exibição de ícones representando o estado do clima atual.
- Mensagens de erro para cidades não encontradas ou outros problemas de conexão.

## Tecnologias Utilizadas

- [React](https://reactjs.org/)
- CSS

### API Externa

- [OpenWeatherMap](https://openweathermap.org/)

## Pré-requisitos

- [Node.js](https://nodejs.org/)

## Instalação e Execução

Siga estas etapas para rodar o projeto na sua máquina local:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/beater27032001/weather-app.git
   cd weather-app

   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Adicione sua chave de API da OpenWeatherMap:**
    Abra o arquivo ApiProvider.jsx e substitua your_api_key_here pela sua chave de API da OpenWeatherMap.

   ```bash
   const apiKey = "your_api_key_here";
   ```

4. **Rode o aplicativo:**

   ```bash
   npm run dev
   ```

5. **Abra o navegador:**

   Abra o navegador e acesse `http://localhost:3000`.

## Acesse o Site

Você também pode acessar o aplicativo online através do link abaixo:

[Weather App - Versão Online](https://weather-app-taupe-three-78.vercel.app)