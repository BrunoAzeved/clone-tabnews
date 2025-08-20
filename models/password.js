import bcryptjs from "bcryptjs";

function addPepper(password) {
  const pepper = process.env.PASSWORD_PEPPER || "";
  return password + pepper;
}

async function hash(password) {
  const rounds = process.env.NODE_ENV === "production" ? 14 : 1;
  const passwordWithPepper = addPepper(password);
  return await bcryptjs.hash(passwordWithPepper, rounds);
}

async function compare(providedPassword, storedPassword) {
  const passwordWithPepper = addPepper(providedPassword);
  return await bcryptjs.compare(passwordWithPepper, storedPassword);
}

const password = {
  hash,
  compare,
};

export default password;
