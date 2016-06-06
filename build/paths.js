module.exports = {
    source: ['src/app/{,*/,*/*/}*.js', 'src/common/{,*/,*/*/}*.js'],
    html: ['src/app/{,*/,*/*/}*.html', 'index.html'],
    json: ['src/app/{,*/,*/*/}/*.json', 'src/common/{,*/,*/*/}/*.json'],
    templates: 'src/app/{,*/,*/*/}*.html',
    less: ['src/app/{,*/,*/*/}*.less'],
    output: 'dist/',
    outputCss: 'dist/**/*.css',
    tests: 'test/e2e/**/*.spec.js',
    release: 'prod/**/*'
};
