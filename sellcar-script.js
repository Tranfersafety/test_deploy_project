document
  .getElementById("imageInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    const preview = document.getElementById("imagePreview");
    const defaultImage = document.getElementById("defaultImage");

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        preview.src = e.target.result;
        preview.style.display = "block";
        defaultImage.style.display = "none";
      };

      reader.readAsDataURL(file);
    } 
    else {
      preview.src = "";
      preview.style.display = "none";
      defaultImage.style.display = "block";
    }
  });

function myFunction() {
  var x = document.getElementById("burger");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
