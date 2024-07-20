document.getElementById('getAuthToken').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "getAuthToken" }, (response) => {
            document.getElementById('authToken').textContent = response.authToken || 'No token found';
        });
    });
});

document.getElementById('generateWallet').addEventListener('click', () => {
    const authToken = document.getElementById('authToken').textContent;
    if (authToken && authToken !== 'No token found') {
        // Use the authToken to generate a wallet address (Placeholder logic)
        const walletAddress = '0x' + authToken.substring(0, 40); // Simplified example
        document.getElementById('walletAddress').textContent = walletAddress;
    } else {
        document.getElementById('walletAddress').textContent = 'No valid token available';
    }
});
