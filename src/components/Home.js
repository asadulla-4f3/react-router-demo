import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div>Home Page</div>
      <button onClick={() => navigate("order-summary", { replace: true })}>
        Place Order
      </button>
    </>
  );
}

export default Home;

// class HelloWorld extends React.Component {
//   handleChange = (name) => {
//     if (!this.handlers[name]) {
//       this.handlers[name] = (event) => {
//         this.setState({ [name]: event.target.value });
//       };
//     }

//     return this.handlers[name];
//   };
//   render() {
//     return (
//       <>
//         <input onChange={this.handleChange("name")} />
//         <input onChange={this.handleChange("description")} />{" "}
//       </>
//     );
//   }
// }
