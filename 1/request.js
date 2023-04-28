
export const REQUEST_TIMEOUT = 500;

function encrypt (data){
    return 'encrypted data'
}


export default function send (url, data){
    const encryptedData = encrypt(data);
    console.log(`->Send ${encryptedData} to ${url}`)
}

console.log('REQUEST MODULE')

// module.exports = {
//     REQUEST_TIMEOUT,
//     send,
// }