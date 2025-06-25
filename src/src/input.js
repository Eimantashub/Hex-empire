export function handleInput(state) {
  document.getElementById('signPact').onclick = () => {
    alert('Paktas pasirašytas!');
  };
  document.getElementById('giveSpeech').onclick = () => {
    alert('Kalba pasakyta!');
  };
  document.getElementById('capitulate').onclick = () => {
    alert('Tu pasidavei.');
  };
}
