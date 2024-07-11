import styles from "./Profile.module.css";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { Box, Stack } from "@mui/system";
import { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
export const Profilepage = ({ setOpen }) => {
  const [fileDetails, setFileDetails] = useState();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("address", data.address);
    if (data.image) {
      formData.append("image", data.image);
    }

    // .then((response) => response.json())
    // .then((data) => {
    //     console.log("Success:", data);
    //     reset();
    //     setFileDetails(null);
    //     setOpen((prev) => {
    //         if (typeof prev !== "object" || prev === null) {
    //             return prev;
    //         }
    //         return {
    //             ...prev,
    //             bool: true,
    //             message: "successfully Saved",
    //         };
    //     });
    // })
    // .catch((error) => {
    //     console.error("Error:", error);
    //     setOpen((prev) => {
    //         if (typeof prev !== "object" || prev === null) {
    //             return prev;
    //         }
    //         return {
    //             ...prev,
    //             bool: true,
    //             message: error,
    //         };
    //     });
    //     reset();
    //     setFileDetails(null);
    // });
    console.log(data);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setFileDetails((prev) => {
        return { ...prev, name: file?.name, size: file.size / (1024 * 1024) };
      });
    }
    console.log(file);
    setValue("image", file);
  };
  const handleButtonClick = () => {
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
  };

  const formatToTwoDecimalPlaces = (num) => {
    const size = Math.floor(num * 100) / 100;
    return size;
  };

  return (
    <>
      <div className={styles.profile_container}>
        <div className={styles.profile_heading}>
          <h2>My Profile</h2>
        </div>
        <div style={{ marginBottom: 35 }}>
          <button
            onClick={handleButtonClick}
            style={{
              padding: "1rem",
              maxWidth: 275,
              minWidth: 100,
              borderRadius: "1rem",
              display: "flex",
              alignContent: "center",
              gap: 6,
            }}
          >
            <PhotoCameraIcon />
            Add Profile Photo here
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              {...register("image")}
              onChange={(e) => handleFileChange(e)}
            />
          </button>
          <p style={{ display: "flex", gap: 14 }}>
            <span>{fileDetails?.name}</span>
            <span>
              {fileDetails && formatToTwoDecimalPlaces(fileDetails?.size)}
            </span>
          </p>
        </div>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            padding: 5,
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box
            maxWidth={600}
            sx={{ display: "flex", flexDirection: "column", gap: 5 }}
          >
            <Stack flexDirection={"row"} justifyContent={"space-between"}>
              <TextField label="First Name" id="fullWidth" />
              <TextField label="Last Name" id="fullWidth" />
            </Stack>
            <Stack flexDirection={"row"} justifyContent={"space-between"}>
              <TextField fullWidth label="email" id="email" />
            </Stack>
          </Box>
        </form>
      </div>
    </>
  );
};
