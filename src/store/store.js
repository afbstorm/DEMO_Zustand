// Importation de la fonction 'create' de Zustand
import { create } from 'zustand';

// Définition de l'état initial pour le store
const initialState = {
    id: null,
    login: '',
    jwt: ''
}

// Création du store Zustand
export const useStore = create((set) => ({
    // Définition de la variable d'état userInformations avec l'état initial
    userInformations: initialState,

    // Action pour mettre à jour userInformations dans le store
    // Elle prend newUserInfo comme paramètre et utilise la méthode set pour mettre à jour l'état
    addUserInformations: (newUserInfo) => set((state) => ({
        ...state, // Répartition de l'état actuel
        userInformations: newUserInfo // Mise à jour de userInformations avec newUserInfo
    }))
}))
