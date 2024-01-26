const submitAction = document.getElementById('formDataDiri')
submitAction.addEventListener('submit', function (event) {
    const inputNama = document.getElementById('inputNama').value;
    const inputDomisili = document.getElementById('inputDomisili').value;
    const hiddenMessage = `Halo, ${inputNama}. \n Bagaimana cuacanya di ${inputDomisili}?`

    const MessageAfterSubmit = document.getElementById('messageAfterSubmit')
    MessageAfterSubmit.innerText = hiddenMessage;
    event.preventDefault();
  });