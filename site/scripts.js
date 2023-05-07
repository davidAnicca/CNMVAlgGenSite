function randomFreq() {
    let randomNum = Math.random();
    randomNum *= 770;
    randomNum += 110;
    randomNum = Math.floor(randomNum);
    return randomNum;
}

function play4Chord(freq1, freq2, freq3, freq4) {
    const context = new AudioContext();

    const oscillator1 = context.createOscillator();
    oscillator1.type = 'sine';
    oscillator1.frequency.value = freq1;

    const oscillator2 = context.createOscillator();
    oscillator2.type = 'sine';
    oscillator2.frequency.value = freq2;

    const oscillator3 = context.createOscillator();
    oscillator3.type = 'sine';
    oscillator3.frequency.value = freq3;

    const oscillator4 = context.createOscillator();
    oscillator4.type = 'sine';
    oscillator4.frequency.value = freq4;

    const gainNode = context.createGain();
    gainNode.gain.value = 0.5;

    oscillator1.connect(gainNode);
    oscillator2.connect(gainNode);
    oscillator3.connect(gainNode);
    oscillator4.connect(gainNode);
    gainNode.connect(context.destination);

    oscillator1.start();
    oscillator2.start();
    oscillator3.start();
    oscillator4.start();
    oscillator1.stop(context.currentTime + 1);
    oscillator2.stop(context.currentTime + 1);
    oscillator3.stop(context.currentTime + 1);
    oscillator4.stop(context.currentTime + 1);
}

function playRandom() {
    let f1 = document.getElementById("f1");
    let f2 = document.getElementById("f2");
    let f3 = document.getElementById("f3");
    let f4 = document.getElementById("f4");

    let freq1 = randomFreq();
    let freq2 = randomFreq();
    let freq3 = randomFreq();
    let freq4 = randomFreq();
    4

    f1.textContent = freq1.toString();
    f2.textContent = freq2.toString();
    f3.textContent = freq3.toString();
    f4.textContent = freq4.toString();

    play4Chord(freq1, freq2, freq3, freq4);
}

function playNotes(f1, f2) {
    const context = new AudioContext();

    const oscillator1 = context.createOscillator();
    oscillator1.type = 'sine';
    oscillator1.frequency.value = f1;

    const oscillator2 = context.createOscillator();
    oscillator2.type = 'sine';
    oscillator2.frequency.value = f2;

    const gainNode = context.createGain();
    gainNode.gain.value = 0.5;

    oscillator1.connect(gainNode);
    oscillator2.connect(gainNode);
    gainNode.connect(context.destination);

    oscillator1.start();
    oscillator2.start();
    oscillator1.stop(context.currentTime + 1);
    oscillator2.stop(context.currentTime + 1);
}

function playNotesFromInputs() {
    const f1 = document.getElementById("first").value;
    const f2 = document.getElementById("second").value;
    playNotes(f1, f2);
}

function playNote(freq) {
    const context = new AudioContext();
    const oscillator = context.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.value = freq;
    oscillator.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 1);
}