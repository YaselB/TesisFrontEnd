import { AbstractControl } from '@angular/forms';

export class FortesValidator {
  static Numeric(control: AbstractControl) {
    // Number only validation. No spaces allowed
    const val = control.value;
    const test = /[^\d]/;

    if (val === null || val === '') {
      return false;
    } else {
      return !test.test(val.toString());
    }
  }

  static Alphabetic(control: AbstractControl) {
    // Alphabet only validation.
    const val = control.value;
    const test = /[^a-zA-ZáéíóúüñÁÉÍÓÚÑ\s]/;

    if (val === null || val === '') {
      return false;
    } else {
      return !test.test(val.toString());
    }
  }

  static AlphabeticExpanded(control: AbstractControl) {
    // Alphabetic with special characters.
    const val = control.value;
    const test = /[^a-zA-ZáéíóúüñÁÉÍÓÚÑ,.:;?¿!¡'"()&©®\s]/;

    if (val === null || val === '') {
      return false;
    } else {
      return !test.test(val.toString());
    }
  }

  static Alphanumeric(control: AbstractControl) {
    // No special characters validation.
    const val = control.value;
    const test = /[^\w\s]/;

    if (val === null || val === '') {
      return false;
    } else {
      return !test.test(val.toString());
    }
  }

  static AlphanumericExpanded(control: AbstractControl) {
    // Validation with certain special characters.
    const val = control.value;
    const test = /[^\wáéíóúüñÁÉÍÓÚÑ,.:;?¿!¡&©®\-*/^=()[\]{}%$¹²³€¥\s]/;

    if (val === null || val === '') {
      return false;
    } else {
      return !test.test(val.toString());
    }
  }

  static NumericExpanded(control: AbstractControl) {
    // Special characters and numbers validation.
    const val = control.value;
    const test = /[^\d+\-*/^=()[\]{}%$¹²³€¥,.\s]/;

    if (val === null || val === '') {
      return false;
    } else {
      return !test.test(val.toString());
    }
  }

  static Capitalize(control: AbstractControl) {
    // Every starting word capital validation
    const val = control.value;
    const test = /(^[a-záéíóúüñ]|\s+[a-záéíóúüñ])/;

    if (val === null || val === '') {
      return false;
    } else {
      return !test.test(val.toString());
    }
  }

  static NameCheck(control: AbstractControl) {
    // Mixes alphabetic and capital checks
    const val = control.value;

    if (val === null || val === '') {
      return false;
    } else {
      return this.Alphabetic(val) && this.Capitalize(val);
    }
  }

  static Ci(control: AbstractControl) {
    // CI validation according to cuban standards
    const val = control.value;
    const test = /^[\d{2}(0\d|1[0-2])([0-2]\d|3[0-1])\d{5}]$/;

    if (val === null || val === '') {
      return false;
    } else {
      return test.test(val.toString());
    }
  }

  static ColorCode(control: AbstractControl) {
    // Color code validation
    const val = control.value;
    const test = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

    if (val === null || val === '') {
      return false;
    } else {
      return test.test(val.toString());
    }
  }

  static Email(control: AbstractControl) {
    // Email validation
    const val = control.value;
    const test = /^[/w._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if (val === null || val === '') {
      return false;
    } else {
      return test.test(val.toString());
    }
  }

  static FullCaps(control: AbstractControl) {
    // Every letter capital validation
    const val = control.value;
    const test = /^[A-Z]*$)/;

    if (val === null || val === '') {
      return false;
    } else {
      return test.test(val.toString());
    }
  }
}
