import {addDoc, collection, getDocs} from 'firebase/firestore';
import {db} from './firebase';
import type {EmployerFormDataType} from 'types/EmployerFormDataType';

export async function getEmployees(): Promise<void> {
     try {
          // Referência para a coleção "employees"
          const colRef = collection(db, 'employees');
          // Recupera todos os documentos
          const snapshot = await getDocs(colRef);
          // Percorre os documentos
          const funcionarios = snapshot.docs.map((doc) => ({
               id: doc.id,
               ...doc.data(),
          }));
          console.log(funcionarios);
     } catch (error) {
          console.error('Erro ao buscar funcionários:', error);
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
