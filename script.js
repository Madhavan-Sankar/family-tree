const photoInput = document.getElementById('photo-input');
const previewImage = document.getElementById('preview-image');
const uploadBtn = document.getElementById('upload-btn');

photoInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      previewImage.src = event.target.result;
      localStorage.setItem('userPhoto', event.target.result); // Store in local storage
    };
    reader.readAsDataURL(file);
  }
});
