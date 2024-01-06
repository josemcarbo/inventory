"use client"
import useStockPage from "./useStockPage";
import styles from "./page.module.css";
import SideBar from "@/common/Components/SideBar/SideBar";
import ProductDetail from "@/common/Components/modules/Stock/ProductDetail/ProductDetail";

export default function StockPage() {
  const { selectedProduct, isClient, isOpenModal, stock, onCloseDetailModal, onRowClick } = useStockPage()

  return (
    <main className={styles.stock_container}>
      {
        isClient && (
          <table cellPadding={0} cellSpacing={0} border={0}>
            <thead>
              <tr>
                <td><span>Name</span></td>
                <td><span>Description</span></td>
                <td><span>Cost</span></td>
                <td><span>Price</span></td>
                <td><span>Quantity</span></td>
                <td><span>Unit</span></td>
                <td><span>Arrived At</span></td>
                <td><span>Expired At</span></td>
              </tr>
            </thead>
            <tbody>
              {stock.map(row => (
                <tr key={row.id} className={styles.stock_row} onClick={() => onRowClick(row.id)}>
                  <td><span>{row.name}</span></td>
                  <td><span>{row.description}</span></td>
                  <td><span>{row.cost}</span></td>
                  <td><span>{row.price}</span></td>
                  <td><span>{row.quantity}</span></td>
                  <td><span>{row.unit}</span></td>
                  <td><span>{row.arrival_at.toDateString()}</span></td>
                  <td><span>{row.expired_at.toDateString()}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      }
      <SideBar isOpen={isOpenModal} onClose={onCloseDetailModal}>
        <ProductDetail item={selectedProduct}/>
      </SideBar>
    </main>
  )
}
