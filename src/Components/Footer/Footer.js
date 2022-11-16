import React from "react";
import { Box } from "@mui/system";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "absolute",
        bottom:0,
        left:0,
        width:'100%',
        backgroundColor: "#2c566d",
        color: "white",
        height: "3rem",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <p style={{ margin: ".5rem" }}>
        © Copyright Agency and Contributors {new Date().getFullYear()} , ABN 53
        001 228 799
      </p>
      <div style={{ display: "flex" }}>
        <p style={{ margin: ".5rem" }}>
          <i className="fa-brands fa-facebook-f"></i>
        </p>
        <p style={{ margin: ".5rem" }}>
          <i className="fa-brands fa-twitter"></i>
        </p>
        <p style={{margin: ".5rem" }}>
          <i className="fa-brands fa-instagram"></i>
        </p>
        <p style={{ margin: ".5rem" }}>
          <i className="fa-brands fa-youtube"></i>
        </p>
      </div>
    </Box>
  );
}

export default Footer;
