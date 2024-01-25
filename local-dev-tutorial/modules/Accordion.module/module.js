document.addEventListener('DOMContentLoaded', function () {
        var labels = document.querySelectorAll('.label');
    
        labels.forEach(function (label) {
            label.addEventListener('click', function () {
                var currentContent = this.parentNode;
                
                // Cierra todas las secciones
                labels.forEach(function (otherLabel) {
                    var otherContent = otherLabel.parentNode;
                    if (otherContent !== currentContent) {
                        otherContent.classList.remove('active');
                    }
                });
    
                // Abre o cierra la sección actual
                currentContent.classList.toggle('active');
            });
        });
    });