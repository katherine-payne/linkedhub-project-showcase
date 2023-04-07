import React, { useState } from "react";
import InputField from "src/Components/Inputs/InputField";
import PrimaryButton from "src/Components/Inputs/PrimaryButton";
import { registerUser } from "src/services/user-service";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="flex flex-col max-w-xl items-center gap-4 mx-auto">
      <InputField
        placeholder="First Last"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputField
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        placeholder="Password"
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <PrimaryButton
        text="Register"
        onClick={() => {
          const newUser = {
            name: name,
            password: pass,
            contact_info: {
              email: email,
            },
          };
          registerUser(newUser);
        }}
      />
    </div>
  );
}
