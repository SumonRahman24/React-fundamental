import axios from "axios";
import { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";

const AwesomeComponents = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((data) => setUsers(data.data));
    setIsLoading(false);
  }, []);
  return (
    <div>
      {isLoading && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      )}
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h2>{user.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default AwesomeComponents;
