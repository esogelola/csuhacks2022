import axios from "axios";
import { useEffect, useState } from "react";

const useJournal = (action) => {
  const [journals, setJournals] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [newJournal, setJournal] = useState({
    productivityRange: 0,
    hasExercised: false,
    dayDescription: "",
    username: "ameroft",
  });
  const addJournal = async () => {
    await axios
      .post("http://localhost:8080/journal/create", newJournal)
      .then((res) => {
        const updatedJournals = journals;
        updatedJournals.push(res.data.data.journal);
        console.log(updatedJournals);
        setJournals(updatedJournals);
        setSubmitted(false);
      });
  };
  useEffect(() => {
    axios
      .post("http://localhost:8080/journal/getAll", { username: "ameroft" })
      .then((res) => {
        setJournals(res.data.journal);
        setSubmitted(false);
      });
  }, [submitted]);

  return {
    journals,
    setJournals,
    setSubmitted,
    newJournal,
    setNewJournal: setJournal,
    addJournal,
    loading,
    setLoading,
  };
};

export default useJournal;
