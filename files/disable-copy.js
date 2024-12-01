document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

document.addEventListener('keydown', function (e) {
    // Disable Ctrl+C, Ctrl+X, Ctrl+S, and Ctrl+U
    if (e.ctrlKey && ['c', 'x', 's', 'u'].includes(e.key.toLowerCase())) {
        e.preventDefault();
    }
});

document.addEventListener('copy', function (e) {
    e.preventDefault();
    alert('Copying content is disabled!');
});
