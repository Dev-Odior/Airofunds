const FormInput = ({ label, name, value, id, placeHolder, type }) => {
  return (
    <div className="mb-3">
      <label className="text-[13px] font-md capitalize">{label}</label>
      <div className=" py-3 px-3 border border-[#ADB3AB] rounded-lg mt-1">
        <input
          type={type}
          className="form_input"
          placeholder={placeHolder}
          name={name}
          value={value}
          id={id}
        />
      </div>
    </div>
  );
};
export default FormInput;
