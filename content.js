chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getAuthToken") {
        // Extract the ID token from the cookies (assuming it's stored in a cookie named 'id_token')
        const authToken = document.cookie.split('; ').find(row => row.startsWith('id_token='))?.split('=')[1];
        sendResponse({ authToken: authToken });
    }
});
