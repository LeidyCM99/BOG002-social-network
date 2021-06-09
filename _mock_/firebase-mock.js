const auth = () => ({
    createUserWithEmailAndPassword: (email) => new Promise((resolve, reject) => {
      if (email === "usuario@gmail.com") {
        resolve({
          user: {
            displayName: "Juanita",
            email: "usuario@gmail.com",
          },
        });
      
      } else {
        reject({
          code: "correo registrado",
          message: "el correo ya esta siendo usado",
        });
      }
    }),

	signInWithEmailAndPassword: (email) => new Promise((resolve, reject) => {
		if (email === "usuarioRegistrado@gmail.com") {
		  resolve({
			user: {
			  displayName: "Juanita",
			  email: "usuarioRegistrado@gmail.com"
			},
		  });
		
		} else {
		  reject({
			code: "correo no registrado ",
			message: "el correo es invalido",
		  });
		}
	  })
});


 export  const firebase = {
         auth,
    };

export default jest.fn(() => firebase);