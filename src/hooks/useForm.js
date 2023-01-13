import { useState } from "react";

export default function useForm(handleSubmit) {
  const [form, setForm] = useState({});

  const handleForm = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    console.log("submit");
    e.preventDefault();

    const rawData = new FormData(e.target);
    // console.log(data);
    const data = [...rawData.entries()].reduce(
      (a, c) => ({ ...a, [c[0]]: c[1] }),
      {}
    );
    console.log(data);
    handleSubmit && handleSubmit(data);
    //fetch(..., {body: form})
  };

  return {
    form,
    onSubmit,
    bind: {
      onChange: handleForm,
      className: "validated-input"
    }
  };
}
