module.exports = {
    router: {
        base: '/math2/dist/',
    },
    mode: 'spa',
    srcDir: 'src/',
    build: {
        babel: {

        }
    },
    css: [
        '@/styles/styles.scss',
    ],
    build: {
    },
    plugins: [
        '~/plugins/main.js',
    ],


}   