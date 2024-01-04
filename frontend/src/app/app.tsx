"use client"
import { Provider } from "react-redux"
import store from "@/common/Redux/store"
import Layout from "@/common/Components/Layout/Layout"

export default function App({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <Layout>
                {children}
            </Layout>
        </Provider>
    )
}