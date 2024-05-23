"use client";
import React from "react";
import { useRouter } from "next/navigation";

function ClientPage() {
  //console.log(localStorage.getItem("token"));

  const [users, setUsers] = React.useState([]);
  const router = useRouter();

  const getData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
      //console.log(data);
    } catch (error: any) {
      alert(error.message);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-green-900">
        Client Page
      </h1>
      <hr />
      <ul>
        {users.map((user: any) => (
          <li
            key={user.id}
            onClick={() => {
              router.push(`/client/${user.id}`);
            }}
            className="cursor-pointer"
          >
            {user.name}
          </li>
        ))}
      </ul>
      <button
        className="bg-gray-800 px-4 py-2 text-white"
        onClick={() => {
          alert("Button clicked!");
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default ClientPage;
