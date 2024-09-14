import { useEffect, useState } from "react";
import { JobDetailCard } from "../../components/cards/JobDetailCard";
import { BASE_URL } from "../../store/api/base-url";
import { useParams } from "react-router-dom";

export default function JobDetails() {
  const [jobDetail, setJobDetail] = useState({});
  const param = useParams();
  const id = param.id;
  useEffect(() => {
    console.log("useEffect called");
    try {
      fetch(`${BASE_URL}jobs/${id}/`)
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
