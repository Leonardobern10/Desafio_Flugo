import {addDoc, collection, getDocs} from 'firebase/firestore';
import {db} from './firebase';
import type {EmployerFormDataType} from 'types/EmployerFormDataType';
import randomAvatarGenerate from './randomAvatarGenerate';
import {toast} from 'react-toastify';

/**
 * Busca todos os funcionários da coleção "employees" no Firestore.
 *
 * @async
 * @function getEmployees
 * @returns {Promise<EmployerFormDataType[]>} Uma promise que resolve
 * com o array de funcionários.
 * Em caso de erro, exibe uma notificação de erro e retorna um array vazio.
 */
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

/**
 * Cria um novo funcionário na coleção "employees" do Firestore.
 *
 * @async
 * @function createUser
 * @param {EmployerFormDataType} employeeData - Dados do funcionário a serem salvos.
 * @returns {Promise<void>} Uma promise que resolve quando a criação
 * for concluída.
 * Em caso de sucesso, exibe notificação de sucesso;
 * em caso de erro, exibe notificação de erro.
 */
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
