//create map
const map = L.map('mapid').setView([-30.0054701, -51.1693385], 15);

// Create end add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
  iconUrl: '/images/map-marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

//create and add marker
map.on('click', (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector('[name = lat]').value = lat;
  document.querySelector('[name = lng]').value = lng;

  //remove icon
  marker && map.removeLayer(marker);

  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//adicionar o campo de fotos
function addPhotoField() {
  //pegar o container de fotos #images
  const container = document.querySelector('#images');

  //pegar o container para duplicar .new-upload
  const fieldsContainer = document.querySelectorAll('.new-upload');

  //realizar o clone da ultima imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  //verificar se o campo esta vazio, se sim, nao add ao container de imagens
  const input = newFieldContainer.children[0];
  if (input.value == '') {
    return;
  }

  //Limpar o campo antes de adicionar ao container de imagens
  newFieldContainer.children[0].value = '';

  // Adicionar o clone ao container de images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll('.new-upload');

  if (fieldsContainer.length < 2) {
    //limpar o valor do campo
    span.parentNode.children[0].value = '';
    return;
  }

  //deletar o campo
  span.parentNode.remove();
}

//troca do sim e nao
function toggleSelect(event) {
  //retirar a classe active(dos botoes)
  document
    .querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'));

  //colocar a classe active
  const button = event.currentTarget;
  button.classList.add('active');

  //atualizar o input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]');

  input.value = button.dataset.value;
}

// function validade(event) {
//   const needsLatAndLng = document;
//   event.preventDefault();
//   alert('Clique no mapa para preencher os campos latitude e longitude ');
// }
