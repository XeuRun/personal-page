if ('addEventListener' in window) {
    window.addEventListener(
        'load',
        function()
        {
            document.body.className = document.body.className.replace(/\bis-loading\b/, 'random-background');
        }
    );
}