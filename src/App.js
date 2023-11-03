import React from "react";

function List() {
  const students = [
    {
      Measure: "flavanoids mean",
      Class1: "",
      Class2: "",
      Class3: "",
      Class4: "",
    },
    {
      Measure: "flavanoids median",
      Class1: "",
      Class2: "",
      Class3: "",
      Class4: "",
    },
    {
      Measure: "flavanoids mode",
      Class1: "",
      Class2: "",
      Class3: "",
      Class4: "",
    },
  ];

  const student = [
    {
      Measure: "Gamma mean",
      Class1: "",
      Class2: "",
      Class3: "",
      Class4: "",
    },
    {
      Measure: "Gamma median",
      Class1: "",
      Class2: "",
      Class3: "",
      Class4: "",
    },
    {
      Measure: "Gamma mode",
      Class1: "",
      Class2: "",
      Class3: "",
      Class4: "",
    },
  ];

  return (
    <React.Fragment>
      <div className="flex ml-20">
    <div className="py-10 ml-20 text-center">
    <h1>Format 1</h1>
      <table className="ml:2px border w-[450px] h-[300px] ">
        <tr className="border">
          <td className="border">Measure</td>
          <td className="border">Class1</td>
          <td className="border">Class2</td>
          <td className="border">Class3</td>
          <td className="border">Class4</td>
        </tr>
        {students.map((data) => (
          <tr className="border">
            <td className="border">{data.Measure}</td>
            <td className="border">{data.Class1}</td>
            <td className="border">{data.Class2}</td>
            <td className="border">{data.Class3}</td>
            <td className="border">{data.Class4}</td>
          </tr>
        ))}
      </table>
    </div>


    <div className="py-10 ml-20 text-center">
    <h1>Format 2</h1>
      <table className="ml:2px border w-[450px] h-[300px] ">
        <tr className="border">
          <td className="border">Measure</td>
          <td className="border">Class1</td>
          <td className="border">Class2</td>
          <td className="border">Class3</td>
          <td className="border">Class4</td>
        </tr>
        {student.map((data) => (
          <tr className="border">
            <td className="border">{data.Measure}</td>
            <td className="border">{data.Class1}</td>
            <td className="border">{data.Class2}</td>
            <td className="border">{data.Class3}</td>
            <td className="border">{data.Class4}</td>
          </tr>
        ))}
      </table>
    </div>
    </div>
    </React.Fragment>
  );
}

export default List;
