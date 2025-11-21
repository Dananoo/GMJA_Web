function copyCA() {
    const caInput = document.getElementById('ca-input');
    caInput.select();
    caInput.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(caInput.value);
    alert("Copied the Holy Address!");
}

console.log('Meme Coin site loaded');
