//show element
function welcome(){
    const contents = document.querySelector('.contents')
    contents.removeAttribute('hidden')
  }


  //addEventListener
  //   document.body.onload = welcome
  window.addEventListener('load',welcome)


    //count with state concepts
      let state = {
        counter: 0
      }

      function render(){
        document.querySelector('#count').textContent = state.counter
      }

      function incrementCounter(){
        state.counter++
        if(state.counter == 7){
            const hiddenMessage = document.createElement("h4")
            hiddenMessage.innerText = "Selamat anda mendapatkan hadiah tersembunyi"
            const image =  document.createElement('img')
            image.setAttribute("src","./images/doggy.jpg")
            image.height = 200
            // image.width = 200
            const hiddenGift = document.getElementById('hiddenGift')
            hiddenGift.style.display = 'flex'
            hiddenGift.style.flexDirection = 'column'
            hiddenGift.style.justifyContent = 'center'
            hiddenGift.style.alignItems = 'center'
            hiddenGift.appendChild(hiddenMessage)
            hiddenGift.appendChild(image)
            console.log(hiddenGift)
        }
        render()
      }
      document.getElementById('incrementButton').addEventListener('click',incrementCounter)
      render()

    //count with function
    //   const count =  document.getElementById('count')
    //   function increment(){
    //     count.innerText++
    //     if(document.getElementById('count').innerText == 7){
    //         const hiddenMessage = document.createElement("h4")
    //         hiddenMessage.innerText = "Selamat anda mendapatkan hadiah tersembunyi"
    //         const image =  document.createElement('img')
    //         image.setAttribute("src","./images/doggy.jpg")
    //         image.height = 200
    //         // image.width = 200
    //         const hiddenGift = document.getElementById('hiddenGift')
    //         hiddenGift.style.display = 'flex'
    //         hiddenGift.style.flexDirection = 'column'
    //         hiddenGift.style.justifyContent = 'center'
    //         hiddenGift.style.alignItems = 'center'
    //         hiddenGift.appendChild(hiddenMessage)
    //         hiddenGift.appendChild(image)
    //         console.log(hiddenGift)
    //     }
    //   }


    //Custom event
    const change = new Event('change')
    window.addEventListener('load', function() {
        const tombol = document.getElementById('tombol');
        tombol.addEventListener('change', customEventHandler);
        tombol.addEventListener('click', function() {
            tombol.dispatchEvent(change)
        });
    });
    function customEventHandler(ev) {
        console.log('Event ' + ev.type + ' telah dijalankan');
        const caption = document.getElementById('caption');
        caption.innerText = 'Anda telah membangkitkan custom event';
    }



    const divs = document.getElementsByTagName('div');
    //Event Bubbling
    for (let bub of divs) {
        bub.addEventListener('click', function () {
            alert('ELEMEN ' + bub.getAttribute('id').toUpperCase());
        });
    }

    //Event Capturing
    // for (let cap of divs) {
    //     cap.addEventListener('click', function() {
    //       alert('ELEMEN ' + cap.getAttribute('id').toUpperCase());
    //     }, true);
    // }
    

