document.getElementById('uploadButton').addEventListener('click', function() {
    const photoInput = document.getElementById('photoInput');
    const photoGallery = document.getElementById('photoGallery');

    if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = 'Uploaded Photo';
            img.style.maxWidth = '200px';
            img.style.margin = '10px';
            photoGallery.appendChild(img);
        };
        
        reader.readAsDataURL(photoInput.files[0]);
    }
});