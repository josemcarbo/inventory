"use client"
import { Grid } from "@mui/material";
import NavBar from "../NavBar/NavBar";
import styles from "./Layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.layout_container}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </main>
  )
}
