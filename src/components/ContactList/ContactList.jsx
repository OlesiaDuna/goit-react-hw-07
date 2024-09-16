import Contact from "../Contact/Contact.jsx";
import { useSelector } from "react-redux";
import css from "./ContactList.module.css";
import { getContacts } from "../../redux/contactSlice.js";
import { getNameFilter } from "../../redux/filtersSlice.js";
const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
        <li className={css.contactListItem} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
