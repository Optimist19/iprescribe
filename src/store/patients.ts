import { create } from 'zustand'

export const usePatient = create((set)=>({
	stats: {},
	patients: [],
	userDetail: {},
	userEmail: "",
	// errMessage: "",
	getAllPatientFtn: (patientsData)=> set((state) => ({patients: patientsData})),
	getUserEmail: (data)=> set((state) => ({userEmail: data})),
	getStatFtn: (data)=>set((state)=>({stats: data}))
}))