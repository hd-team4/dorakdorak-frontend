import styles from "@/css/order/OrderSuccessTable.module.css";
import { OrderItem } from "@/types/OrderSuccess";

interface Props {
  orders: OrderItem[];
}

const OrderSuccessTable = ({ orders }: Props) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.headerRow}>
          <th className={styles.cell}>도시락명</th>
          <th className={styles.cell}>금액</th>
          <th className={styles.cell}>수량</th>
          <th className={styles.cell}>주문상태</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((item, index) => (
          <tr key={index} className={styles.row}>
            <td className={`${styles.cell} ${styles.nameCell}`}>
              <img
                src={item.imageUrl}
                alt={item.name}
                className={styles.image}
                />
              {item.name}
            </td>
            <td className={styles.cell}>{item.price.toLocaleString()} 원</td>
            <td className={styles.cell}>{item.amount} 개</td>
            <td className={styles.cell}>결제 완료</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderSuccessTable;
