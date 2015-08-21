import angular from 'angular';
import angularMaterial from 'angular-material';
import MainController from './controllers/main';
import SettingsController from './controllers/settings';
import InstrumentController from './controllers/instrument';
import PianoRollDirective from './directives/pianoRoll';

angular
    .module('calculaural', [angularMaterial])
    .controller('mainController', MainController)
    .controller('settingsController', SettingsController)
    .controller('instrumentController', InstrumentController)
    .directive('pianoRoll', PianoRollDirective);