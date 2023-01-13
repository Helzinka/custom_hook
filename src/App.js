import "./styles.css";
import useForm from "./hooks/useForm";

const emoji = {
  name: "🧑",
  email: "📧",
  password: "🔑"
};

const values = [
  {
    name: "name",
    type: "text"
  },
  {
    name: "email",
    type: "email"
  },
  {
    name: "password",
    type: "password"
  }
];

export default function App() {
  const handleSubmit = (data) => console.log(data);

  const { bind, onSubmit } = useForm(handleSubmit);

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        {values.map((val, i) => (
          <div key={val.name}>
            <span>{emoji[val.name]}</span>
            <input type={val.type} name={val.name} {...bind} />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
