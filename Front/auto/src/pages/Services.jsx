import { useEffect, useState } from "react";
import axios from "axios";
import AddServiceForm from "../components/AddServiceForm";
import ServiceTable from "../components/ServiceTable";

function Categories() {
  const [categories, setCategories] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    fetchCategories();
    return () => setIsMounted(false);
  }, []);
  //TODO: move these calls to a service
  const fetchCategoriesOnDelete = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:8080/api/v1/servisai");
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false); // set loading state back to false regardless of success or error
    }
  };

  const fetchCategories = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:8080/api/v1/servisai");
      if (isMounted && response.status === 200) {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 2000);
      }
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (values, { resetForm }) => {
    console.log(values);
    const newCategory = {
      name: values.name,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/servisai",
        newCategory
      );
      resetForm();
      fetchCategories();
    } catch (error) {
      console.log("Error adding category:", error);
    }
  };

  const handleDelete = async (id) => {
    const url = `http://localhost:8080/api/v1/servisai/${id}`;
    try {
      const response = await axios.delete(url);
      console.log(response.data);
      fetchCategoriesOnDelete();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AddServiceForm
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        success={showAlert}
      />
      <ServiceTable categories={categories} handleDelete={handleDelete} />
    </>
  );
}

export default Categories;
