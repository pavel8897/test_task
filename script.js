let tabsContent = document.querySelector('.tabs')
let imgs = document.querySelector('.imgs')
let contents = ''
let imgSrc = ''

for(key in obj) {
	contents += `<span><img src="plus.png">${key}</span>`
	contents += `<ul class="spisok">`
	for(let i=0;i<obj[key].length;i++) {
		contents += `<li><a href="">${obj[key][i]}</a></li>`
	}
	contents += `</ul>`
}

tabsContent.innerHTML = contents

for(let i=1;i<=12;i++) {
	let img = document.createElement('img')
	img.src = `icon/icon${i}.png`
	imgs.appendChild(img)
}

let tabs = document.querySelectorAll('.tabs span')
let tabsUl = document.querySelectorAll('.tabs ul')

for(let i=0;i<tabs.length;i++) {
	tabs[i].onclick = () => {
		tabsUl[i].classList.toggle('show')
		let src = tabs[i].childNodes[0].src
		tabs[i].childNodes[0].src = src.split('/')[src.split('/').length - 1] == 'plus.png' ? 'open.png' : 'plus.png'			
	}
}