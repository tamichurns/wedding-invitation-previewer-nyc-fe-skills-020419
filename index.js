const name1Input = document.getElementById('name1_input')
const name2Input = document.getElementById('name2_input')
const timeDateInput = document.getElementById('time_date_input')
const locationInput = document.getElementById('location_input')
const classicButton = document.getElementById('classic_button')
const name1Output = document.querySelector('.name1_output')
const canvas = document.querySelector('.card_canvas')
const ampersand = document.querySelector('.ampersand')
const name2Output = document.querySelector('.name2_output')
const intro = document.querySelector('.intro')
const on = document.querySelector('.on')
const at = document.querySelector('.at')
const timeDateOutput = document.querySelector('.time_date_output')
const locationOutput = document.querySelector('.location_output')
const card = document.getElementById('card')

document.addEventListener("DOMContentLoaded", () => {
  canvas.classList.add('classic')
  name1Output.classList.add('classic_headline')
  ampersand.classList.add('classic_headline')
  name2Output.classList.add('classic_headline')
  intro.classList.add('classic_preset_copy')
  on.classList.add('classic_preset_copy')
  at.classList.add('classic_preset_copy')
  timeDateOutput.classList.add('classic_date_location')
  locationOutput.classList.add('classic_date_location')
});
  


// format date & time //




// Enter details //

name1Input.addEventListener('keyup', (onKeyUp) => {
  name1Output.innerHTML = name1Input.value 
})

name2Input.addEventListener('keyup', (onKeyUp) => {
  name2Output.innerHTML = name2Input.value
})

function onDateChange (event) {
  timeDateOutput.innerHTML = (event.target.value)
}

locationInput.addEventListener('keyup', (onKeyUp) => {
  locationOutput.innerHTML = locationInput.value
})

// Change styles // 

document.getElementById('classic_button').onclick = function(event) {
  canvas.classList.add('classic')
  canvas.classList.remove('bohemian','modern')
  canvas.classList.add('classic')
  name1Output.classList.remove('bohemian_headline','modern_headline')
  name1Output.classList.add('classic_headline')
  ampersand.classList.remove('bohemian_headline','modern_headline')
  ampersand.classList.add('classic_headline')
  name2Output.classList.remove('bohemian_headline','modern_headline')
  name2Output.classList.add('classic_headline')
  intro.classList.remove('bohemian_preset_copy','modern_preset_copy')
  intro.classList.add('classic_preset_copy')
  on.classList.remove('bohemian_preset_copy','modern_preset_copy')
  on.classList.add('classic_preset_copy')
  at.classList.remove('bohemian_preset_copy','modern_preset_copy')
  at.classList.add('classic_preset_copy')
  timeDateOutput.classList.remove('bohemian_date_location','modern_date_location')
  timeDateOutput.classList.add('classic_date_location')
  locationOutput.classList.remove('bohemian_date_location','modern_date_location')
  locationOutput.classList.add('classic_date_location')
}

document.getElementById('bohemian_button').onclick = function(event) {
  canvas.classList.remove('classic','modern')
  canvas.classList.add('bohemian')
  name1Output.classList.remove('classic_headline','modern_headline')
  name1Output.classList.add('bohemian_headline')
  ampersand.classList.remove('classic_headline','modern_headline')
  ampersand.classList.add('bohemian_headline')
  name2Output.classList.remove('classic_headline','modern_headline')
  name2Output.classList.add('bohemian_headline')
  intro.classList.remove('classic_preset_copy','modern_preset_copy')
  intro.classList.add('bohemian_preset_copy')
  on.classList.remove('classic_preset_copy','modern_preset_copy')
  on.classList.add('bohemian_preset_copy')
  at.classList.remove('classic_preset_copy','modern_preset_copy')
  at.classList.add('bohemian_preset_copy')
  timeDateOutput.classList.remove('classic_date_location','modern_date_location')
  timeDateOutput.classList.add('bohemian_date_location')
  locationOutput.classList.remove('classic_date_location','modern_date_location')
  locationOutput.classList.add('bohemian_date_location')
}

document.getElementById('modern_button').onclick = function(event) {
  canvas.classList.remove('bohemian','classic')
  canvas.classList.add('modern')
  name1Output.classList.remove('bohemian_headline','classic_headline')
  name1Output.classList.add('modern_headline')
  ampersand.classList.remove('bohemian_headline','classic_headline')
  ampersand.classList.add('modern_headline')
  name2Output.classList.remove('bohemian_headline','classic_headline')
  name2Output.classList.add('modern_headline')
  intro.classList.remove('bohemian_preset_copy','classic_preset_copy')
  intro.classList.add('modern_preset_copy')
  on.classList.remove('bohemian_preset_copy','classic_preset_copy')
  on.classList.add('modern_preset_copy')
  at.classList.remove('bohemian_preset_copy','classic_preset_copy')
  at.classList.add('modern_preset_copy')
  timeDateOutput.classList.remove('bohemian_date_location','classic_date_location')
  timeDateOutput.classList.add('modern_date_location')
  locationOutput.classList.remove('bohemian_date_location','classic_date_location')
  locationOutput.classList.add('modern_date_location')
}
    
    
  // const cardData = document.getElementById('card_data')
  // for (let child of Array.from (cardData.children)) {
  //   console.log(child.getAttribute('data'))
  //   const classicClass = 'classic_' + child.getAttribute('data')
  //   child.classList.remove(classicClass)
  // }



