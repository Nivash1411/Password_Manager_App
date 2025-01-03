import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TextField, Button, Checkbox, FormControlLabel, IconButton } from "@mui/material";
import { Search, Delete } from "@mui/icons-material";
import { motion } from "framer-motion";

const colorList = ["yellow", "green", "orange", "brown", "blue"];

const Home = () => {
  // Define dark mode or import useTheme if needed
  const isDarkMode = false; // Temporarily set; update as per your project's theme context
  const [isTrue, setIsTrue] = useState(false);
  const [latestList, setLatestList] = useState([]);
  const [website, setWebsite] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const listenWebsite = (e) => setWebsite(e.target.value);
  const listenUsername = (e) => setUsername(e.target.value);
  const listenPassword = (e) => setPassword(e.target.value);

  const addContent = (e) => {
    e.preventDefault();
    const initial = website.slice(0, 1).toUpperCase();
    const classValue = colorList[Math.floor(Math.random() * colorList.length)];
    const newValues = {
      id: uuidv4(),
      initialValue: initial,
      websiteName: website,
      userName: username,
      Password: password,
      classAdd: classValue,
    };
    setLatestList((prevList) => [...prevList, newValues]);
    setWebsite("");
    setUsername("");
    setPassword("");
    setIsTrue(true);
    setSearchInput("");
  };

  const showPassword = (e) => setIsShow(e.target.checked);
  const searchList = (e) => setSearchInput(e.target.value);

  const deleteItem = (id) => {
    const newList = latestList.filter((eachValue) => eachValue.id !== id);
    setLatestList(newList);
    setIsTrue(newList.length !== 0);
  };

  const filteredList = latestList.filter((eachValue) =>
    eachValue.websiteName.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-indigo-700 to-purple-600 py-10 px-6">
        <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Password Manager</h1>

          <form onSubmit={addContent} className="space-y-6">
            <div className="space-y-4">
              <TextField label="Website" variant="outlined" fullWidth value={website} onChange={listenWebsite} />
              <TextField label="Username" variant="outlined" fullWidth value={username} onChange={listenUsername} />
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                type={isShow ? "text" : "password"}
                value={password}
                onChange={listenPassword}
              />
            </div>

            <Button variant="contained" type="submit" color="primary" fullWidth>
              Add
            </Button>
          </form>
        </div>

        <div className="mt-10 max-w-4xl w-full bg-white rounded-xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <h2 className="text-2xl font-semibold text-gray-800">Your Passwords</h2>
              <p className="ml-2 text-gray-500">{filteredList.length}</p>
            </div>

            <div className="flex items-center space-x-4">
              <TextField
                label="Search"
                variant="outlined"
                size="small"
                value={searchInput}
                onChange={searchList}
                InputProps={{
                  startAdornment: <Search fontSize="small" className="mr-2 text-gray-500" />,
                }}
              />
              <FormControlLabel control={<Checkbox checked={isShow} onChange={showPassword} />} label="Show Passwords" />
            </div>
          </div>

          {!isTrue && (
            <div className="flex flex-col items-center py-12">
              <p className="text-xl text-gray-500">No Passwords</p>
            </div>
          )}

          {isTrue && (
            <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="space-y-6">
              {filteredList.map((eachValue) => (
                <motion.li
                  key={eachValue.id}
                  className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center">
                    <span
                      className={`w-12 h-12 flex items-center justify-center rounded-full text-white font-bold`}
                      style={{ backgroundColor: eachValue.classAdd }}
                    >
                      {eachValue.initialValue}
                    </span>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-800">{eachValue.websiteName}</p>
                      <p className="text-gray-600">{eachValue.userName}</p>
                      {isShow ? <p className="text-gray-800">{eachValue.Password}</p> : <span className="text-gray-400">••••••••</span>}
                    </div>
                  </div>

                  <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} onClick={() => deleteItem(eachValue.id)}>
                    <IconButton color="error">
                      <Delete />
                    </IconButton>
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
