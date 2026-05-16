const config = {
    apiUrl: 'https://api.example.com',
    timeout: 5000,
    retries: 3,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token'
    }
};

// Freeze the object to prevent modifications
// Then try to modify and observe what happens
// Create a sealed version instead

// freeze can't modify anything
const frozenObj = Object.freeze({ ...config });

frozenObj.timeout = 1000;       // fails silently
frozenObj.newProp = 'value';    // cannot add
console.log(frozenObj.timeout); // remains unchanged

console.log(Object.isFrozen(frozenObj));

// Seal can modify exisiting properties
// can't add new it can neither delete exisiting 

const sealedObj =Object.seal({...config});
sealedObj.timeout=10000;    // exisiting propert got updated
sealedObj.newProp="value"   // can't add

delete sealedObj.retries;    // can't delete

console.log(sealedObj.timeout);

