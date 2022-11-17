import React from "react";
import { Box } from "@mui/system";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width:'100%',
        backgroundColor: "#041841",
        color: "white",
        height: "3rem",
        display: { xs: 'flex', md: 'flex'}, 
        justifyContent: "space-around",
        alignItems: "center",
        marginTop:'5rem'
      }}
    >
      <p style={{ margin: ".5rem" }}>
        © Copyright Agency and Contributors {new Date().getFullYear()} , ABN 53
        001 228 799
      </p>
      <div style={{ display: "flex" }}>
        <p style={{ margin: ".5rem" }} >
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
