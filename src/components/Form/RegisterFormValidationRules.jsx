export default function validate(values) {
  let errors = {};

  if (!values.email) {
    errors.email = "Email is a mandatory field";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.linkedinUrl) {
    errors.linkedinUrl = "LinkedIn URL is a mandatory field";
  } else if (
    !/(https?)?:?(\/\/)?(([w]{3}||\w\w)\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(
      values.linkedinUrl
    )
  ) {
    errors.linkedinUrl = "LinkedIn URL is invalid";
  }

  if (!values.phone) {
    errors.phone = "Phone number is a mandatory field";
  }

  if (!values.companyCode) {
    errors.companyCode = "Company code is a mandatory field";
  }

  if (!values.checkbox1) {
    errors.checkbox1 = "Company code is a required.";
  }
  if (!values.checkbox2) {
    errors.checkbox2 = "You must accept the terms for the news notification.";
  }
  if (!values.checkbox3) {
    errors.checkbox3 = "You must accept the terms and conditions.";
  }

  return errors;
}
