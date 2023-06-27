import { useEffect, useState } from "react";
import axios from "axios";
import AddWorkerForm from "../components/AddWorkerForm";
import WorkerTable from "../components/WorkerTable";

function Books() {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setIsMounted(true);
    fetchExpenses();
    fetchCategories();
    return () => setIsMounted(false);
  }, []);

  const fetchExpensesOnDelete = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:8080/api/v1/meistrus");
      setExpenses(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/servisai");
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchExpenses = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:8080/api/v1/meistrus");
      if (isMounted && response.status === 200) {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 2000);
      }
      setExpenses(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (values, { resetForm }) => {
    console.log(values);
    const newExpense = {
      name: values.name,
      amount: parseFloat(values.amount),
      date: values.date.toISOString().substr(0, 10),
      categoryName: values.category,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/meistrus",
        newExpense
      );
      resetForm();
      fetchExpenses();
    } catch (error) {
      console.log("Error adding expense:", error);
    }
  };

  const handleDelete = async (id) => {
    const url = `http://localhost:8080/api/v1/meistrus/${id}`;
    try {
      const response = await axios.delete(url);
      console.log(response.data);
      fetchExpensesOnDelete();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AddWorkerForm
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        success={showAlert}
        categories={categories}
      />
      <WorkerTable
        expenses={expenses}
        handleDelete={handleDelete}
        categories={categories}
      />
    </>
  );
}

export default Books;
