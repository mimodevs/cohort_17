const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3c5a6008c6msh66870ad43315b4bp15da5cjsnb1643eeef111',
		'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com'
	}
};

fetch('https://ronreiter-meme-generator.p.rapidapi.com/images', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

// meme generator request
function blobToBase64(blob) {
	return new Promise((resolve, _) => {
	  const reader = new FileReader(); // filereader reads data that javascript doesn't understand
	  reader.onloadend = () => resolve(reader.result);
	  reader.readAsDataURL(blob);
	});
  }

  const topText = document.querySelector('.top-text')
  const bottomText = document.querySelector('.bottom-text')
  const memeImg = document.querySelector('.meme-img')
  const btn = document.querySelector('.generate-btn') 
  const spinner = document.querySelector('.ldio-4dagye3coja')  

  function generateMeme() {
	spinner.hidden = false
	memeImg.style.opacity = "0.7";

	  fetch(`https://ronreiter-meme-generator.p.rapidapi.com/meme?top=${topText.value}&bottom=${bottomText.value}&meme=10-Guy`, options)
	  .then(response => response.blob())
	  .then(response => blobToBase64(response))
	  .then(image => memeImg.src = image)
	  .catch(err => alert(err))
	  .finally(()=> {
		spinner.hidden = true; 
		memeImg.style.opacity = "1";
	} )
	}

	btn.addEventListener('click', generateMeme) 