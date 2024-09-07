import { BASE_URL } from "../../api/base-url";

export function getJobs() {
  try {
    const response = fetch(`${BASE_URL}jobs/`).then((response) =>
      response.json()
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}
