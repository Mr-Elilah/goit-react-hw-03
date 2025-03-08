import { FaUser, FaPhoneAlt, FaRegTrashAlt } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ id, name, number, onDelete }) {
  return (
    <>
      <div>
        <p className={css.text}>
          <FaUser /> &nbsp;{name}
        </p>
        <p className={css.text}>
          <FaPhoneAlt /> &nbsp;
          {number}
        </p>
      </div>
      <button className={css.btn} type="button" onClick={() => onDelete(id)}>
        Delete &nbsp; &nbsp;
        <FaRegTrashAlt />
      </button>
    </>
  );
}
