$(document).ready(function () {
    // Function to get query parameters from the URL
    function getQueryParameter(parameterName) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(parameterName);
    }

    // Check if there's an 'imei' parameter in the URL
    const imeiFromUrl = getQueryParameter('imei');
    
    if (imeiFromUrl) {
        // Extract the first 8 digits of the IMEI from the URL
        const imei = imeiFromUrl.substring(0, 8);

        // Check if the extracted IMEI is valid (should be 8 digits)
        if (/^\d{8}$/.test(imei)) {
            // Construct the image filename based on the IMEI
            const imageName = imei + '.jpg';

            // Create an image element and set its source
            const image = $('<img>').attr('src', '/home/scraper/pictures/' + imageName);

            // Clear previous images and append the new one
            $('#imageContainer').empty().append(image);
        } else {
            alert('Invalid IMEI in the URL. Please provide a valid 8-digit IMEI.');
        }
    } else {
        // Display the placeholder image when no IMEI is provided
        $('#placeholderImage').show();
    }

    $('#fetchButton').on('click', function () {
        // Get the IMEI from the input field
        const fullImei = $('#imeiInput').val();
        
        // Extract the first 8 digits of the IMEI
        const imei = fullImei.substring(0, 8);

        // Check if the extracted IMEI is valid (should be 8 digits)
        if (/^\d{8}$/.test(imei)) {
            // Construct the image filename based on the IMEI
            const imageName = imei + '.jpg';

            // Create an image element and set its source
            const image = $('<img>').attr('src', '/home/scraper/pictures/' + imageName);

            // Clear previous images and append the new one
            $('#imageContainer').empty().append(image);
        } else {
            alert('Please enter a valid IMEI with at least 8 digits.');
        }
    });
});
