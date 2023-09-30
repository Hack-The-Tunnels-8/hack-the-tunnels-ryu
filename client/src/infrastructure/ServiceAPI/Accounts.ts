export const login = async (email: string, password: string) => {
  console.log("i got here")
  const response = await fetch(
    `${import.meta.env.VITE_API_ROOT}/api/v1/login`,
    {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const json = await response.json();
  console.log(JSON.stringify(json))
  return json;
};
