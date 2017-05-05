require('../sass/style.scss');
import { setup } from './setup';
import { game } from './game';

setup.go();

window.game = game;