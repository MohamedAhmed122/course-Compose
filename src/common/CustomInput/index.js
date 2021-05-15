import CancelIcon from "@material-ui/icons/Cancel";

import './styleInput.css'


export default function CustomInput({ icon, onIconClick, ...props }) {
  return (
    <div className="custom_input flex_center">
      <input className="custom_input__input" {...props} />
      {icon && <CancelIcon style={{ color: "gray" }} onClick={onIconClick} />}
    </div>
  );
}