async function noticias(){
     const noticias = document.querySelector('#news')
    const news = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=ebbd3ffc2627412cb30fbf8faba60264`)

    const newsDados = await news.json()

    console.log(newsDados)
    
    newsDados.articles.forEach((newsDados, index, array) => {
        noticias.innerHTML += `
            
           <div class='card'>

           <div class='img'>
           <img src='${newsDados.urlToImage}' alt='Falha ao carregar imagem'>
           </div>
              <div class='text'>
              <h3>${newsDados.title}</h3>

              <p>${newsDados.description}</p>
              </div>
              <p>${newsDados.publishedAt}</p>
              <a href='ler.html/${index}'>Ler mais</a>



           </div>
        
        `
        
    })
     
   
}

noticias()

