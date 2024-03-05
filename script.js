//your code here
const images = document.querySelectorAll('.image');

let draggedItem = null;

for (let i = 0; i < images.length; i++) {
    const image = images[i];

    image.addEventListener('dragstart', function() {
        draggedItem = image;
        setTimeout(() => {
            image.style.display = 'none';
        }, 0);
    });

    image.addEventListener('dragend', function() {
        setTimeout(() => {
            draggedItem.style.display = 'block';
            draggedItem = null;
        }, 0);
    });

    for (let j = 0; j < images.length; j++) {
        const targetImage = images[j];

        targetImage.addEventListener('dragover', function(e) {
            e.preventDefault();
        });

        targetImage.addEventListener('dragenter', function(e) {
            e.preventDefault();
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        });

        targetImage.addEventListener('dragleave', function(e) {
            this.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        });

        targetImage.addEventListener('drop', function() {
            this.append(draggedItem);
            this.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        });
    }
}
