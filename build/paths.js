module.exports = {
    source: ['src/app/{,*/,*/*/}*.js', 'src/common/{,*/,*/*/}*.js'],
    html: ['src/app/{,*/,*/*/}*.html'],
    config: ['src/config/{,*/,*/*/}*.json'],
    index: 'index.html',
    json: ['src/app/{,*/,*/*/}/*.json', 'src/common/{,*/,*/*/}/*.json'],
    templates: 'src/**/*.tpl.html',
    less: ['src/{,*/,*/*/,*/*/*/}*.less'],
    output: 'dist/',
    outputCss: 'dist/**/*.css',
    tests: 'test/e2e/**/*.spec.js',
    release: 'prod/**/*',
    releaseFolder: 'prod/', 
    jspm: ['./jspm_packages/**/*.{js,js.map,css}','!./jspm_packages/**/*.{gzip,md,json}'],
    systemConfig:  'system.config.js'
};
