import type { Metadata } from 'next'
import './globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Grid from '@mui/material/Grid';
import SideBar from '@/common/Components/SideBar/SideBar';
import AppName from '@/common/Components/AppName/AppName';

export const metadata: Metadata = {
  title: 'Inventory',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <AppName />
              </Grid>
              <Grid item xs={12}>
                <SideBar />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={9}>
            {children}
          </Grid>
        </Grid>
      </body>
    </html>
  )
}
