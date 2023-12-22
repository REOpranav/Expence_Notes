import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Member from "./Member";
import AddMember from "./AddMember";

function App() {
 
  const [user, setuser] = useState([]);
 //this is for getting form data from input   
  const [formData, setFormData] = useState({ // this for getting data from user by using state and send that into in backend
    adminName: "",
    adminAge: "",
    adminSex: "",
  });
 
  // getting data from backend
  useEffect(() => {
    axios
      .get("http://localhost:7000/chats")
      .then((res) => setuser(res.data))
      .catch((err) => console.log(err));
  }, []);

// this is for handleChanges
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  // this code for handle submit
  const handlesubmit = (e) => {
    e.preventDefault();
    // this is for posting in backend by using axios
    axios
      .post("http://localhost:7000/chats", formData)
      .then(() => {
        axios
          .get("http://localhost:7000/chats")
          .then((res) => setuser(res.data));
      })
      .catch((err) => console.log(err));
      
  // this below for clear that input fliled
    setFormData({
      adminName: "",
      adminAge: "",
      adminSex: "",
    });

  };

  return (
    <div className="container">
        <Member
           user={user}
        />
        
        <AddMember
          handleChange={handleChange}
          handlesubmit={handlesubmit}
          formData={formData}
        />
    </div>
  );
}

export default App;
