document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.generator-form');
    const keyResult = document.getElementById('keyResult');
    const keyValue = document.getElementById('keyValue');
    const copyButton = document.getElementById('copyKey');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const product = document.getElementById('product').value;
        const duration = document.getElementById('duration').value;
        const hwid = document.getElementById('hwid').value;
        
        const key = generateKey(product, duration, hwid);
        
        keyValue.textContent = key;
        keyResult.classList.add('active');
    });

    copyButton.addEventListener('click', function() {
        const key = keyValue.textContent;
        navigator.clipboard.writeText(key).then(() => {
            const originalText = copyButton.textContent;
            copyButton.textContent = 'Copied';
            setTimeout(() => {
                copyButton.textContent = originalText;
            }, 2000);
        });
    });

    function generateKey(product, duration, hwid) {
        const prefix = 'SY';
        const random = Math.random().toString(36).substr(2, 12).toUpperCase();
        const hwidPart = hwid ? hwid.substr(0, 6).toUpperCase() : 'UNREST';
        return `${prefix}-${random}-${hwidPart}-${duration}D`;
    }
});
