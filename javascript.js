function pianoKeyPress(event) {
    var soundUrl = "";
    switch (event.id) {
    case "a":
    soundUrl = 'https://freesound.org/data/previews/203/203490_1622584-lq.mp3';
    break;
    case "b":
    soundUrl = 'https://freesound.org/data/previews/203/203491_1622584-lq.mp3';
    break;
    case "c":
    soundUrl = 'https://freesound.org/data/previews/203/203492_1622584-lq.mp3';
    break;
    case "d":
    soundUrl = 'https://freesound.org/data/previews/203/203493_1622584-lq.mp3';
    break;
    case "e":
    soundUrl = 'https://freesound.org/data/previews/203/203495_1622584-lq.mp3';
    break;
    case "f":
    soundUrl = 'https://freesound.org/data/previews/203/203499_1622584-lq.mp3';
    break;
    case "g":
    soundUrl = 'https://freesound.org/data/previews/203/203500_1622584-lq.mp3';
    break;
    
    }
    
    var audio = new Audio(soundUrl);
    audio.play();
    }
    
    
    /*
    if (event.id === 'a') {
    var soundUrl= 'https://freesound.org/data/previews/203/203490_1622584-lq.mp3';
    }
    if (event.id === 'b') {
    var soundUrl= 'https://freesound.org/data/previews/203/203491_1622584-lq.mp3';
    }
    if (event.id === 'c') {
    var soundUrl= 'https://freesound.org/data/previews/203/203492_1622584-lq.mp3';
    }
    
    var audio = new Audio(soundUrl);
    audio.play();
    }
    */
    
    
    /*
    This is the starting point to create a virtual piano. 
    1. Create a page with a single piano key (HTML)
    2. Style the piano and key to look more like a piano (CSS)
    3. Make the key play a sound using JavaScript (Functions & Variables)
    4. Add more keys to the piano and customise the sounds (Conditional logic)
    5. Add the black sharp keys into the piano
    
    Extension
    6. Play the paino keys using the corresponding keys on your keyboard (Event Listeners)
    
    Links to some piano key sounds, but you can use any sounds you want:
    'https://freesound.org/data/previews/203/203502_1622584-lq.mp3'
    'https://freesound.org/data/previews/203/203501_1622584-lq.mp3'
    'https://freesound.org/data/previews/203/203500_1622584-lq.mp3'g
    'https://freesound.org/data/previews/203/203499_1622584-lq.mp3'f
    'https://freesound.org/data/previews/203/203495_1622584-lq.mp3'e
    'https://freesound.org/data/previews/203/203493_1622584-lq.mp3'd
    'https://freesound.org/data/previews/203/203492_1622584-lq.mp3'c
    'https://freesound.org/data/previews/203/203491_1622584-lq.mp3'b
    'https://freesound.org/data/previews/203/203490_1622584-lq.mp3'a
    'https://freesound.org/data/previews/176/176731_3249786-lq.mp3'
    
    Remember to set load type on jsfiddle to no wrap - bottom of body
    */