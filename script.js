function showCropInfo(soilType) {
    const infoDiv = document.getElementById('info');
    const cropInfoSection = document.getElementById('crop-info');
    
    let info = '';

    switch (soilType) {
        case 'sandy':
            info = `
                <h3>Sandy Soil</h3>
                <p><strong>Suitable Crops:</strong> Carrots, Potatoes, Tomatoes</p>
                <p><strong>Sowing Time:</strong> March to April</p>
                <p><strong>Region:</strong> Warm regions</p>
                <p><strong>Temperature:</strong> 20°C to 30°C</p>
                <p><strong>Rainfall:</strong> 500mm to 800mm</p>
                <p><strong>pH Value:</strong> 6.0 to 7.0</p>
            `;
            break;
        case 'clay':
            info = `
                <h3>Clay Soil</h3>
                <p><strong>Suitable Crops:</strong> Rice, Wheat, Barley</p>
                <p><strong>Sowing Time:</strong> April to May</p>
                <p><strong>Region:</strong> Temperate regions</p>
                <p><strong>Temperature:</strong> 15°C to 25°C</p>
                <p><strong>Rainfall:</strong> 800mm to 1200mm</p>
                <p><strong>pH Value:</strong> 6.5 to 7.5</p>
            `;
            break;
        case 'loamy':
            info = `
                <h3>Loamy Soil</h3>
                <p><strong>Suitable Crops:</strong> Corn, Beans, Peas</p>
                <p><strong>Sowing Time:</strong> April to June</p>
                <p><strong>Region:</strong> Various regions</p>
                <p><strong>Temperature:</strong> 15°C to 25°C</p>
                <p><strong>Rainfall:</strong> 600mm to 1000mm</p>
                <p><strong>pH Value:</strong> 6.0 to 7.0</p>
            `;
            break;
        case 'silty':
            info = `
                <h3>Silty Soil</h3>
                <p><strong>Suitable Crops:</strong> Lettuce, Spinach, Cabbage</p>
                <p><strong>Sowing Time:</strong> March to April</p>
                <p><strong>Region:</strong> Humid regions</p>
                <p><strong>Temperature:</strong> 15°C to 25°C</p>
                <p><strong>Rainfall:</strong> 700mm to 1200mm</p>
                <p><strong>pH Value:</strong> 6.0 to 7.5</p>
            `;
            break;
        default:
            info = '<p>Please select a valid soil type.</p>';
    }

    infoDiv.innerHTML = info;
    cropInfoSection.classList.remove('hidden');
}
                