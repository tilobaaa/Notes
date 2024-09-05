import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { LuPin } from "react-icons/lu";

const Note = ({ title, content, onRemove, onPin, onEdit }) => {
  return (
    <div className="note">
      <h4>{title}</h4>
      <p>{content}</p>
      <LuPin className="pin" onClick={onPin} />
      <div className="bottom-svg">
        <MdDeleteOutline onClick={onRemove} className="delete-icon" />
        <CiEdit className="edit-icon" onClick={onEdit} />
      </div>
    </div>
  );
};

export default Note;
