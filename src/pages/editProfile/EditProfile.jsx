import styles from "./index.module.scss";
import Avatar from "boring-avatars";
import { getCookie } from "cookies-next";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";

export default function EditProfile() {
  const [userID, setUserID] = useState({});
  const [formData, setFormData] = useState({});
  const router = useRouter();
  const user = getCookie("userData");
  const userCookie = getCookie("userData");

  useEffect(() => {
    if (!userCookie) {
      router.push("/signIn");
    } else {
      router.push("/editProfile");
    }
  }, [userCookie]);

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
      birthdate: Date.now(),
    }));
  }, []); // Empty dependency array to memoize the function

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userID._id);

    fetch(`/api/users/${userID._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
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
          colors={["#59ce93", "#e5ffb2", "#9ff7aa"]}
        />
        <h4>Modifica i tuoi dati personali</h4>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label>Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={userID.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Cognome:</label>
          <input
            type="text"
            id="surname"
            name="surname"
            placeholder={userID.surname}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Località:</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder={userID.location}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Sport preferito:</label>
          <input
            type="text"
            id="sports"
            name="sports"
            placeholder={userID.sports}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder={userID.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Modifiche terminate?</label>
          <button
            type="submit"
            className={styles.button}
            onClick={() => router.push("/profile")}
          >
            Si, Salva
          </button>
        </div>
      </form>
    </div>
  );
}
