import Form from "./form.jsx";
import styles from "./addtransaction.module.css";
const AddTransaction=()=>
{
   return (
    <div className={styles.transactiondiv}>
      <h2 className={styles.heading}>Add new transaction</h2>
      <Form></Form>
    </div>    
   );
}
export default AddTransaction;