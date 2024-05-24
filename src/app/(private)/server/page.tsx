import React from "react";
import Useritem from "./_components/Useritem";

export async function getData() {
  try {
    const response = await fetch("http://localhost:3000/api/users",{next:{revalidate:15},});
    const {data }= await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

async function ServerPage() {
  const users = await getData();
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-green-900">
        Server Page
      </h1>
      <hr />
      <ul>
        {users.map((user: any) => (
          <Useritem key ={user.id} user={user}/>
        ))}
      </ul>

    </div>
  );
}

export default ServerPage;
