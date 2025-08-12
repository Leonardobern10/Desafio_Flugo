import {addDoc, collection, getDocs} from 'firebase/firestore';
import {db} from './firebase';
import type {EmployerFormDataType} from 'types/EmployerFormDataType';
import randomAvatarGenerate from './randomAvatarGenerate';
import {toast} from 'react-toastify';

export async function getEmployees(): Promise<EmployerFormDataType[]> {
     try {
          // Referência para a coleção "employees"
          const colRef = collection(db, 'employees');
          // Recupera todos os documentos
          const snapshot = await getDocs(colRef);
          // Percorre os documentos
          return snapshot.docs.map((el) => ({
               titulo: el.get('titulo'),
               email: el.get('email'),
               departamento: el.get('departamento'),
               status: el.get('status'),
               avatar: el.get('avatar') || '',
          }));
     } catch (error) {
          toast.error('Erro ao buscar colaboradores!');
          return [];
     }
}

export async function createUser(
     employeeData: EmployerFormDataType
): Promise<void> {
     try {
          await addDoc(collection(db, 'employees'), {
               titulo: employeeData.titulo,
               email: employeeData.email,
               departamento: employeeData.departamento,
               status: employeeData.status,
               avatar: randomAvatarGenerate(),
          });
          toast.success('Cadastro realizado!');
     } catch (error) {
          toast.error('Erro ao cadastrar colaborador!');
     }
}
