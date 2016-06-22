import * as Config from "app/app.config";

describe('app configuration', () => {

    describe('function mdTheming', () => {
        it('should configure the dark-red material theming', function () {
            let themeSpy = jasmine.createSpy('theme'),
                paletteSpy = jasmine.createSpy('palette'),
                colorSpy = jasmine.createSpy('color');
            let $mdThemingProvider = {
                theme: (themeName) => {
                    themeSpy(themeName);
                    return {
                        backgroundPalette: (color) => {
                            paletteSpy(color);
                            return {dark: colorSpy};
                        }
                    };
                }
            };
            Config.mdTheming($mdThemingProvider);
            expect(themeSpy).toHaveBeenCalledWith('dark-red');
            expect(paletteSpy).toHaveBeenCalledWith('red');
            expect(colorSpy).toHaveBeenCalled();
        });
    });

});
