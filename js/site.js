window.onload = function() {
    awty.add({
        bgcolor: 'red'
    });

    var buttons = document.querySelector('.buttons-container');

    if (!Element.prototype.addEventListener) {
        // IE8 and below
        buttons.attachEvent('onclick', function(event) {
            var target = event.srcElement;

            // only handle the click if the target was a button element.
            if(target.tagName === 'BUTTON') {
                var percentageComplete = target.getAttribute('data-progress');
                awty.update(percentageComplete);
            }
        });
    } else {
        buttons.addEventListener('click', function(event) {
            var target = event.target;
            // only handle the click if the target was a button element.
            if(target.tagName === 'BUTTON') {
                var dataset = target.dataset;
                // If this is IE < 11, we need to get the data attributes explicitly as it does not
                // support the dataset property.
                var percentageComplete = dataset ? dataset['progress'] : target.getAttribute('data-progress');
                awty.update(percentageComplete);
            }
        });
    }
};
