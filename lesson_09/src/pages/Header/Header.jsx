import React from "react";
import Menu from "./../../components/Menu/Menu";
import Auth from './../../components/Auth/Auth'

export default function Header() {
  return (
    <header>
      <Menu />
      <Auth />
    </header>
  );
}
