import {useStore} from "../store/store.js";
import {useEffect} from "react";
import {fetchUserInfos} from "../api.js";
import Selector from "./selector.jsx";
const Dispatch = () => {
    // Accès à l'action addUserInformations du store
    const addUserInformations = useStore((state) => state.addUserInformations);

    // Hook useEffect pour charger les informations utilisateur au montage du composant
    useEffect(() => {
        // Fonction asynchrone pour charger les informations utilisateur
        const loadUserInfos = async () => {
            try {
                // Récupération des informations utilisateur depuis l'API
                const result = await fetchUserInfos();
                // Si le résultat est disponible, mise à jour de l'état du store
                if (result) {
                    addUserInformations(result);
                }
            } catch (error) {
                // Gestion des erreurs
                console.error('Erreur lors de la récupération des infos utilisateur:', error);
            }
        };

        // Appel de la fonction pour charger les informations utilisateur
        loadUserInfos();
    }, []); // Le tableau de dépendances vide assure que cela ne s'exécute qu'une seule fois

    // JSX retourné par le composant
    return (
        <>
            <h2>Hello World</h2>
            <Selector />
        </>
    )
}

export default Dispatch;
