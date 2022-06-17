import React from "react";
import { TitleProps } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-react-router-v6";

const { Link } = routerProvider;

export const Title: React.FC<TitleProps> = ({ collapsed }) => (
  <Link to="/">
    {collapsed ? (
      <img
        src={"https://znews-photo.zingcdn.me/w660/Uploaded/spivovxi/2021_06_12/thoi_diem_nguy_hiem_traderviet3.jpg"}
        alt="Admin"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "12px 24px",
        }}
      />
    ) : (
      <img
        src={"https://znews-photo.zingcdn.me/w660/Uploaded/spivovxi/2021_06_12/thoi_diem_nguy_hiem_traderviet3.jpg"}
        alt="Refine"
        style={{
          width: "200px",
          padding: "12px 24px",
        }}
      />
    )}
  </Link>
);
