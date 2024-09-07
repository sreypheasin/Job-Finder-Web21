import "./App.css";
import JobCard from "./components/cards/JobCard";
import { getJobs } from "./store/feature/job/getJobs";
import { useEffect, useState } from "react";

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      const fetchJobs = async () => {
        const jobData = await getJobs();
        setJobs(jobData.results);
        setLoading(false);
      };
      fetchJobs();
    } catch (error) {
      console.error(error);
    }
  }, []);

  console.log(jobs);

  return (
    <main>
      <section>
        <h1 className="mb-8 text-3xl font-bold text-center text-cyan-800">
          Job Listing
        </h1>
        {/* job container */}
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols md:grid-cols-3 lg:grid-cols-4 gap-5">
          {loading && <p>Loading...</p>}
          {!loading &&
            jobs.map((job, index) => {
              return (
                <JobCard
                  id={job.id}
                  title={job.title}
                  description={job.description}
                  job_type={job.job_type}
                  salary={job.salary}
                  thumbnail={job.thumbnail}
                  key={index}
                />
              );
            })}
        </div>
      </section>
    </main>
  );
}

export default App;
