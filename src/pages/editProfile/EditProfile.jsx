import styles from "./index.module.scss";
import Button from "@/components/button";
import Avatar from "boring-avatars";
import { getCookie } from "cookies-next";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";

export default function EditProfile() {
  const [userID, setUserID] = useState({});
  const [formData, setFormData] = useState({});
  const router = useRouter();
  const user = getCookie("userData");

  useEffect(() => {
    if (user) {
      fetch(`/api/${user}`)
        .then((res) => res.json())
        .then((data) => {
          setUserID(data.data);
          setFormData({
            name: data.data.name,
            surname: data.data.surname,
            location: data.data.location,
            sports: data.data.sports,
            email: data.data.email,
          });
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [user]);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []); // Empty dependency array to memoize the function

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`/api/users/${userID._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_image}>
        <Avatar
          size={115}
          name="Maria Mitchell"
          variant="beam"
          colors={["#216869", "#57b288", "#c4e6c9", "#e9e9e9"]}
        />
        <h4>Modifica i tuoi dati personali</h4>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder={userID.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="surname"
          placeholder={userID.surname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder={userID.location}
          onChange={handleChange}
        />
        <input
          type="text"
          name="sports"
          placeholder={userID.sports}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder={userID.email}
          onChange={handleChange}
        />
        <button
          type="submit"
          className={styles.button}
          onClick={() => router.push("/profile")}
        >
          Salva le modifiche
        </button>
      </form>
    </div>
  );
}
