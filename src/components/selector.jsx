// Importation du hook useStore du store Zustand
import {useStore} from "../store/store.js";
const Selector = () => {

    // Accès aux informations de l'utilisateur depuis le store
    const user = useStore((state) => state.userInformations)

    // Rendu JSX du composant
    return (
        <>
            {user ? (
                <>
                    <h3>{user.login}</h3>
                    <h4>{user.token}</h4>
                    <h5>{user.id}</h5>
                </>
            ) : <h2>Chargement...</h2>}
        </>
    )
}

export default Selector;
