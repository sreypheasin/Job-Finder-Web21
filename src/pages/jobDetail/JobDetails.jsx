import { useEffect, useState } from "react";
import { JobDetailCard } from "../../components/cards/JobDetailCard";
import { BASE_URL } from "../../store/api/base-url";

export default function JobDetails() {
  const [jobDetail, setJobDetail] = useState({});

  useEffect(() => {
    console.log("useEffect called");
    try {
      fetch(`${BASE_URL}jobs/21bda1d6-2e6e-42f8-b0d3-bbeb9a6af6cf}`)
        .then((response) => response.json())
        .then((data) => {
          setJobDetail(data);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);
  console.log("jobDetail", jobDetail);
  return (
    <>
      <JobDetailCard />
    </>
  );
}
