(()=>{
    checkTruck = async () => {
        console.log('truck');
        const model = await mobilenet.load();
        const img = document.getElementById('myImage');
        const predictions = await model.classify(img);
        console.log('Predictions', predictions);
        const found = predictions.filter(p=>p.className.includes('truck'));
        if(found.length > 0) alert('TRUCK DETECTED');
    }

    checkTruck();
})()