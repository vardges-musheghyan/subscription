
function InitMessagesService(){
    let callbacks = [];
    function subscribe(options, callback){
        callbacks.push(callback);
        console.log('EXECUTED')
        return {
            postMessage : (message) => {
                callbacks.forEach( cb => cb({
                    message,
                    sender: options.name
                }) )
            },
            unSubscribe : () => {
                callbacks = callbacks.filter( c => c !== callback )
            },
        }
    }

    return {
        subscribe
    }
}

const service = InitMessagesService();


export default service;

