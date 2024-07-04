import axios from "axios";
import React, { useEffect, useState } from "react";

const initialState = {
  name: "",
  group: "",
};
function Json() {
  const [formData, setFormData] = useState(initialState);
  const [studentList, setStudentList] = useState([]);
  const [isEdit, setIsEdit] = useState({
    status: false,
    id: null,
  });

  const getStudentData = async() => {
    try {
      const response = await axios.get("http://localhost:3001/students");
      setStudentList(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  

  const addStudent = () => {
    try {
      axios
        .post("http://localhost:3001/students", formData)
        .then((response) => {
          if (response.status === 201) {
            alert("Student added successfully");
            getStudentData();
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id) => {
    try {
      axios.delete(`http://localhost:3001/students/${id}`).then((res) => {
        if (res.status === 200) {
          alert("Student deleted successfully");
          getStudentData();
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateStudent = () => {
    try {
      axios
        .put(`http://localhost:3001/students/${isEdit.id}`, formData)
        .then((res) => {
          if (res.status === 200) {
            alert("Student updated successfully");
            getStudentData();
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (obj) => {
    setFormData({ name: obj.name, group: obj.group });
    setIsEdit({
      status: true,
      id: obj.id,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() !== "" && formData.group.trim() !== "") {
      if (isEdit.status) {
        updateStudent();
      } else {
        // addStudent();
      }
    }
    setFormData(initialState);
  };

  useEffect(() => {
    getStudentData();
  }, []);

  return (
    <div>
      <h1>Student Data</h1>
      <form onSubmit={handleSubmit}>
        <input value={formData.name} name="name" onChange={handleChange} />
        <input value={formData.group} name="group" onChange={handleChange} />
        <button type="submit">
          {isEdit.status ? "Edit Student" : "Add Student"}
        </button>
      </form>
      {studentList && studentList.length > 0 ? (
        studentList.map((val, index) => (
          <div key={index}>
            <p>Name: {val.name}</p>
            <p>Group: {val.group}</p>
            <button onClick={() => handleEdit(val)}>Edit</button>
            <button onClick={() => handleDelete(val.id)}>Delete</button>
          </div>
        ))
      ) : (
        <div>
          <p>No data to display</p>
        </div>
      )}
    </div>
  );
}

export default Json;
