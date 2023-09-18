import { data1, data2 } from "./Parent";

const Child4 = () => {
  return (
    <data1.Consumer>
      {(name) => {
        return (
          <data2.Consumer>
            {(age) => {
              return (
                <h2>
                  my name is {name} and age is {age}
                </h2>
              );
            }}
          </data2.Consumer>
        );
      }}
    </data1.Consumer>
  );
};

export default Child4;
