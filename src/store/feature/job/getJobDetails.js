import { BASE_URL } from "../../api/base-url";

export function getJobDetails(id) {
  try {
    const response = fetch(`${BASE_URL}jobs/${id}/`).then((response) =>
      response.json()
    );
    console.log("response", response);
    return response;
  } catch (error) {
    console.error(error);
  }
}
