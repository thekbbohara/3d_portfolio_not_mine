import React from "react";

export default function Footer() {
  return (
    <>
      <footer
        style={{
          margin: "0px",
          boxSizing: "border-box",
          scrollbarColor: "rgb(142, 142, 142) rgb(255, 255, 255)",
          scrollbarWidth: "thin",
          padding: "5rem 0px",
          backgroundColor: "rgb(45, 46, 50)",
          width: "100%",
        }}
      >
        <div
          className="container"
          style={{
            boxSizing: "border-box",
            scrollbarColor: "rgb(142, 142, 142) rgb(255, 255, 255)",
            scrollbarWidth: "thin",
            margin: "0px auto",
            padding: "0px 4rem",
            maxWidth: "107rem",
          }}
        >
          <div
            className="footerc"
            style={{
              margin: "0px",
              padding: "0px",
              boxSizing: "border-box",
              scrollbarColor: "rgb(142, 142, 142) rgb(255, 255, 255)",
              scrollbarWidth: "thin",
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h3
              style={{
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                scrollbarColor: "rgb(142, 142, 142) rgb(255, 255, 255)",
                scrollbarWidth: "thin",
                color: "rgb(255, 255, 255)",
                fontSize: "1.7rem",
              }}
            >
              Copyright © 2024. All rights are reserved
            </h3>
            <div
              className="footerc__socials"
              style={{
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                scrollbarColor: "rgb(142, 142, 142) rgb(255, 255, 255)",
                scrollbarWidth: "thin",
                gap: "2rem",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              <a
                aria-label="linkedin"
                href="#"
                rel="noreferrer"
                target="_blank"
                style={{
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  scrollbarColor: "rgb(142, 142, 142) rgb(255, 255, 255)",
                  scrollbarWidth: "thin",
                  color: "rgb(255, 255, 255)",
                  fontSize: "2.3rem",
                }}
              >
                <svg
                  className="tabler-icon tabler-icon-brand-linkedin"
                  height="30"
                  width="30"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                    scrollbarColor: "rgb(142, 142, 142) rgb(255, 255, 255)",
                    scrollbarWidth: "thin",
                  }}
                >
                  <path
                    d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
                    style={{
                      margin: "0px",
                      padding: "0px",
                      boxSizing: "border-box",
                      scrollbarColor: "rgb(142, 142, 142) rgb(255, 255, 255)",
                      scrollbarWidth: "thin",
                    }}
                  />
                  <path
                    d="M8 11l0 5"
                    style={{
                      margin: "0px",
                      padding: "0px",
                      boxSizing: "border-box",
                      scrollbarColor: "rgb(142, 142, 142) rgb(255, 255, 255)",
                      scrollbarWidth: "thin",
                    }}
                  />
                  <path
                    d="M8 8l0 .01"
                    style={{
                      margin: "0px",
                      padding: "0px",
                      boxSizing: "border-box",
                      scrollbarColor: "rgb(142, 142, 142) rgb(255, 255, 255)",
                      scrollbarWidth: "thin",
                    }}
                  />
                  <path
                    d="M12 16l0 -5"
                    style={{
                      margin: "0px",
                      padding: "0px",
                      boxSizing: "border-box",
                      scrollbarColor: "rgb(142, 142, 142) rgb(255, 255, 255)",
                      scrollbarWidth: "thin",
                    }}
                  />
                  <path
                    d="M16 16v-3a2 2 0 0 0 -4 0"
                    style={{
                      margin: "0px",
                      padding: "0px",
                      boxSizing: "border-box",
                      scrollbarColor: "rgb(142, 142, 142) rgb(255, 255, 255)",
                      scrollbarWidth: "thin",
                    }}
                  />
                </svg>
              </a>
              <a
                aria-label="github"
                href="https://github.com/Rayan37307"
                rel="noreferrer"
                target="_blank"
                style={{
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  scrollbarColor: "rgb(142, 142, 142) rgb(255, 255, 255)",
                  scrollbarWidth: "thin",
                  color: "rgb(255, 255, 255)",
                  fontSize: "2.3rem",
                }}
              >
                <svg
                  className="tabler-icon tabler-icon-brand-github"
                  height="30"
                  width="30"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                    scrollbarColor: "rgb(142, 142, 142) rgb(255, 255, 255)",
                    scrollbarWidth: "thin",
                  }}
                >
                  <path
                    d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
                    style={{
                      margin: "0px",
                      padding: "0px",
                      boxSizing: "border-box",
                      scrollbarColor: "rgb(142, 142, 142) rgb(255, 255, 255)",
                      scrollbarWidth: "thin",
                    }}
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  scrollbar-color: rgb(142, 142, 142) rgb(255, 255, 255);
  scrollbar-width: thin;
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  scrollbar-color: rgb(142, 142, 142) rgb(255, 255, 255);
  scrollbar-width: thin;
  background-color: rgb(255, 255, 255);
  font-family: Poppins, sans-serif;
  position: relative;
}
`,
        }}
      />
    </>
  );
}
