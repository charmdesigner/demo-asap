export default function validate(values) {
  let errors = {};

  if (!values.email) {
    errors.email = "L'e-mail est un champ obligatoire";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Adresse email invalide";
  }

  if (!values.linkedinUrl) {
    errors.linkedinUrl = "LinkedIn URL est un champ obligatoire";
  } else if (
    !/(https?)?:?(\/\/)?(([w]{3}||\w\w)\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(
      values.linkedinUrl
    )
  ) {
    errors.linkedinUrl = "LinkedIn URL est invalide";
  }

  if (!values.phone) {
    errors.phone = "Le numéro de téléphone est un champ obligatoire";
  }

  // Check if checkbox1 is checked before validating companyCode
  if (values.checkbox1) {
    if (!values.companyCode) {
      errors.companyCode = "Le code de l'entreprise est obligatoire";
    }
  } else {
    errors.checkbox1 = "Le code de l'entreprise est requis.";
  }

  if (!values.checkbox1) {
    errors.checkbox1 = "Le code de l’entreprise est obligatoire.";
  }
  if (!values.checkbox2) {
    errors.checkbox2 =
      "Vous devez accepter les conditions de notification des actualités.";
  }
  if (!values.checkbox3) {
    errors.checkbox3 = "Vous devez accepter les Termes et Conditions.";
  }

  return errors;
}
