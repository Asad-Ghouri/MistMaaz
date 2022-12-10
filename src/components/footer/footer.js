import { Input, Typography } from "@mui/material";
import { fontSize, fontWeight } from "@mui/system";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <div>
      <div className="bg-daark text-whitee">
        <footer className="footer">
          <div>
            <Typography
              sx={{
                color: "White",
                fontWeight: 200,
                fontFamily: "sans-serif",
                fontSize: 48,
                marginLeft: 4,
                padding: "60px",
              }}
            >
              exclusible
            </Typography>
            <div>
              <div className="table">
                <p style={{ fontWeight: "bolder", fontSize: 18 }}>Contact us</p>
                <p
                  style={{
                    marginLeft: 200,
                    fontWeight: "bolder",
                    fontSize: 18,
                  }}
                >
                  Terms of use
                </p>
              </div>
              <div className="table">
                <p style={{ fontWeight: "bolder", fontSize: 18 }}>carrers </p>
                <p
                  style={{
                    marginLeft: 230,
                    fontWeight: "bolder",
                    fontSize: 18,
                  }}
                >
                  Privacy
                </p>
              </div>
              <div className="table">
                <p style={{ fontWeight: "bolder", fontSize: 18 }}>Team</p>
                <p
                  style={{
                    marginLeft: 240,
                    fontWeight: "bolder",
                    fontSize: 18,
                  }}
                >
                  FAQs
                </p>
              </div>
              <div className="table">
                <p style={{ fontWeight: "bolder", fontSize: 18 }}>About</p>
                <p></p>
              </div>
            </div>
          </div>
          <div>
            <Typography
              sx={{
                color: "White",
                fontWeight: 600,
                fontFamily: "sans-serif",
                fontSize: 20,
                marginLeft: 4,
                paddingTop: "80px",
                marginRight: 40,
              }}
            >
              Our newsletters
            </Typography>
            <div style={{ paddingLeft: 30, marginTop: 10 }}>
              Join our mailing list to stay in the loop with our newest feature{" "}
              <br />
              releases, NFT drops, and tips and tricks for navigating
              Exclusible.
            </div>
            <input
              style={{
                padding: 16,
                marginTop: 30,
                marginLeft: 28,
                backgroundColor: "transparent",
                borderRadius: 10,
                width: 300,
              }}
              type="text"
              placeholder="ex:john.doe@mail.com"
            ></input>
             <button
                  className="header-button"
                  sx={{
                    color: "black",
                    fontWeight: 600,
                    fontFamily: "sans-serif",
                    fontSize: 14,
                  }}
                >
                  SUBSCRIBE NOW
                </button>
            <div
              style={{
                marginTop: 70,
                marginLeft: 28,
                backgroundColor: "transparent",
                margin: 40,
                marginLeft: 36,
              }}
            >
              <YouTubeIcon />
              <InstagramIcon style={{marginLeft: 30}} />
              <LinkedInIcon  style={{marginLeft: 30}}/>
              <TwitterIcon  style={{marginLeft: 30}}/>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
