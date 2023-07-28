import Inputmask from 'inputmask';
const phoneInput = document.querySelector('#form-phone');

const im = new Inputmask('+7 (999)-999-99-99');
im.mask(phoneInput);