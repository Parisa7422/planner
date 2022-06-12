const FormRow = (props) => {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.handleChange}
      value={props.value}
      className="form-input"
    />
  );
};
export default FormRow;
