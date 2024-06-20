// import React, { useState } from 'react';
// import axios from 'axios';

// const Signup = () => {
//     const [email, setEmail] = useState('');
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:5000/api/signup', { email, username, password });
//             alert('Signup successful');
//         } catch (error) {
//             console.error('Signup failed', error);
//         }
//     };

//     return (
//         <div style={styles.container}>
//             <h2>Signup</h2>
//             <form onSubmit={handleSubmit} style={styles.form}>
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     style={styles.input}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     style={styles.input}
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     style={styles.input}
//                 />
//                 <button type="submit" style={styles.button}>Signup</button>
//             </form>
//         </div>
//     );
// };

// const styles = {
//     container: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: '100vh',
//         color: '#fff',
//     },
//     form: {
//         display: 'flex',
//         flexDirection: 'column',
//         width: '300px',
//     },
//     input: {
//         margin: '10px 0',
//         padding: '10px',
//         borderRadius: '5px',
//         border: '1px solid #ccc',
//         width: '100%',
//     },
//     button: {
//         padding: '10px',
//         borderRadius: '5px',
//         border: 'none',
//         backgroundColor: '#ff4500',
//         color: '#fff',
//         cursor: 'pointer',
//     },
// };

// export default Signup;


// import React, { useState } from 'react';
// import axios from 'axios';

// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/signup', {
//         email, username, password
//       });
//       console.log('Signup successful', response.data);
//     } catch (error) {
//       console.error('Error signing up', error);
//     }
//   };

//   return (
//     <div className="main-content">
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;


// import React, { useState } from 'react';
// import axios from 'axios';

// const Signup = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('/api/signup', { username, password, email });
//       console.log(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           style={styles.input}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           style={styles.input}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={styles.input}
//         />
//         <button type="submit" style={styles.button}>Signup</button>
//       </form>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     padding: '20px',
//     backgroundColor: '#222',
//     color: '#fff',
//     minHeight: '100vh',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   input: {
//     marginBottom: '10px',
//     padding: '10px',
//     borderRadius: '5px',
//     border: 'none',
//   },
//   button: {
//     padding: '10px',
//     borderRadius: '5px',
//     border: 'none',
//     backgroundColor: '#ff4500',
//     color: '#fff',
//     cursor: 'pointer',
//   },
// };

// export default Signup;


import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/signup', { email, username, password });
      alert('Signup successful');
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Signup</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    color: '#fff',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
  },
  input: {
    margin: '10px 0',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
  },
  button: {
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#ff4500',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default Signup;
