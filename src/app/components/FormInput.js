export const FormInput = (props) => {
  const { label, name, error, onChange, value, type } = props;
  return (
    <div className="w-104 gap-1 flex flex-col">
      <p className="font-inter font-semibold text-[#334155] text-[14px]">
        {label}{" "}
        <span className="font-inter font-semibold text-red-700 text-[14px]">
          *
        </span>
      </p>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={label}
        name={name}
        className={`w-104 h-11 rounded-lg flex py-1 px-3 border-solid border ${
          error ? "border-red-500" : "border-[#CBD5E1]"
        } outline-none`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};
