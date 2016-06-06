module.exports = {
    source: ['src/app/{,*/,*/*/}*.js', 'src/common/{,*/,*/*/}*.js'],
    html: ['src/app/{,*/,*/*/}*.html'],
    json: ['src/app/{,*/,*/*/}/*.json', 'src/common/{,*/,*/*/}/*.json'],
    templates: 'src/**/*.tpl.html',
    less: ['src/{,*/,*/*/,*/*/*/}*.less'],
    output: 'dist/',
    outputCss: 'dist/**/*.css',
    tests: 'test/e2e/**/*.spec.js',
    release: 'prod/**/*'
};
