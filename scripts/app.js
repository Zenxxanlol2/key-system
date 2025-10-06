document.getElementById('keyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const product = document.getElementById('product').value;
    const duration = document.getElementById('duration').value;
    const hwid = document.getElementById('hwid').value;
    
    // Generate a mock key (in a real system, this would call your API)
    const key = generateMockKey(product, duration, hwid);
    
    // Calculate expiry date
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + parseInt(duration));
    
    // Display the result
    document.getElementById('keyValue').textContent = key;
    document.getElementById('expiryDate').textContent = expiryDate.toLocaleDateString();
    document.getElementById('keyResult').classList.add('active');
});

document.getElementById('copyKey').addEventListener('click', function() {
    const keyValue = document.getElementById('keyValue').textContent;
    navigator.clipboard.writeText(keyValue).then(function() {
        const originalText = this.textContent;
        this.textContent = 'Copied!';
        setTimeout(() => {
            this.textContent = originalText;
        }, 2000);
    }.bind(this));
});

function generateMockKey(product, duration, hwid) {
    const prefix = product === 'pro' ? 'SLP' : product === 'enterprise' ? 'SLE' : 'SLU';
    const randomPart = Math.random().toString(36).substring(2, 10).toUpperCase();
    const hwidPart = hwid ? hwid.substring(0, 8).toUpperCase() : 'UNRESTRICT';
    return `${prefix}-${randomPart}-${hwidPart}-${duration}D`;
}
