import {addDoc, collection, getDocs} from 'firebase/firestore';
import {db} from './firebase';
import type {EmployerFormDataType} from 'types/EmployerFormDataType';

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
          }));
     } catch (error) {
          console.error('Erro ao buscar funcionários:', error);
          return [];
     }
}

export async function createUser(
     employeeData: EmployerFormDataType
): Promise<void> {
     try {
          const docRef = await addDoc(collection(db, 'employees'), {
               titulo: employeeData.titulo,
               email: employeeData.email,
               departamento: employeeData.departamento,
               status: employeeData.status,
          });
          console.log('Document criado:', docRef.id);
     } catch (error) {
          console.error('Erro ao criar documento: ', error);
     } finally {
          console.log('Encerrando processo de criação de documento');
     }
}
