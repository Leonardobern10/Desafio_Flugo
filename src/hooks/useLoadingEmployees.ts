import {getEmployees} from '@services/employeeService';
import type {EmployerFormDataType} from '../types/EmployerFormDataType';
import {useEffect, useState} from 'react';

/**
 * Hook customizado para carregar a lista de funcionários,
 * gerenciando estado de loading e erro.
 *
 * @returns {Object} Objeto com os seguintes campos:
 *  - employees: array de funcionários do tipo EmployerFormDataType[]
 *  - loading: boolean indicando se a requisição está em andamento
 *  - error: objeto Error ou null caso não tenha erro
 */
export default function useLoadingEmployees() {
     const [employees, setEmployees] = useState<EmployerFormDataType[]>([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState<Error | null>(null);

     useEffect(() => {
          const fetchEmployees = async () => {
               try {
                    const data = await getEmployees();
                    setEmployees(data);
               } catch (err) {
                    setError(err as Error);
               } finally {
                    setLoading(false);
               }
          };
          fetchEmployees();
     }, []);

     return {employees, loading, error};
}
