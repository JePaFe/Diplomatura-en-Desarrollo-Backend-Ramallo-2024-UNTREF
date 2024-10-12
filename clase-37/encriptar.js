const bcryptjs = require("bcryptjs");

const encriptar = async () => {
  const password = "Atg45-.2e";

  const hash = await bcryptjs.hash(password, 12);
  console.log(hash);
};

// encriptar();

const validar = async () => {
  const hash = "$2a$12$ohrUbNXAHFt74Ia.VkoSieq8Vx03wKQmGFqkoYQP2C/SSlkPp2gJK";
  const password = "Atg45-.2e";

  const result = await bcryptjs.compare(password, hash);

  console.log(result);
};

validar();
