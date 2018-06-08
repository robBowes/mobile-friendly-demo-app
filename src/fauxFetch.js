export default (route, info) => {
    if (route === '/login') {
        if (info === 'flighthub') {
            return {
                status: true,
                username: 'Jean',
                userId: '1',
            };
        } else {
            return {
                status: false,
                reason: 'Invalid login information',
            };
        }
    }
};
