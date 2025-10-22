
window.dataSdk = {
    init: async function(handler) {
        console.log('Mock Data SDK initialized');
        this.handler = handler;
        return { isOk: true };
    },
    create: async function(data) {
        console.log('Mock create:', data);
        return { isOk: true };
    },
    update: async function(data) {
        console.log('Mock update:', data);
        return { isOk: true };
    }
};
