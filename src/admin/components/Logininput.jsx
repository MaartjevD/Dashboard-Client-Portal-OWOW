function LoginInput({ label, type, placeholder, value, onChange }) {
  return (
    <div className="mb-3">
      <label className="form-label small fw-semibold">
        {label}
      </label>

      <input
        className="form-control"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default LoginInput;