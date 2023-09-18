import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

const Rechart = () => {
  const physicsMarksData = [
    { semester: 1, physics: 70 },
    { semester: 2, physics: 75 },
    { semester: 3, physics: 40 },
    { semester: 4, physics: 85 },
    { semester: 5, physics: 90 },
  ];

  const personData = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 40 },
    { name: "Emma", age: 28 },
  ];

  return (
    <>
      <div>
        <LineChart width={400} height={400} data={physicsMarksData}>
          <Line type="monotone" dataKey="physics" stroke="blue" />
        </LineChart>
      </div>
      <div>
        <LineChart width={600} height={300} data={personData}>
          <Line type="monotone" dataKey="age" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </div>
    </>
  );
};

export default Rechart;
