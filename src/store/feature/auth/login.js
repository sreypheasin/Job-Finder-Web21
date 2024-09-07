import { BASE_URL } from "../../api/base-url";

export function login(values) {
  console.log("values", values);
  try {
    const response = fetch(`${BASE_URL}login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    }).then((response) => response.json());
    return response;
  } catch (error) {
    console.error(error);
  }
}
