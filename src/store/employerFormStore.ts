import {create} from 'zustand';
import type {EmployerFormDataType} from '../types/EmployerFormDataType';
import type {EmployerFormStoreType} from '../types/EmployerFormStoreType';

export const useEmployeeFormStore = create<EmployerFormStoreType>((set) => ({
     formData: {
          titulo: '',
          email: '',
          departamento: '',
          status: '',
     },
     setFormData: (newData: EmployerFormDataType) =>
          set((state: any) => ({
               formData: {...state.formData, ...newData},
          })),
     resetForm: () =>
          set({
               formData: {
                    titulo: '',
                    email: '',
                    departamento: '',
                    status: '',
               },
          }),
}));
