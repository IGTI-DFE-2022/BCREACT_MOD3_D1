const BASE_URL = "http://localhost:3001";

export function login(user: string, password: string) {
  return fetch(`${BASE_URL}/sessao/criar`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email: user, senha: password }),
  });
}

export function logout() {
  return fetch(`${BASE_URL}/sessao/finalizar `, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
}
