
  function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var date = now.toDateString();

    // Tambahkan nol didepan jam, menit, dan detik jika kurang dari 10
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    // Update elemen clock dengan jam dan tanggal saat ini
    var clock = document.getElementById('clock');
    clock.innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + date;
  }

  // Panggil fungsi updateClock setiap detik
  setInterval(updateClock, 1000);

  var cards = document.querySelectorAll('.card');
  cards.forEach(function(card) {
    card.addEventListener('click', function() {
      if (card.id === 'card1') {
        alert('Card 1 clicked!');
      } else if (card.id === 'card2') {
        alert('Perguruan Silat Bima suci');
        window.location.href = 'http://perguruansilatbimasuci.mysch.id/';
      } else if (card.id === 'card3') {
        alert('SMKN 2 Kuningan');
        window.location.href = 'http://smkn2-kng.sch.id/';
      } else if (card.id === 'card4') {
        alert('Card 4 clicked!');
      }
    });
  });

   // Array yang berisi nama-nama file gambar
   var gambar = ['gambar1.jpg', 'gambar2.jpg', 'gambar3.jpg'];
  
   // Variabel untuk menyimpan indeks gambar yang sedang ditampilkan
   var indeks = 0;
   
   // Fungsi untuk mengubah indeks gambar dan mengubah src atribut pada tag img
   function gantiGambar() {
     indeks = (indeks + 1) % gambar.length;
     document.querySelector('#slideshow img').src = gambar[indeks];
   }
   
   // Timer untuk memanggil fungsi gantiGambar setiap 3 detik
   setInterval(gantiGambar, 3000);