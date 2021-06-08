const auth = () => ({
    createUserWithEmailAndPassword: (email) => new Promise((resolve, reject) => {
      if (email === "usuario@gmail.com") {
        resolve({
          user: {
            displayName: "Junita",
            email: "usuario@gmail.com",
          },
        });
      
      } else {
        reject({
          code: "correo no registrado",
          message: "el  correo  no se encuentra en la base de datos",
        });
      }
    }),

	signInWithEmailAndPassword: (email) => new Promise((resolve, reject) => {
		if (email === "usuario@gmail.com") {
		  resolve({
			user: {
			  displayName: "Juanita",
			  email: "usuario@gmail.com",
			},
		  });
		
		} else {
		  reject({
			code: "correo no registrado",
			message: "el  correo  no se encuentra en la base de datos",
		  });
		}
	  })
});


 export  const firebase = {
         auth,
    };

export default jest.fn(() => firebase);