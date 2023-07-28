import JustValidate from 'just-validate';
const validate = new JustValidate('#form');

validate
  .addField(
    '#form-name',
    [
      {
        rule: 'required',
        errorMessage: 'Поле обязательно',
      },
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Минимальное колличество символов 3',
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Максимальное колличество символов 30',
      },
    ],
    {
      errorsContainer: '.errors-container-name',
    }
  )
  .addField(
    '#form-phone',
    [
      {
        rule: 'required',
        errorMessage: 'Поле обязательно',
      },
      {
        rule: 'customRegexp',
        value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
        errorMessage: 'Не верно указан номер телефона',
      },
    ],
    {
      errorsContainer: '.errors-container-phone',
    }
  );