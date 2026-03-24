function LoginInput({ label, type, placeholder, value, onChange }) {
  return (
    <div className="login-input">
      <label className="login-input__label">{label}</label>
      <input
        className="login-input__field"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default LoginInput;