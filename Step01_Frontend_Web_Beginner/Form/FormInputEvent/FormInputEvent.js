document.addEventListener('DOMContentLoaded', function () {
    const inputMaxLengthOnLoad = document.getElementById('inputNama').maxLength;
    document.getElementById('sisaKarakter').innerText = inputMaxLengthOnLoad;

    document.getElementById('inputNama').addEventListener('input', function () {
        const jumlahKarakterDiketik = document.getElementById('inputNama').value.length;
        const jumlahKarakterMaksimal = document.getElementById('inputNama').maxLength;
        
        console.log('jumlahKarakterDiketik: ', jumlahKarakterDiketik);
        console.log('jumlahKarakterMaksimal: ', jumlahKarakterMaksimal);
        const sisaKarakterUpdate = jumlahKarakterMaksimal - jumlahKarakterDiketik;
        document.getElementById('sisaKarakter').innerText = sisaKarakterUpdate.toString();
        
        if (sisaKarakterUpdate === 0) {
          document.getElementById('sisaKarakter').innerText = 'Karakter telah mencapai batas maksimal!';
          document.getElementById('notifikasiSisaKarakter').style.visibility = 'visible'
        } else if (sisaKarakterUpdate <= 5) {
          document.getElementById('notifikasiSisaKarakter').style.color = 'red';
        } else {
          document.getElementById('notifikasiSisaKarakter').style.color = 'black';
        }
    });

    document.getElementById('inputNama').addEventListener('focus',function(){
        document.getElementById('notifikasiSisaKarakter').style.visibility = 'visible'
    })

    document.getElementById('inputNama').addEventListener('blur',function(){
        document.getElementById('notifikasiSisaKarakter').style.visibility = 'hidden'
    })

    document.getElementById('inputCaptcha').addEventListener('change',function(){
        const inputCaptcha = document.getElementById('inputCaptcha').value;
        const submitButtonStatus = document.getElementById('submitButton');

        if (inputCaptcha == 'PRNU') {
            submitButtonStatus.removeAttribute('disabled');
        } else {
            submitButtonStatus.removeAttribute('disabled','');
        }
    });

    document.getElementById('formDataDiri').addEventListener('submit', function (event) {
        const inputCaptcha = document.getElementById('inputCaptcha').value;
        if (inputCaptcha === 'PRNU') {
          alert('Selamat! Captcha Anda lolos :D');
        } else {
          alert('Captcha Anda belum tepat :(');
          document.getElementById('submitButton').setAttribute('disabled', '');
        }
        event.preventDefault();
    });

    document.getElementById('inputCopy').addEventListener('copy', function () {
        alert('Anda telah men-copy sesuatu...');
    });
     
      document.getElementById('inputPaste').addEventListener('paste', function () {
        alert('Anda telah mem-paste sebuah teks...');
    });
});