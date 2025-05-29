export const FormMessages = {
  required: 'Campo obligatorio',
  minlength: 'El número mínimo de caracteres es ',
  maxlength: 'El número máximo de caracteres es ',
  onlyNumbers: 'EL campo solo puede contener números',
  onlyLetters: 'EL campo solo puede contener letras',
  onlyAlphaNumeric: 'El campo solo puede contener caracteres alfanúmericos',
  pattern: 'Formato incorrecto',
  email: 'Correo no válido',
  ci: 'El carné de identidad no es válido',

  getMinLength(min: number) {
    return this.minlength + min;
  },

  getMaxLength(max: number) {
    return this.maxlength + max;
  },
};
