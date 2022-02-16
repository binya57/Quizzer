import React, { useEffect, useState } from "react";

const AllCandidates = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const candidates = localStorage.getItem("candidates");
    candidates && setCandidates(JSON.parse(candidates));
  }, []);

  return candidates.map((candidate) => <div>{candidate.fName}</div>);
};

export default AllCandidates;
