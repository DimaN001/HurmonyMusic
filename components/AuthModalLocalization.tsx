// Українська локалізація форм
const AuthModalLocalization = {
    sign_up: {
      email_label: 'Електронна адреса',
      password_label: 'Створити пароль',
      email_input_placeholder: 'Ваша електронна адреса',
      password_input_placeholder: 'Ваш пароль',
      button_label: 'Зареєструватися',
      loading_button_label: 'Реєстрація...',
      social_provider_text: 'Увійти через {{provider}}',
      link_text: 'Не маєте облікового запису? Зареєструйтесь',
      confirmation_text: "Перевірте свою електронну пошту для підтвердження "
    },
    sign_in: {
      email_label: 'Електронна адреса',
      password_label: 'Пароль',
      email_input_placeholder: 'Ваша електронна адреса',
      password_input_placeholder: 'Ваш пароль',
      button_label: 'Увійти',
      loading_button_label: 'Вхід...',
      social_provider_text: 'Увійти через {{provider}}',
      link_text: 'Вже маєте обліковий запис? Увійдіть',
      message: 'Невірні облікові дані для входу',
      status: 400,
      errorCode: 1  
      
    },
    magic_link: {
      email_input_label: 'Електронна адреса',
      email_input_placeholder: 'Ваша електронна адреса',
      button_label: 'Надіслати посилання на пошту',
      loading_button_label: 'Надсилання посилання на пошту...',
      link_text: 'Вхід за допомогою електронної пошти',
      confirmation_text: "Перевірте свою електронну пошту для підтвердження "
    },
    forgotten_password: {
      email_label: 'Електронна адреса',
      password_label: 'Ваш пароль',
      email_input_placeholder: 'Ваша електронна адреса',
      button_label: 'Надіслати інструкції для скидання пароля',
      loading_button_label: 'Надсилання інструкцій...',
      link_text: 'Забули пароль?',
    },
    update_password: {
      password_label: 'Новий пароль',
      password_input_placeholder: 'Ваш новий пароль',
      button_label: 'Оновити пароль',
      loading_button_label: 'Оновлення пароля...',
    },
  };
  
  export default AuthModalLocalization;