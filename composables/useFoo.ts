export default function () {
    return useState('foo', () => {
        if (process.browser) {
            console.log('mmmm');
        }
    });
}