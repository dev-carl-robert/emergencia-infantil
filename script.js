document.getElementById('denunciaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = this;

    if (!navigator.geolocation) {
      alert('Geolocalização não suportada pelo navegador');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      position => {
        document.getElementById('lat').value = position.coords.latitude.toFixed(6);
        document.getElementById('lng').value = position.coords.longitude.toFixed(6);
        const vis = document.getElementById('localizacaoVisivel');
        vis.value = `Lat: ${position.coords.latitude.toFixed(4)}, Lng: ${position.coords.longitude.toFixed(4)}`;
        form.submit();
      },
      error => {
        alert('Não foi possível obter sua localização: ' + error.message);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  });