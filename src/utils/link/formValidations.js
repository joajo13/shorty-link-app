export const linkValidationRules = {
    url: {
      required: "Please enter a url",
      pattern: {
        value: /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        message: "Please enter a valid url",
      },
    },
    customUrl: {
      pattern: {
        value: /^[a-zA-Z0-9]+$/,
        message: "Only letters and numbers are allowed",
      },
    },
  };