import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import auth from '../Firebase/firebase.config';

export const UserContext = createContext<null | object>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    //States
    const [user, setUser] = useState<null | object>(null);
    const [loading, setLoading] = useState(true);




    //Prop types
    type userInfoProps = {
        email: string,
        password: string
    }


    //Create a user
    const createUser = ({ email, password }: userInfoProps) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //Login a user
    const loginUser = ({ email, password }: userInfoProps) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //logOut a user
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }




    //User observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });


        return () => unSubscribe();
    }, [])



    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOutUser
    }


    return <UserContext.Provider value={authInfo}>
        {children}
    </UserContext.Provider>
}

export default AuthProvider